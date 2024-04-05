import {
  checkSubscriptionExisted,
  createSubscription,
} from "~/server/db/subscriptions";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const name = body.name;
  const mail = body.mail;
  console.log("訂閱人暱稱與信箱", name, mail);
  const check = await checkSubscriptionExisted({ name, mail });

  if (check) return { stateCode: 0, msg: "你已經訂閱了" };
  createSubscription({ name, mail });
  return { stateCode: 1, msg: "訂閱成功" };
});
