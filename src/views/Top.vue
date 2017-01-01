<template>
  <div>
    <div class="items columns is-mobile is-multiline">
      <div class="column is-half item" v-for="item in items">
        {{ item.image }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const items = []
    for (let i = 0; i < 100; i++) {
      items.push({ image: 'sample.ljpg' })
    }
    return {
      items
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.items {
  width: 100vw;
  margin: 0 auto;
  -webkit-justify-content: space-between; /* Safari */
  justify-content:         space-between;
  padding: 0 4vw;
}
.columns.is-mobile > .column.is-half {
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 4vw;
  width: 44vw;
  height: 44vw;
}
.item {
  display: inline-block;
  background-color: #aac;
}
</style>
