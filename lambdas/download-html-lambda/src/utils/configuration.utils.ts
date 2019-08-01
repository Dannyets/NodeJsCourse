import AWS from "aws-sdk";

const configureAws = () => {
    console.log(`Configuring AWS with args: ${process.argv.join(', ')}`);
    
    AWS.config.update({
        accessKeyId: process.argv[0],
        secretAccessKey: process.argv[1],
        region: process.argv[2],
    });
}

export default  {
    configureAws
};
