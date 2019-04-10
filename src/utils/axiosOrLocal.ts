import axios from 'axios'

export default class AxiosOrLocal {
  key: any
  type: string
  url: any
  method: any
  data: any
  constructor({ data, url, method, key, type = 'localStorage' }: any) {
    this.key = key
    this.type = type
    this.url = url
    this.method = method
    this.data = data
    return this.get()
  }
  set({ data }: any) {
    if (this.type === 'localStorage') {
      return localStorage.setItem(this.key, data)
    } else {
      return sessionStorage.setItem(this.key, data)
    }
  }
  isExist() {
    if (this.type === 'localStorage') {
      return localStorage.getItem(this.key)
    } else {
      return sessionStorage.getItem(this.key)
    }
  }
  async get() {
    const res = this.isExist()
    if (res) {
      return new Promise((resolve, rej) => {
        setTimeout(() => {
          resolve(JSON.parse(res))
        }, 0)
      })
    } else {
      // 为了避免副作用,应该让他们都是异步的
      return await axios({
        data: this.data,
        method: this.method,
        url: this.url,
      }).then(
        (response: any) => {
          this.set({
            data: JSON.stringify(response.data),
          })
          return response.data
        },
        (err: object) => err,
      )
    }
  }
}
