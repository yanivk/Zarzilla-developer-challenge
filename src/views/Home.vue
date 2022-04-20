<template>
  <div class="header-content">
    <div class="header-text">
      <h1>TV Bland</h1>
      <div class="header-sub-text">
        <p>TV Show and web series database.</p>
        <p>Create personalised schedules. Episode guide, cast, crew and character information.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="bloc-list-schedule">
      <div><h2>List Added Shows</h2></div>
      <card-component :schedule-lists="scheduleLists" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { httpGet } from '@/tools/http-common'
import cardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'Home',
  components: {
    cardComponent
  },

  data () {
    return {
      scheduleLists: {}
    }
  },
  mounted () {
    httpGet('schedule')
      .then((r) => {
        this.scheduleLists = r.data
      })
  }
})
</script>
