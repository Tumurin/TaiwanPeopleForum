import { userTransformer } from "./user"
// import human from "human-time"

interface threadInfo {
    id: string;
    content: string;
}

export const threadTransformer = (thread: any) => {
    return {
        id: thread.id,
        text: thread.text,
        author: !!thread.u_id ? userTransformer(thread.u_id) : null,
        repliesCount: !!thread.replies ? thread.replies.length : 0,
        // postedAtHuman: human(thread.createdAt)
    }
}