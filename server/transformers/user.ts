interface UserData {
    id: string;
    email: string;
    account: string;
    name: string;
}

export const userTransformer = (user: UserData) => {
    if (!user) return null
    return {
        id: user.id,
        account: user.account,
        email: user.email,
        name: user.name
    }
}