import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import ICast from '@/interfaces/ICast'

export const getters: GetterTree<ICast[], RootState> = {
  getFullCast (state): ICast[] {
    return state
  },
  getCast (state, getters): (page: number) => ICast[] {
    return page => {
      const paginate: any[] = []
      let total = 0
      for (let i = 0; i < getters.getCastPaginate; i++) {
        paginate[i] = []
        for (let j = 0; j < 4; j++) {
          if (total < Object.keys(state).length) {
            paginate[i].push(Object.values(state)[total])
            total++
          }
        }
      }
      return paginate[page]
    }
  },
  getCastPaginate (state): number {
    return Object.keys(state).length / 4
  }
}
