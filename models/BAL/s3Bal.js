const { AWSCredentials } = require('../../config');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: AWSCredentials.accessKey,
    secretAccessKey: AWSCredentials.secret,
    endpoint: AWSCredentials.endpoint,
    s3ForcePathStyle: true, /** for S3 compatible storage */
    signatureVersion: 'v4', /**Authentication method */
    Bucket: AWSCredentials.bucketName
});

exports.getFile = (myParams) => {
    /** params consist of bucket name and object key (myParams) */
    let params = { Bucket: AWSCredentials.bucketName, Key: `${myParams}` };
    return new Promise((resolve, reject) => {
        try {
            s3.getObject(params, function (err, data) {
                if (err) {
                    console.log(err, "Function Name: getFile()");
                    reject("Some Error Occured!")
                } else {
                    if (data != null) {
                        resolve(data.Body);
                    } else {
                        reject("No Image Found!")
                    }
                }
            });
        } catch (err1) {
            console.log(err1, "Function Name: getFile()");
            reject("Error!")
        }
    })
};