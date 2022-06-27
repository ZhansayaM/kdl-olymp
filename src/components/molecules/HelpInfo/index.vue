<template>
  <div class="helpInfo">
    <RFHeading tag="h2" class="helpInfo__title">Полезная информация</RFHeading>
    <section class="helpInfo-list">
      <ul class="list-wrap">
        <li v-for="item in items" :key="item.id" class="list-wrap__item">
          <svg-icon :name="item.icon" class="list-wrap__item-icon" />
          <router-link v-if="!item.isOutsideLink" :to="item.link">{{
            item.title
          }}</router-link>
          <a v-else :href="item.link" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

/**
 * Карточка Полезной информации
 */
export default {
  name: 'HelpfulInfo',
  components: {
    RFHeading,
  },
  props: {
    /**
     * Пропс полезной информации
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.helpInfo {
  max-width: 420px;
  width: 100%;
  @include small-laptop {
    max-width: 100%;
  }
  h2.rf-heading {
    margin: 0;
    font-weight: 400;
    padding-bottom: 75px;
    @include small-laptop {
      padding-bottom: 15px;
    }
    @include tablet {
      padding-bottom: 20px;
    }
    @include small-phone {
      @include font-size(22px, 27px);
    }
  }

  // &-list {
  //   >
  //   }
  // }
}
.list-wrap {
  justify-content: center;
  @include flex-column();

  > li + li {
    padding-top: 36px;
    @include small-laptop {
      padding-top: 30px;
    }
    @include small-phone {
      padding-top: 20px;
    }
  }

  &__item {
    list-style-type: none;
    align-items: center;
    a {
      color: $c-primary;
      text-decoration: none;
      @include font-size(24px, 30px);
      @include small-laptop {
        font-size: 22px;
        line-height: 24px;
      }
      @include tablet {
        @include font-size(20px, 22px);
      }
      @include phone {
        @include font-size(16px, 19px);
      }
    }

    @include flex-row();
    &-icon {
      max-width: 30px;
      max-height: 30px;
      margin-right: 18px;
      @include tablet {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
    }
  }
}
</style>
