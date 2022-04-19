import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import cardComponent from '@/components/CardComponent.vue'
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Show from '@/views/Show.vue'

type ShowType = {
  show: {
    id: number
    name: string,
    summary: string,
    rating: {
      average: number
    },
    image: {
      medium: string
    }
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

const scheduleLists: [ShowType] = [{
  show: {
    id: 12,
    name: 'test',
    summary: 'This is a super description of my film, series...',
    rating: {
      average: 6.5
    },
    image: {
      medium: 'https://api.tvmaze.com/img/test.jpg'
    }
  }
}]
const mockRouter = {
  push: jest.fn()
}

describe('CardComponent.vue', () => {
  it('renders props.scheduleLists when passed', async () => {
    await router.push('/show/12')
    await router.isReady()

    const wrapper = shallowMount(cardComponent, {
      props: { scheduleLists },
      stubs: {
        RouterLink: RouterLinkStub
      },
      global: {
        plugins: [router],
        mocks: {
          $route: mockRouter
        }
      }
    })
    expect(wrapper.props().scheduleLists[0].show.id).toBe(12)
    expect(wrapper.props().scheduleLists[0].show.name).toBe('test')
    expect(wrapper.props().scheduleLists[0].show.summary).toBe('This is a super description of my film, series...')
    expect(wrapper.props().scheduleLists[0].show.rating.average).toBe(6.5)
    expect(wrapper.props().scheduleLists[0].show.image.medium).toBe('https://api.tvmaze.com/img/test.jpg')
  })
})
