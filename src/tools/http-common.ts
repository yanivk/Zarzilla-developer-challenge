import axios from 'axios'

export async function httpGet (url: string): Promise<string> {
  const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/${url}`)
  return data
}
