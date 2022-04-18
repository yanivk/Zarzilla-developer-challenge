<template>
  <div class="container">
    <div>TV Bland</div>
    <div>
      TV Show and web series database.
      Create personalised schedules. Episode guide, cast, crew and character information.
    </div>
    <div>List Added Shows</div>
    <div class="grid column-6">
      <div v-for="scheduleList in scheduleLists" :key="scheduleList.id" class="card">
        <router-link :to="`/show/${scheduleList.show.id}`">
            <div>{{ scheduleList.show.name }}</div>
            <div>{{ scheduleList.show.rating.average }}</div>
            <div><img :src="scheduleList.show.image.medium"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { httpGet } from '@/tools/http-common'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      scheduleLists: {}
    }
  },
  mounted () {
    httpGet('schedule')
      .then((r) => {
        this.scheduleLists = r
      })
  }
})
</script>
