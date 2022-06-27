<template>
  <nuxt-link to="/" class="logo" @click.native="redirect">
    <img src="~/assets/icons/Logo.svg" alt="логотип" class="logo__img-big" />
    <img
      src="~/assets/icons/Logo small.svg"
      alt="логотип"
      class="logo__img-small"
    />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
/* Логотип компании */

export default Vue.extend({
  name: 'OlympLogo',
  methods: {
    redirect() {
      localStorage.setItem('last', '')
      this.$store.commit('tabs/changeTabsActive', '')
    },
  },
})
</script>

<style lang="scss" scoped>
.logo {
  &__img-big {
    @include wide-laptop {
      width: 160px;
    }
    @include laptop {
      width: 150px;
    }
    @include small-laptop {
      width: 130px;
    }
    @include medium-tablet {
      width: 180px;
    }
    @include tablet {
      width: 120px;
    }
    @include phone {
      display: none;
    }
  }
  &__img-small {
    display: none;
    @include phone {
      display: inline-block;
      width: 40px;
    }
    @include small-phone {
      height: 28px;
      width: auto;
    }
  }
}
</style>
