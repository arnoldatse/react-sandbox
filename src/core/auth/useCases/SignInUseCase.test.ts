import SignInRepository, { SignInResponse } from "../repositories/SignInRepository"
import SignInUseCase from "./SignInUseCase"

const responseSignInObservable: SignInResponse = {
  echec: false,
  message: "success",
  user: {
    token: "12345",
    username: "jhon"
  }
}

const login = "login"
const password = "login"
const stayLogged = false

describe("Test SignInUseCase", () => {
    const myMockSIgnInInRepository = {
      execute: jest.fn().mockReturnValue(new Promise((resolve) => {
        resolve(responseSignInObservable)
      }))
    } as SignInRepository;

  test("Test should call repository execute methode with good credentials", () => {
    const signInUseCase = new SignInUseCase(myMockSIgnInInRepository)

    signInUseCase.execute(login, password, stayLogged)

    expect(myMockSIgnInInRepository.execute).toHaveBeenCalledWith(login, password, stayLogged)
  })
})
