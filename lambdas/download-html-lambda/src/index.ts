import axios from 'axios';

import { DownloadSourceEvent, File, Domain, SourceType, TargetSource } from "./models";
import { clientFactory, serviceFactory } from './factories';
import { configurationUtils } from './utils';

configurationUtils.configureAws();

export const handler = async (downloadHtmlEvent: DownloadSourceEvent): Promise<any> => {
    const { source, target } = downloadHtmlEvent;

    console.log(`Getting source from url: ${source.url}`);

    const response = await axios.get<string>(source.url);
    const { data: html } = response;
    
    console.log(`Source content: ${html.slice(0, 100)}`);

    const file = new File(source, target, html);

    console.log(`Uploading ${file.metadata.id} to storage`);

    await clientFactory.createUploadClient(target)!
                       .uploadFile(file);

    const lambdaService = serviceFactory.createLambdaService();

    console.log(`Activating lambda functions`);

    await lambdaService.crawl(file);

    await lambdaService.extractData(file);

    return html;
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