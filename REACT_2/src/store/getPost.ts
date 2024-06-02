import { create } from "zustand";

export type PostStoreType = {
    title: string;
    content: string;
    author: string;
    setTitle: (token: string) => void;
    setContent: (name: string) => void;
    setAuthor: (author: string) => void;
}

const usePostStore = create<PostStoreType>(set => ({
    title: '',
    author: '',
    content: '',
    setTitle: (title: string) => set({ title }),
    setContent: (content: string) => set({ content }),
    setAuthor: (author: string) => set({ author })
}))

export default usePostStore;