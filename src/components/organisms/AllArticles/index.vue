<template>
  <div class="articals">
    <div class="articals-list">
      <ArticalCard
        v-for="(item, index) in articals"
        :id="item.id"
        :key="index"
        :title="item.attributes.title"
        :is-big="index === 0 ? true : false"
        :slug="item.attributes.slug"
        :text="item.attributes.text"
        class="articals-list__item"
      />
    </div>
    <Button class="articals__btn"> {{ btnShow }} </Button>
  </div>
</template>

<script>
import ArticalCard from 'molecules/Cards/ArticalCard/index.vue'

/**
 * Секция "Статьи"
 */
export default {
  name: 'AllArticles',
  components: {
    ArticalCard,
  },
  props: {
    articals: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      link: '/articles',
      btnShow: 'Показать еще',
    }
  },
}
</script>

<style lang="scss" scoped>
.articals {
  width: 100%;
  &-list {
    display: grid;
    grid-template-columns: 420px 420px 420px;
    grid-template-rows: 200px 200px;
    column-gap: 50px;
    justify-content: space-between;
    @include wide-laptop {
      grid-template-columns: 390px 390px 390px;
    }
    @include laptop {
      grid-template-columns: 360px 360px 360px;
    }
    @include small-laptop {
      grid-template-columns: 280px 280px 280px;
    }
    @include wide-tablet {
      grid-template-columns: 265px 265px 265px;
    }
    @include medium-tablet {
      @include flex-column();
    }
    &__item {
      &:nth-child(1) {
        grid-column-start: 2;
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }
  }
  &__btn {
    padding: 9px 21px;
    color: $c-primary;
    margin-top: 64px;
    border: 1px solid $c-primary;
    box-sizing: border-box;
    border-radius: 4px;
    background: $c-white;
    cursor: pointer;
    @include font-size(18px, 28px);
    @include small-laptop {
      margin-top: 50px;
    }
  }
}
</style>
