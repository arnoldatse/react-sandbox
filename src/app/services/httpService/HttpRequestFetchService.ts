import HttpRequestRepository, { AnyObject } from "core/repositories/HttpRequestRepository";

export default class HttpRequestFetchService implements HttpRequestRepository {
    get<T>(url: string): Promise<T> {
        return fetch(url)
        .then(async response=>{
            const responseDatas = await response.json() as T
            return responseDatas
        })
        .catch(async error=>{
            throw new Error(error)
        })
    }
    post<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            ...(body && {body})
        })
        .then(async response=>{
            const responseDatas = await response.json() as T
            return responseDatas
        })
        .catch(async error=>{
            throw new Error(error)
        })
    }
    put<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            ...(body && {body})
        })
        .then(async response=>{
            const responseDatas = await response.json() as T
            return responseDatas
        })
        .catch(async error=>{
            throw new Error(error)
        })
    }
    patch<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            ...(body && {body})
        })
        .then(async response=>{
            const responseDatas = await response.json() as T
            return responseDatas
        })
        .catch(async error=>{
            throw new Error(error)
        })
    }
    delete<T>(url: string, headers?: AnyObject, body?: any): Promise<T> {
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            ...(body && {body})
        })
        .then(async response=>{
            const responseDatas = await response.json() as T
            return responseDatas
        })
        .catch(async error=>{
            throw new Error(error)
        })
    }
}