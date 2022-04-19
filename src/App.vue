<template>
  <span class="cursor"></span>
  <router-view :key="$route.fullPath"/>
</template>

<script setup lang="ts">
document.onmousemove = (ev) => {
  const cursor: HTMLElement = document.getElementsByClassName('cursor')[0] as HTMLElement

  cursor.style.top = `${ev.clientY}px`
  cursor.style.left = `${ev.clientX}px`
}
</script>
