<template>
  <div id="app">

    <site-header></site-header>

    <transition enter-active-class="animated zoomIn">
      <router-view></router-view>
    </transition>

    <site-footer></site-footer>

  </div>
</template>

<script>
import SiteHeader from './Pages/layouts/site/header.vue';
import SiteFooter from './Pages/layouts/site/footer';
export default {
  components: {
    siteHeader: SiteHeader,
    siteFooter: SiteFooter,
  }
}
</script>
