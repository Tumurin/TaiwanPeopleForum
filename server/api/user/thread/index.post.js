import formidable from "formidable"
import { threadTransformer } from "~/server/transformers/thread"
import { createThread } from "~/server/db/thread"

export default defineEventHandler(async (event) => {
    console.log("上傳一則討論串")

    // 處理影音上傳
    const form = formidable({})

    const response = await new Promise((resolve, reject) => {
        form.parse(event.node.req, (err, fields, files) => {
            if (err) {
                reject(err)
            }
            resolve({ fields, files })
        })
    })

    const { fields, files } = response

    const userId = event.context?.auth?.user?.id

    // 討論串內文
    const threadData = {
        content: fields.text,
        u_id: userId
    }

    const replyTo = fields.replyTo

    if (replyTo && replyTo !== 'null' && replyTo !== 'undefined') {
        threadData.replyToId = replyTo
    }

    // 資料庫操作
    const thread = await createThread(threadData)

    // 將圖片上傳到 cloudinary
    // const filePromises = Object.keys(files).map(async key => {
    //     const file = files[key]

    //     const cloudinaryResource = await uploadToCloudinary(file.filepath)

    //     return createMediaFile({
    //         url: cloudinaryResource.secure_url,
    //         providerPublicId: cloudinaryResource.public_id,
    //         userId: userId,
    //         threadId: thread.id
    //     })
    // })
    // await Promise.all(filePromises)

    return {
        thread: threadTransformer(thread)
    }

})