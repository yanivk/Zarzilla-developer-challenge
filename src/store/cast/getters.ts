import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import ICast from '@/interfaces/ICast'

export const getters: GetterTree<ICast[], RootState> = {
  getFullCast (state): ICast[] {
    return state
  },
  getCast (state, getters): ICast[][] {
    const paginate = []
    for (let i = 0; i < getters.getCastPaginate; i++) {
      for (let j = 0; j < 5; j++) {
        paginate[i] = [Object.values(state)[j]]
      }
    }
    return paginate
  },
  getCastPaginate (state): number {
    console.log(Object.keys(state))
    return Object.keys(state).length / 5
  }
}
