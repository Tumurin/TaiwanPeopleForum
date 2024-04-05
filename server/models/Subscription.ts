import { Schema, model } from "mongoose";

export interface SubscriptionDocument extends Document {
    name: string;
    mail: string;
}

const SubscriptionSchema = new Schema({
    name: String, // 訂閱者暱稱
    mail: String, // 訂閱者信箱
});

export const Subscription = model<SubscriptionDocument>("Subscription", SubscriptionSchema);
