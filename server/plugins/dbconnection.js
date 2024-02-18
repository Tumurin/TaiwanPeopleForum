import mongoose from "mongoose";

export default async () => {
    const config = useRuntimeConfig()
    const connUri = config.mongoDBURI;
    const certificate = config.mongoDBCertificate;
    // console.log(__dirname);
    try {
        console.log(`嘗試連線資料庫:${connUri}...`);

        mongoose.promise = global.Promise;
        await mongoose.connect(connUri, {
            tls: true,
            tlsCertificateKeyFile: `./${certificate}`,
            authMechanism: 'MONGODB-X509',
            authSource: '$external',
        });

        console.log('連線成功');
    } catch (error) {
        console.error('連線失敗，理由：', error);
    }
}
