import SignInRepository, { SignInResponse } from "../repositories/SignInRepository";

export default class SignInUseCase {
  constructor(private signInRepository: SignInRepository) { }

  execute(login: string, password: string, stayLogged: boolean): Promise<SignInResponse> {
    return this.signInRepository.execute(login, password, stayLogged)
  }
}
