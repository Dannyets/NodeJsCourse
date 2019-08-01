import { Target, TargetSource, UploadClient, NotificationClient } from "../models";
import { S3Client, SNSClient, LambdaClient } from "../clients";

const createUploadClient = (target: Target) : UploadClient | undefined => {
    return new S3Client();
}

const createNotificationClient = () : NotificationClient => {
    return new SNSClient();
}

const createLambdaClient = () => {
    return new LambdaClient();
}

export default {
    createUploadClient,
    createNotificationClient,
    createLambdaClient
};