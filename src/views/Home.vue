<template>
  <div>
    <h1 ref="title" class="title">{{ title }}</h1>
    <button class="button is-primary" @click="onClick">button</button>
  </div>
</template>

<script>
import anime from 'animejs/anime.js'

export default {
  data () {
    return {
      title: 'Hello'
    }
  },
  methods: {
    onClick () {
      anime({
        targets: this.$refs.title,
        translateX: '8rem',
        easing: 'linear',
        duration: 300
      })
    }
  }
}
</script>

