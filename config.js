module.exports = {
    SERVER_HOST: process.env.SERVER_HOST || 'localhost',
    SERVER_PORT: process.env.SERVER_PORT || 8080,
    AWSCredentials: {
        accessKey: process.env.ACCESS_KEY || "XXXXXXXXXXXXXXXXXXXX",
        secret: process.env.SECRET_KEY || "XXXXXXXXXXXXXXXXXXXX",
        bucketName: process.env.BUCKET_NAME || "XXXXXXXXXXXXXXXXXXXX",
        endpoint: process.env.ENDPOINT || 'https://XXXXXXXXXXXXXXXXXX'
    }

}