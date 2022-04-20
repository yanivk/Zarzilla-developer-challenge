import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import ICast from '@/interfaces/ICast'

export const getters: GetterTree<ICast, RootState> = {
  getCast (state): ICast {
    return state
  }
}
