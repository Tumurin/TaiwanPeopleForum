import { Subscription, SubscriptionDocument } from '~/server/models/Subscription';

export interface SubscriptionData {
    name: string;
    mail: string;
}

export const checkSubscriptionExisted = async (data: SubscriptionData): Promise<any> => {
    const result = await Subscription.find({
        name: data.name,
        mail: data.mail
    });
    console.log(result.length)
    if (result.length > 0) return true;
    else return false;
}

export const createSubscription = async (data: SubscriptionData): Promise<SubscriptionDocument> => {
    const subscription = await Subscription.create({
        ...data,
    });
    return subscription;
}