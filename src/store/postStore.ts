import { Post } from '@/types/types'
import { create } from 'zustand'

type PostStore = {
  post: Post | null
  requestLoading: boolean
  setPost: (user: Post | null) => void
  setRequestLoading: (isLoading: boolean) => void
  reset: () => void
}

const usePostStore = create<PostStore>((set) => ({
  post: null,
  requestLoading: false,
  setPost: (post) => set((state) => ({ ...state, post: post })),
  setRequestLoading: (isLoading) =>
    set((state) => ({ ...state, requestLoading: isLoading })),
  reset: () => set({ post: null, requestLoading: false }),
}))

export default usePostStore
