<template>
  <header>
    <div class="background">
      <button>
        <img src="~icons/close-burger.svg" @click="$emit('closed')" />
      </button>
    </div>
    <nav class="header-menu-content">
      <BurgerMenuInner />
      <div class="header-menu-content__list">
        <router-link
          v-for="item in items"
          :key="item.id"
          :to="item.link"
          class="header-menu-content__list-item"
          @click.native="redirect"
        >
          {{ item.title }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import BurgerMenuInner from 'molecules/BurgerMenuInner/index.vue'
/* Header-меню сайта */

export default Vue.extend({
  name: 'HeaderMenu',
  components: { BurgerMenuInner },
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
  },
  methods: {
    // Check if the tab 'О нас' is clicked. If so, reset the localstorage and the store component
    redirect(item) {
      if (item === 5) {
        localStorage.setItem('last', '')
        this.$store.commit('tabs/changeTabsActive', '')
      }
    },
  },
  watch: {
    // Watch the path to reset the localstorage and the store component, if the path does not start with /start =>
    // This will make the tabs on the about us page reset on redirecting to another page
    // TO-DO: handle this through nuxt
    '$route.fullPath'() {
      if (!this.$route.fullPath.startsWith('/about')) {
        localStorage.setItem('last', '')
        this.$store.commit('tabs/changeTabsActive', '')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.background {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  height: 30%;
  z-index: 5;
  background: #d3f1ff;
  @include phone {
    display: inline-block;
  }
  button {
    position: fixed;
    top: 32px;
    right: 17px;
    background: transparent;
    outline: none;
    border: none;
  }
}
.header-menu {
  &-content {
    @include flex-row();
    @include medium-tablet {
      z-index: 2;
      position: absolute;
      top: 90px;
      right: 20px;
      background: $c-white;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    @include tablet {
      top: 61px;
    }
    @include phone {
      flex-direction: column;
      padding: 20px 10px;
      width: 100%;
      position: fixed;
      overflow-y: auto;
      bottom: 0;
      right: 0;
      z-index: 1000;
    }
    &-background {
      position: fixed;
      top: 0;
      left: 0;
      background: $c-header-menu-bg;
      width: 100%;
      height: 50%;
      z-index: 1;
    }
    &__list {
      padding-left: 45px;
      text-align: center;
      @include font-size(17px, 21px);
      @include flex-row();
      @include wide-laptop {
        padding-left: 25px;
      }
      @include laptop {
        font-size: 16px;
      }
      @include small-laptop {
        padding-left: 15px;
        @include font-size(15px, 18px);
      }
      @include medium-tablet {
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
      }
      @include tablet {
        font-size: 13px;
        line-height: 15px;
      }
      &-item {
        align-self: center;
        text-decoration: none;
        color: $c-dark;
        &:active {
          color: $c-active-text;
          opacity: 1;
          background: transparent;
        }
        @include medium-tablet {
          width: 140px;
          padding: 10px;
        }
        @include tablet {
          padding: 8px;
        }
        @include phone {
          padding: 10px 0;
          text-align: left;
          border-bottom: 1px solid $c-additional-gray;
          width: 100%;
          @include font-size(18px, 22px);
        }

        &:hover {
          opacity: 0.7;
          @include medium-tablet {
            background: $c-light-blue;
          }
        }
      }
      &-item:not(:first-child) {
        padding-left: 18px;
        @include laptop {
          padding-left: 10px;
        }
        @include medium-tablet {
          padding: 10px;
        }
        @include tablet {
          padding: 8px;
        }
        @include phone {
          padding: 10px 0;
          text-align: left;
          @include font-size(18px, 22px);
        }
      }
    }
  }
}

// ::v-deep .logo {
//   @include wide-laptop {
//     max-width: 200px;
//   }
// }
</style>
