import { MutationTree } from 'vuex'
import ICast from '@/interfaces/ICast'

export const mutations: MutationTree<ICast> = {
  SET_CAST_INFORMATION (state, payload: ICast) {
    for (const key in Object.keys(payload)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[Object.keys(payload)[key]] = payload[Object.keys(payload)[key]]
    }
  }
}
