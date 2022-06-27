<template>
  <div class="app">
    <div class="container container-header"><Header /></div>
    <div class="app-wrapper">
      <main class="app-main">
        <Nuxt />
      </main>
    </div>
    <div class="container container-footer"><Footer /></div>

    <AllModals />
  </div>
</template>

<script>
import Header from 'organisms/Header/index.vue'
import Footer from 'molecules/Footer/index.vue'
import AllModals from 'templates/AllModals/index.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    AllModals,
  },
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
  max-width: 100vw;
  width: 100%;

  @include flex-row();

  &-header {
    background-color: $c-light-blue;
  }
  &-footer {
    border-top: 1px solid rgba(41, 41, 75, 0.1);
    flex: 0 0 auto;
  }
}

.app {
  height: 100vh;
  @include flex-column();

  &-wrapper {
    flex: 1 0 auto;
  }

  &-main {
    height: 100%;
    width: 100%;
  }
}
</style>
