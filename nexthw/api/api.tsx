import { API } from '@/app/api';

export const api ={

  fetchAPI: async (callback:Function)=>{ await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(callback())
  },

  fetchPosts: async() => {
    const res = await fetch(API.posts.get);
    if(!res.ok){
      return null
    }
    return res.json()
  },

  getPost: async (id: string) => {
    const res = await fetch(API.posts.get + id);
    if(!res.ok){
      return null
    }
    return res.json()
  }
}