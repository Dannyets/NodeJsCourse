import { LambdaService } from "../services";
import { clientFactory } from '.';

const lambdaClient = clientFactory.createLambdaClient();

const createLambdaService = () => {
    return new LambdaService(lambdaClient);
}

export default {
    createLambdaService
}