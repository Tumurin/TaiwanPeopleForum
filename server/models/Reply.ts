import { Schema, model, Types } from "mongoose";

// Reply 資料定義討論串回覆內容

export interface ReplyDocument extends Document {
    t_id: string;
    content: string;
    u_id: string;
    created: Date;
    updated: Date;
}

const ReplySchema = new Schema({
    t_id: Types.ObjectId, // 回覆對象 回覆對象可以是回覆訊息也可以是討論串
    content: String, // 內容
    u_id: Types.ObjectId, // 作者 id
    created: Date,
    updated: Date, // 修改時間
});

export const Reply = model<ReplyDocument>("Reply", ReplySchema);
