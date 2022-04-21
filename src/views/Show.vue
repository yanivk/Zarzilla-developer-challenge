<template>
  <div class="header-content">
    <h1>TV Bland</h1>
    <div class="flex-column">
      <div class="flex header-content-show-information">
        <img :src="scheduleShow.image?.medium" alt="">
        <div class="header-content-show-information-text">
          <span class="flex star"><star-component
            :rate="scheduleShow.rating?.average"/>{{ (scheduleShow.rating?.average / 2).toFixed(1) }}/5</span>
          <h1>{{ scheduleShow.name }}</h1>
          <span v-html="scheduleShow.summary"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="container flex">
    <div class="left-side flex-grow-1">
      <h3>Show Info</h3>
      <div class="list">
        <div class="flex list-item">
          <p class="list-title">Streamed on</p>
          <p class="list-value">{{ scheduleShow.network?.name }}</p>
        </div>
        <div class="flex list-item">
          <p class="list-title">Schedule</p>
          <p class="list-value"><span v-for="(day, key) in scheduleShow.schedule?.days" :key="key">{{ day }} &nbsp;</span></p>
        </div>
        <div class="flex list-item">
          <p class="list-title">Status</p>
          <p class="list-value">{{ scheduleShow.status }}</p>
        </div>
        <div class="flex list-item">
          <p class="list-title">Genres</p>
          <p class="list-value"><span v-for="(genre, key) in scheduleShow.genres" :key="key">{{ genre }} &nbsp;</span></p>
        </div>
      </div>
    </div>
    <div class="right-side flex-grow-1">
      <h3>Starring</h3>
      <div class="list">
        <div class="flex list-item" v-for="(people, key) in peoples" :key="key">
          <img :src="people.person.image?.medium" alt=""/>
          <p class="list-title">{{ people.person.name }}</p>
          <p class="list-value">{{ people.character.name }}</p>
        </div>
      </div>
      <div class="flex space-between flex-center-xy pagination">
        <div
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
          @click="decrement"
          class="flex flex-center-xy right decrement"
        >
          <img src="../assets/icons/previous.svg"> <p> Previous</p>
        </div>
        <div>{{ count }} / {{ Math.round(totalPage) }}</div>
        <div
          @mouseenter="addClassOnCursor"
          @mouseleave="removeClassOnCursor"
          @click="increment"
          class="flex flex-center-xy increment"
        >
          <p>Next</p><img src="../assets/icons/next.svg">
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { httpGet } from '@/tools/http-common'
import { RouteLocationNormalized, useRoute } from 'vue-router'
import StarComponent from '@/components/StarComponent.vue'
import { store } from '@/store'

export default defineComponent({
  name: 'Show',
  components: { StarComponent },
  data () {
    return {
      scheduleShow: {},
      count: 0
    }
  },
  computed: {
    route (): RouteLocationNormalized {
      return useRoute()
    },
    id (): number {
      return typeof this.route.params.id === 'string' ? parseInt(this.route.params.id) : 0
    },
    peoples (): string {
      return store.getters.getCast(this.count)
    },
    totalPage (): number {
      return store.getters.getCastPaginate
    }
  },
  async mounted () {
    await httpGet(`shows/${this.id}`)
      .then((r) => {
        this.scheduleShow = r.data
      })
    await httpGet(`shows/${this.id}/cast`)
      .then((r) => {
        store.commit('SET_CAST_INFORMATION', r.data)
      })
  },
  methods: {
    increment () {
      if (this.count < this.totalPage) {
        this.count++
      }
    },
    decrement () {
      if (this.count > 0) {
        this.count--
      }
    },
    addClassOnCursor () {
      const cursor: HTMLElement = document.getElementsByClassName('cursor')[0] as HTMLElement
      cursor.classList.add('cursor--big')
    },
    removeClassOnCursor () {
      const cursor: HTMLElement = document.getElementsByClassName('cursor')[0] as HTMLElement
      cursor.classList.remove('cursor--big')
    }
  }
})
</script>
