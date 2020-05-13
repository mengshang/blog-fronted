<template>
  <div id="app">
    <header-nav-bar />
    <div class="app-main">
      <router-view />
    </div>
    <my-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderNavBar from '@/components/HeaderNavBar/index.vue'
import MyFooter from '@/components/Footer/index.vue'

@Component({
  components: {
    HeaderNavBar,
    MyFooter
  }
})

export default class App extends Vue {
}

</script>

<style lang="scss">

</style>
