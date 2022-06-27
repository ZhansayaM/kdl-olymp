<template>
  <div>
    <div class="cards">
      <section class="cards-top">
        <div class="cards-top__date">{{ date }}</div>
        <RFText class="cards-top__name"> {{ name }} </RFText>
        <RFHeading class="cards__title" tag="h3">{{ number }}</RFHeading>
      </section>
      <template v-if="results">
        <div class="cards-bottom">
          <div class="cards-bottom__title">Ожидание результатов</div>
          <RFText class="cards-bottom__time"
            >Результаты будут готовы {{ results }}</RFText
          >
        </div>
      </template>
      <template v-else>
        <div class="cards-bottom-btn">
          <!-- // TODO: Заменить роут при подключении api -->
          <Button
            class="cards-bottom-btn__results"
            variant="secondary"
            @click="$router.push(link)"
            >Посмотреть</Button
          >
          <!-- // TODO: Заменить на ссылку с download при подключении api -->
          <Button
            icon="print"
            size="medium"
            icon-left
            class="cards-bottom-btn__download"
            variant="secondary"
            >Скачать</Button
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Button from 'atoms/Button/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'ResultsCard',
  components: {
    Button,
    RFHeading,
    RFText,
  },
  props: {
    date: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    results: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
.cards {
  width: 420px;
  min-height: 274px;
  height: max-content;
  background: $c-white;
  padding: 28px 30px;
  border: 1px solid $c-basic-blue;
  border-radius: 8px;
  color: $c-light-gray-text;
  justify-content: space-between;
  @include flex-column();

  @include small-laptop {
    min-width: auto;
    width: 370px;
  }

  @include wide-tablet {
    width: 430px;
  }

  @include tablet {
    width: 100%;
  }

  @include phone {
    width: calc(100vw - 32px);
  }

  &-top {
    &__date {
      color: $c-light-gray-text;
      padding-bottom: 18px;
      @include font-size(14px, 20px);
    }

    &__name {
      color: $c-light-gray-text !important;
      padding-bottom: 12px;
      @include font-size(14px, 20px);
    }

    > h3 {
      color: $c-dark !important;
      @include font-size(20px, 28px, 400);
    }
  }

  &-bottom {
    &__title {
      width: 214px;
      height: 38px;
      border-radius: 100px;
      justify-content: center;
      background: $c-light-gray;
      color: $c-gray;
      @include flex-row();

      @include font-size(16px, 38px);
    }
    &__time {
      padding: 14px 0 0 6px;
      color: $c-dark;
      @include font-size(14px, 20px);
    }
  }

  &-bottom-btn {
    gap: 10px;
    @include flex-row();
    &__results,
    &__download {
      width: 178px;
      height: 36px;
      @include font-size(16px, 24px);

      @include tablet {
        width: 120px;
        padding: 0 16px;
        @include font-size(14px, 20px);
      }

      @include phone {
        width: 100%;
      }
    }
  }
}

// Стили для иконки скачивания
::v-deep .button-base .icon {
  width: 20px !important;
  height: 20px !important;
  pointer-events: none !important;
  cursor: none;
}
</style>
