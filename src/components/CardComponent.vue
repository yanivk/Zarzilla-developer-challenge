<template>
  <div class="grid column-6">
    <div v-for="scheduleList in scheduleLists" :key="scheduleList.id">
      <div class="card-container">
        <div class="card" @mouseenter="addClassOnCursor" @mouseleave="removeClassOnCursor">
          <div class="card-front" >
            <router-link :to="`/show/${scheduleList.show.id}`">
              <div><img :src="scheduleList.show.image.medium" alt=""></div>
              <star-component :rate="scheduleList.show.rating?.average"/>
              <div>{{ scheduleList.show.name }}</div>
            </router-link>
          </div>
          <div class="card-back" @click="removeClassOnCursor">
            <router-link :to="`/show/${scheduleList.show.id}`" class="flex-column flex-center-xy full-height">
              <star-component :rate="scheduleList.show.rating?.average"/>
              <div>{{ scheduleList.show.language }}</div>
              <div class="summary">
                <span v-html="scheduleList.show?.summary.substr(0,155)"></span>
                <p class="read-more-button">Read more</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import starComponent from '@/components/StarComponent.vue'

export default defineComponent({
  components: {
    starComponent
  },
  props: {
    scheduleLists: {}
  },
  methods: {
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
