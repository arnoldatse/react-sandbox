import HttpRequestRepository, { AnyObject } from "core/repositories/HttpRequestRepository";

export default class HttpRequestFetchFakeService implements HttpRequestRepository {
    fakeRequest<T>(){
        return new Promise<T>((resolve)=>{
            setTimeout(()=>{
                resolve({} as T)
            }, 2000)
        })
    }
    get<T>(url: string): Promise<T> {
        return this.fakeRequest<T>()
    }
    post<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return this.fakeRequest<T>()
    }
    put<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return this.fakeRequest<T>()
    }
    patch<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return this.fakeRequest<T>()
    }
    delete<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return this.fakeRequest<T>()
    }
}