export default interface SignInRepository {
  execute(login: string, password: string, stayLogged: boolean): Promise<SignInResponse>
}

export interface SignInResponse {
  echec: boolean;
  message: string;
  user: SignInResponeUser
}
export interface SignInResponeUser {
  token: string;
  username: string;
}
