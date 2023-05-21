import HttpRequestService from "app/services/httpService/HttpRequestService";
import UserAuthenticated from "core/auth/entities/UserAuthenticated";
import SignInRepository, { SignInResponse } from "core/auth/repositories/SignInRepository";
import HttpRequestRepository from "core/repositories/HttpRequestRepository";

export default class LoginService implements SignInRepository {
    private HttpRequest: HttpRequestRepository = HttpRequestService

    execute(login: string, password: string, stayLogged: boolean): Promise<SignInResponse> {
        return this.HttpRequest.post<{}>("login", {
            login,
            password
        }).then(async (response) => {
            //throw new Error()
            const userAuthenticated = new UserAuthenticated("SDdFCcSDQCeeeNECEE6fz46efze6f4e84f8zzeizflnSDF", login, true)
            return { echec: false, message: "created with success", user: { token: userAuthenticated.token, username: userAuthenticated.username } }
        }).catch(error=>{
            throw new Error('Something bad happened; please try again later.')
        })
    }
}