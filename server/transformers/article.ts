import { userTransformer } from "./user"
// import human from "human-time"

interface articleInfo {
    id: string;
    content: string;
}

export const articleTransformer = (article: any) => {
    return {
        id: article.id,
        text: article.text,
        author: !!article.u_id ? userTransformer(article.u_id) : null,
        repliesCount: !!article.replies ? article.replies.length : 0,
        // postedAtHuman: human(article.createdAt)
    }
}