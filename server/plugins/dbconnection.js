import mongoose from "mongoose";

export default async () => {
    const config = useRuntimeConfig()
    const connUri = config.mongoDBURI;
    try {
        console.log(`嘗試連線資料庫:${connUri}...`);
        // await mongoose.connect(config.dburl, DB_OPTIONS)
        mongoose.promise = global.Promise;
        await mongoose.connect(connUri);
        console.log('連線成功');
    } catch (error) {
        console.error('連線失敗，理由：', error);
    }
}
