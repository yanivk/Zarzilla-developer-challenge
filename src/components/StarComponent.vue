<template>
  <div class="flex flex-center-xy">
    <div v-for="(score, key) in average" :key="key">
      <img v-if="score.star === 'full'" src="../assets/icons/star.png" alt="star" class="star">
      <img v-else-if="score.star === 'half'" src="../assets/icons/half-star.png" alt="star" class="star">
      <img v-else src="../assets/icons/empty-star.png" alt="star" class="star">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type StarType = {
  star: string
}
export default defineComponent({
  computed: {
    average (): StarType[] {
      return this.findResultAverageStar()
    }
  },
  props: {
    rate: Number
  },
  methods: {
    findResultAverageStar () {
      const resultAverage: StarType[] = []
      if (typeof this.rate === 'number') {
        for (let i = 1; i <= (this.rate / 2); i++) {
          resultAverage.push({ star: 'full' })
        }
        const residual = ((this.rate / 2) % 1).toFixed(1)
        if (parseFloat(residual) !== 0) {
          resultAverage.push({ star: 'half' })
        }
        const resultEmptyAverage = Math.floor(5 - parseFloat((this.rate / 2).toFixed(1)))
        for (let i = 0; i < resultEmptyAverage; i++) {
          resultAverage.push({ star: 'empty' })
        }
      } else {
        for (let i = 0; i < 5; i++) {
          resultAverage.push({ star: 'empty' })
        }
      }
      return resultAverage
    }
  }
})
</script>
