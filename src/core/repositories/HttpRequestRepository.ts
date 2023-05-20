export default interface HttpRequestRepository {
    get<T>(url: string): Promise<T>
    post<T>(url: string, body?: AnyObject, headers?: AnyObject): Promise<T>
    put<T>(url: string, body?: AnyObject, headers?: AnyObject): Promise<T>
    patch<T>(url: string, body?: AnyObject, headers?: AnyObject): Promise<T>
    delete<T>(url: string, body?: AnyObject, headers?: AnyObject): Promise<T>
}

export type AnyObject = {[key: string]: any}