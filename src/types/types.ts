export interface User {
  username: string
  email: string
  fullName: string
  picture: string
}

export interface UserResponse {
  status: string
  data: {
    user: User
  }
}
export interface UserLoginResponse {
  status: string
  token: string
}
