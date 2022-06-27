<template>
  <div class="press">
    <ButtonBack class="press__back" />
    <RFHeading tag="h1" class="press__title">Пресса о нас</RFHeading>
    <div class="press__cards">
      <PressCard
        v-for="item in cards"
        :id="item.id"
        :key="item"
        :date="item.date"
        :description="item.description"
        :img="item.img"
        :title="item.title"
        class="press__cards__card"
      />
    </div>
    <button class="press__btn">Показать еще</button>
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import PressCard from 'molecules/Cards/PressCard/index.vue'

export default {
  name: 'Press',
  components: {
    ButtonBack,
    RFHeading,
    PressCard,
  },
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    this.cards = this.$store.state.pressNews.pressNewsData
  },
}
</script>

<style lang="scss" scoped>
.press {
  padding: 50px 50px 120px;
  margin: 0 auto;
  @include tablet {
    padding: 20px 20px 50px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 26px;
    }
  }
  h1.rf-heading {
    margin: 0 0 96px 0;
    @include medium-tablet {
      margin-bottom: 50px;
    }
    @include phone {
      margin-bottom: 30px;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    @include medium-tablet {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
    @include phone {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
    &__card {
      width: 100%;
    }
  }
  &__btn {
    color: $c-primary;
    padding: 9px 21px;
    border: 1px solid $c-primary;
    box-sizing: border-box;
    border-radius: 4px;
    background: $c-white;
    margin-top: 46px;
    cursor: pointer;
    @include font-size(18px, 28px, 400);
    @include phone {
      margin-top: 30px;
      @include font-size(16px, 20px, 400);
    }
  }
}
</style>
