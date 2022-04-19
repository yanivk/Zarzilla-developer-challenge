import axios from 'axios'
import { httpGet } from '@/tools/http-common'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Tools to get axios url', () => {
  it('should get data with axios call', function () {
    const data = httpGet('schedule')
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data))
  })
})
