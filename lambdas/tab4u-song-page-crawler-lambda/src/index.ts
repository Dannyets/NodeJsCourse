import { File, Domain, SourceType, TargetSource } from "@infra/models";
import { clientFactory, serviceFactory } from '@infra/factories';
import { configUtils } from '@infra/utils';

configUtils.configureAws();

const domainTypeToAddress = {
    [Domain.Tab4U]: 'www.tab4u.com',
    [Domain.UltimateGuitar]: 'tabs.ultimate-guitar.com'
};

export const handler = async (file: File): Promise<any> => {
    const html = await clientFactory.createDownloadClient()!
                                    .getFile(file);

    const htmlParser = serviceFactory.createHtmlParserService();
    
    const htmlDoc = htmlParser.getDocument(html);

    const links = htmlParser.getValues<string>(htmlDoc, 
                                               'a[href^="/tabs/songs/"', 
                                               e => e.getAttribute('href') || '');
    
    const fullLinks = links.map(link => `http://${domainTypeToAddress[file.metadata.source.domain]}${link}`)

    console.log(`Links: `, fullLinks);

    clientFactory.createNotificationClient()
                 .notify({
                     content: fullLinks,
                     target: 'html-sources'
                 });
};

handler({
    content: '',
    metadata: {
        id: 'Tab4U/3_Christina_Aguilera_-_Your_Body.html',
        source: {
            domain: Domain.Tab4U,
            sourceType: SourceType.SongPage,
            url: 'https://www.tab4u.com/tabs/songs/3_Christina_Aguilera_-_Your_Body.html'
        },
        target: {
            name: 'tab-lab-raw-songs',
            source: TargetSource.S3,
            location: 'https://tab-lab-raw-songs.s3.amazonaws.com/Tab4U/3_Christina_Aguilera_-_Your_Body.html',
        }
    }
});