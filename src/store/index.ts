import { createStore } from 'vuex'
import ICast from '@/interfaces/ICast'
import cast from '@/store/cast'

export type RootState = {
  cast: ICast
};
export const store = createStore({
  modules: {
    cast
  }
})
