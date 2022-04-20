import { Module } from 'vuex'
import { getters } from '@/store/cast/getters'
import { mutations } from '@/store/cast/mutations'
import { RootState } from '@/store'
import ICast from '@/interfaces/ICast'

const search: Module<ICast, RootState> = {
  state: <ICast>{},
  getters,
  mutations
}

export default search
