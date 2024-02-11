export const userTransformer = (user) => {
    return {
        id: user.id,
        account: user.account,
        email: user.email,
        name: user.name
    }
}