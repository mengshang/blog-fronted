<template>
  <div class="nav-bar">
    <div class="nav-main">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logo.svg" alt="">
        </router-link>
      </div>
      <div class="main-nav">
        <ul>
          <li v-for="item in navBar">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavListItem } from '@/types'
import { routes } from '@/router/index'

@Component
export default class NavBar extends Vue {
  private navBar: Array<NavListItem> = []

  mounted(): void {
    for (let item of routes) {
      if (!item.meta.hidden) {
        this.navBar.push({ path: item.path, name: item.meta.title })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.router-link-exact-active {color: skyblue}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 1px 2px 3px #e6e6e6;
  box-sizing: border-box;
  z-index: 99;
  background: #fff;

  .nav-main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 8px 0;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 48px;

      img {
        height: 100%;
      }
    }

    .main-nav {
      ul {
        display: flex;

        li {
          cursor: pointer;
          padding: 5px;
          margin: 0 5px;
          list-style: none;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .nav-bar {
    padding: 0;

    .logo {
      height: 75px;
    }

    .main-nav {
      display: none;
    }
  }
}
</style>
