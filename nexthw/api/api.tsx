import { API } from '@/app/api';
import { IPosts } from '@/interfaces/interface';

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

  fetchPosts: async():Promise<IPosts[]> => {
    const res = await fetch(API.posts.get);
    return res.json()
  },

  getPost: async (id: string):Promise<IPosts | null> => {
    const res = await fetch(API.posts.get + id);
    if(!res.ok){
      return null
    }
    return res.json()
  }
}