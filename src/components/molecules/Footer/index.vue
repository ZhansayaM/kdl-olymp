<template>
  <section class="footer">
    <section class="footer-left">
      <RFHeading tag="h3">© КДЛ Олимп</RFHeading>
      <section class="footer-social">
        <ul class="footer-social__list">
          <li
            v-for="item in items"
            :key="item.id"
            class="footer-social__list-item"
          >
            <router-link :to="item.link">
              <svg-icon
                :name="item.icon"
                class="footer-social__list-icon"
              ></svg-icon>
            </router-link>
          </li>
        </ul>
      </section>
    </section>
    <section class="footer-right">
      <router-link to="/">Обратная связь</router-link>
      <router-link to="/">Юридическая информация</router-link>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'

/* Footer сайта */

export default Vue.extend({
  name: 'Footer',
  components: {
    RFHeading,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          icon: 'telegram',
          link: '#',
        },
        {
          id: 2,
          icon: 'facebook',
          link: '#',
        },
        {
          id: 3,
          icon: 'vk',
          link: '#',
        },
        {
          id: 4,
          icon: 'youtube',
          link: '#',
        },
        {
          id: 5,
          icon: 'instagram',
          link: '#',
        },
        {
          id: 6,
          icon: 'tik-tok',
          link: '#',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 50px 10px 50px;
  width: 100%;
  color: $c-dark;
  max-width: 1440px;
  // border-top: 1px solid rgba(41, 41, 75, 0.1);
  justify-content: space-between;
  align-items: center;
  @include flex-row();
  @include medium-tablet {
    padding: 30px 20px 10px 20px;
  }
  @include tablet {
    padding: 20px;
  }
  @include phone {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
  &-left {
    align-items: center;
    @include phone {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 10px;
      grid-row-gap: 5px;
    }
    > h3 {
      text-transform: uppercase;
      padding-right: 20px;
      @include font-size(18px, 21px, 400);
      @include tablet {
        width: 55px;
        padding-right: 0;
        margin-top: 10px;
        @include font-size(14px, 16px, 400);
      }
      @include phone {
        width: 100%;
        margin-top: 0;
      }
    }
    @include flex-row();
  }

  &-right {
    @include phone {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
    }
    > a {
      text-decoration: none;
      color: $c-dark;
      @include font-size(16px, 19px, 400);
      @include medium-tablet {
        @include font-size(15px, 16px, 400);
      }
      @include tablet {
        @include font-size(14px, 16px, 400);
      }
    }

    > a + a {
      padding-left: 32px;
      @include medium-tablet {
        padding-left: 10px;
      }
      @include phone {
        padding-left: 0;
      }
    }
  }

  &-social {
    text-align: center;
    &__list {
      height: 100%;
      list-style-type: none;
      align-items: center;
      text-align: center;
      justify-content: center;
      @include flex-row();
      @include tablet {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 5px;
      }
      @include phone {
        grid-template-columns: repeat(6, 1fr);
        grid-row-gap: 0;
        align-items: flex-start;
      }
      &-item {
        > a {
          text-decoration: none;
        }
      }

      &-icon {
        max-width: 30px;
        max-height: 20px;
      }

      > li + li {
        margin-left: 10px;
      }

      > li:nth-child(4),
      li:nth-child(5) {
        margin-left: 15px;
      }
    }
  }
}
</style>
