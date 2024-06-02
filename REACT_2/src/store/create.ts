import { create } from "zustand";

export type SessionStoreType = {
    title: string;
    content: string;
    setTitle: (token: string) => void;
    setContent: (name: string) => void;
}

const useCreateStore = create<SessionStoreType>(set => ({
    title: '',
    content: '',
    setTitle: (title: string) => set({ title }),
    setContent: (content: string) => set({ content })
}))

export default useCreateStore;