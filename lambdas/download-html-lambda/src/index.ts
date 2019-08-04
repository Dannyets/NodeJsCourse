import axios from 'axios';

import { DownloadSourceEvent } from './models';
import { File, Domain, SourceType, TargetSource } from "@infra/models";
import { clientFactory, serviceFactory } from '@infra/factories';
import { configUtils } from '@infra/utils';

configUtils.configureAws();

export const handler = async (downloadHtmlEvent: DownloadSourceEvent): Promise<any> => {
    const { source, target } = downloadHtmlEvent;

    console.log(`Getting source from url: ${source.url}`);

    const response = await axios.get<string>(source.url);
    const { data: html } = response;
    
    console.log(`Source content: ${html.slice(0, 100)}`);

    //Move to tab4u page crawler
    const htmlParser = serviceFactory.createHtmlParserService();
    const htmlDoc = htmlParser.getDocument(html);
    const elements = htmlParser.getValues<string>(htmlDoc, 
                                                  'a[href^="/tabs/songs/"', 
                                                  e => e.getAttribute('href') || '');
    
    console.log(elements);

    const file = new File(source, target, html);

    console.log(`Uploading ${file.metadata.id} to storage`);

    await clientFactory.createUploadClient(target)!
                       .uploadFile(file);

    const lambdaService = serviceFactory.createLambdaService();

    console.log(`Activating lambda functions`);

    await lambdaService.crawl(file);

    await lambdaService.extractData(file);
};

handler({
    source: {
        domain: Domain.Tab4U,
        sourceType: SourceType.SongPage,
        url: 'https://www.tab4u.com/tabs/songs/3_Christina_Aguilera_-_Your_Body.html'
    },
    target: {
        name: 'tab-lab-raw-songs',
        source: TargetSource.S3,
    }
});