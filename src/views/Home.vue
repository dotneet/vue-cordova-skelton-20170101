<template>
  <div>
    <div class="header columns">
      <div class="column is-12">
        <h1 class="title">ホーム</h1>
      </div>
    </div>

    <router-view></router-view>

    <div class="columns">
      <div class="column is-12">
        Footer
      </div>
    </div>
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

<style scoped>
.header {
  padding: 1rem;
  background-color: #ccf;
}
.header .column {
  padding: 0;
  line-height: 28px;
  vertical-align: middle;
}
.title {
  color: white;
}
</style>
