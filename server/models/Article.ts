import { Schema, model, Types } from "mongoose";

export interface ArticleDocument extends Document {
    title: string;
    content: string;
    created: Date;
    updated: Date;
}

const ArticleSchema = new Schema({
    title: String, // 討論串標題
    content: String, // 內文
    u_id: Types.ObjectId, // 作者 id
    created: Date,
    updated: Date,
});

export const Article = model<ArticleDocument>("Article", ArticleSchema);
