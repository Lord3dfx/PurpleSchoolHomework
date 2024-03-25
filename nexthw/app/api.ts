export const API = {
    posts:{
        get: process.env.NEXT_PUBLIC_DOMAIN + 'posts/',
    },
    comments:{
        get: process.env.NEXT_PUBLIC_DOMAIN + 'comments?postId=',
    }
}