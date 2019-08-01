import AWS from 'aws-sdk';
import { InvocationRequest } from 'aws-sdk/clients/lambda';
import { Payload, LambdaParams } from '../models';

export class LambdaClient {
    private lambda: AWS.Lambda;

    constructor() {
        this.lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });
    }

    trigger = async (lambdaParams: LambdaParams) => {
        const stringPayload = JSON.stringify(lambdaParams.payload);

        const invokeParams: InvocationRequest = {
            FunctionName : lambdaParams.functionName,
            InvocationType : 'RequestResponse',
            LogType : 'None',
            Payload: stringPayload
         };
          

        const response = await this.lambda.invoke(invokeParams).promise();

        return response;
    }
}