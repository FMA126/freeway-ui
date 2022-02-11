import { AxiosResponse } from 'axios'
import http from './http-common'

type ResourceMethodParam = {
  path: string
  id?: number
  data?: any
}

class FreeWayBackendAPI {
  getAll(param: ResourceMethodParam): Promise<AxiosResponse<any, any>> {
    return http.get(param.path)
  }

  get(param: ResourceMethodParam): Promise<AxiosResponse> {
    return http.get(`${param.path}/${param.id}`)
  }

  post(param: ResourceMethodParam): Promise<AxiosResponse> {
    return http.post(`${param.path}`, param.data)
  }

  delete(param: ResourceMethodParam): Promise<AxiosResponse> {
    return http.delete(`${param.path}`)
  }
}

export default new FreeWayBackendAPI()
