import SignInRepository, { SignInResponse } from "../repositories/SignInRepository"
import SignInViewModel from "./SignInViewModel";

const login = "login"
const password = "password"
const stayLogged = false
const errorMessage = "Error Occured"
const responseSignInObservable: SignInResponse = {
  echec: false,
  message: "success",
  user: {
    token: "12345",
    username: 'jhon'
  }
}

describe("Test SignInViewModel", () => {
  test("Test should success submit", () => {
    const signInRepository = {
      execute: jest.fn((login: string, password: string, stayLogged: boolean) => new Promise((resolve)=>{
        resolve(responseSignInObservable)
      }))
    } as SignInRepository

    const viewModel = new SignInViewModel(signInRepository)

    const mockResolveMethod = jest.fn()
    const mockRejectErrorMethod = jest.fn()
    const spyedRemoveError = jest.spyOn(viewModel, "removeError")
    const spyedStartLoading = jest.spyOn(viewModel, "startLoading")
    const spyedStopLoading = jest.spyOn(viewModel, "stopLoading")
    const spyedSetError = jest.spyOn(viewModel, "setError")

    viewModel.submit(login, password, stayLogged).then((value)=>{
      mockResolveMethod(value)
    }).catch((error)=>{
      mockRejectErrorMethod(error)
    })

    expect(viewModel.error).toBeFalsy()
    expect(viewModel.errorMessage).toBe("")
    expect(viewModel.loading).toBeFalsy()

    expect(signInRepository.execute).toHaveBeenCalledWith(login, password, stayLogged)
    expect(spyedRemoveError).toHaveBeenCalled()
    expect(spyedStartLoading).toHaveBeenCalled()
    expect(spyedStopLoading).toHaveBeenCalled()
    expect(spyedSetError).toHaveBeenCalledTimes(0)
    expect(mockResolveMethod).toHaveBeenCalledWith(responseSignInObservable)
    expect(mockRejectErrorMethod).toHaveBeenCalledTimes(0)
  })

  test("Test should fail submit", () => {
    const signInRepository = {
      execute: jest.fn((login: string, password: string, stayLogged: boolean) => new Promise((resolve, reject) => {
        reject(new Error(errorMessage))
      }))
    } as SignInRepository

    const viewModel = new SignInViewModel(signInRepository)

    const mockResolveMethod = jest.fn()
    const mockRejectErrorMethod = jest.fn()
    const spyedRemoveError = jest.spyOn(viewModel, "removeError")
    const spyedStartLoading = jest.spyOn(viewModel, "startLoading")
    const spyedStopLoading = jest.spyOn(viewModel, "stopLoading")
    const spyedSetError = jest.spyOn(viewModel, "setError")

    viewModel.submit("login", "password", false).then((value)=>{
      mockResolveMethod(value)
    }).catch((error)=>{
      mockRejectErrorMethod(error)
    })

    expect(viewModel.error).toBeTruthy()
    expect(viewModel.errorMessage).toBe(errorMessage)
    expect(viewModel.loading).toBeFalsy()

    expect(signInRepository.execute).toHaveBeenCalledWith(login, password, stayLogged)
    expect(spyedRemoveError).toHaveBeenCalled()
    expect(spyedStartLoading).toHaveBeenCalled()
    expect(spyedStopLoading).toHaveBeenCalled()
    expect(spyedSetError).toHaveBeenCalled()
    expect(mockResolveMethod).toHaveBeenCalledTimes(0)
    expect(mockRejectErrorMethod).toHaveBeenCalledWith(new Error(errorMessage))
  })
})
