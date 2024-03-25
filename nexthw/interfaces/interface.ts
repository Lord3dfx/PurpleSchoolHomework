export interface IPosts {
    userId: number,
    id: string,
    title: string,
    body: string
}

export interface IComments {
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string
}