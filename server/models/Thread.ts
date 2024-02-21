import { Schema, model, Types } from "mongoose";

export interface ThreadDocument extends Document {
    title: string;
    content: string;
    created: Date;
    updated: Date;
}

const ThreadSchema = new Schema({
    title: String, // 討論串標題
    content: String, // 內文
    u_id: Types.ObjectId, // 作者 id
    created: Date,
    updated: Date,
});

export const Thread = model<ThreadDocument>("Thread", ThreadSchema);
