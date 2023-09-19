export interface User {
  username: string
  email: string
  fullName: string
  picture: string
}
export interface CommentType {
  comment_id: string
  created_at: string
  full_name: string
  picture: string
  text: string
  username: string
}

export interface Post {
  post_id: string
  user_id: string
  text: string
  image: string
  audio: string
  comments: number
  likes: number
  created_at: string
  user: {
    username: string
    full_name: string
    picture: string
  }
  liked: boolean
}

export interface Posts {
  posts: Post[]
}
