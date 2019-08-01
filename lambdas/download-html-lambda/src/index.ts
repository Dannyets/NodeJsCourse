import axios from 'axios';

import { DownloadSourceEvent, File } from "./models";
import { clientFactory, serviceFactory } from './factories';
import { configurationUtils } from './utils';

configurationUtils.configureAws();

export const handler = async (downloadHtmlEvent: DownloadSourceEvent): Promise<any> => {
    const { source, target } = downloadHtmlEvent;

    const response = await axios.get<string>(source.url);
    const { data: html } = response;
    
    const file = new File(source, target, html);

    await clientFactory.createUploadClient(target)!
                       .uploadFile(file);

    const lambdaService = serviceFactory.createLambdaService();

    await lambdaService.crawl(file);

    await lambdaService.extractData(file);

    return html;
}