<template>
  <div class="header-content">
    <h1>TV Bland</h1>
    <div class="flex-column">
      <div class="flex">
        <img :src="scheduleShow.image?.medium" alt="">
        <div>
          <span>***** {{ scheduleShow.rating?.average / 2 }}/5</span>
          <h1>{{ scheduleShow.name }}</h1>
          <span v-html="scheduleShow.summary"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-center-xy full-size">
    <div class="flex-grow-1">
      <h3>Show Info</h3>
      <div class="list">
        <div class="flex list-item">
          <p class="list-title">Streamed on</p>
          <p class="list-value">{{ scheduleShow.network?.name }}</p>
        </div>
        <div class="flex list-item">
          <p class="list-title">Schedule</p>
          <p class="list-value">{{ scheduleShow.schedule?.days }}</p>
        </div>
        <div class="flex list-item">
          <p class="list-title">Status</p>
          <p class="list-value">{{ scheduleShow.status }}</p>
        </div>
        <div class="flex list-item">
          <p class="list-title">Genres</p>
          <p class="list-value">{{ scheduleShow.genres }}</p>
        </div>
      </div>
    </div>
    <div class="flex-grow-1">
      <h3>Starring</h3>
      <div class="list">
        <div class="flex list-item" v-for="people in peoples" :key="people.person.id">
          <img :src="people.person.image?.medium" alt=""/>
          <p class="list-title">{{ people.person.name }}</p>
          <p class="list-value">{{ people.character.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { httpGet } from '@/tools/http-common'
import { RouteLocationNormalized, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Show',
  data () {
    return {
      scheduleShow: {},
      peoples: {}
    }
  },
  computed: {
    route (): RouteLocationNormalized {
      return useRoute()
    },
    id (): number {
      return typeof this.route.params.id === 'string' ? parseInt(this.route.params.id) : 0
    }
  },
  mounted () {
    httpGet(`shows/${this.id}`)
      .then((r) => {
        this.scheduleShow = r.data
      })
    httpGet(`shows/${this.id}/cast`)
      .then((r) => {
        this.peoples = r.data
      })
  }
})
</script>
