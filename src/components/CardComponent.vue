<template>
  <div class="grid column-6">
    <div v-for="scheduleList in scheduleLists" :key="scheduleList.id">
      <div class="card-container">
        <div class="card">
          <div class="card-front">
            <router-link :to="`/show/${scheduleList.show.id}`">
              <div><img :src="scheduleList.show.image.medium" alt=""></div>
              <div>{{ scheduleList.show.name }}</div>
              <div>{{ scheduleList.show.rating.average }}</div>
            </router-link>
          </div>
          <div class="card-back">
            <router-link :to="`/show/${scheduleList.show.id}`">
              <div>{{ scheduleList.show.language }}</div>
              <span v-html="scheduleList.show?.summary.substr(0,155)"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    scheduleLists: {}
  }
})
</script>
