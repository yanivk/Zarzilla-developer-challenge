import axios from 'axios'

type ResponsePromise = {
  data: [],
  status: number,
  statusText: string,
  headers: string,
  config: string
}
export async function httpGet (url: string): Promise<ResponsePromise> {
  try {
    return await axios.get(`${process.env.VUE_APP_API_URL}/${url}`)
  } catch (e) {
    return e
  }
}
