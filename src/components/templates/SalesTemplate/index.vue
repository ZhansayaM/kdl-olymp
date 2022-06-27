<template>
  <section class="sales__card">
    <ButtonBack class="sales__card__back" />
    <RFHeading tag="h1" class="sales__card__title">{{ title }}</RFHeading>
    <div class="sales__card__wrap">
      <div v-for="item in items" :key="item.id" class="sales__card__wrap__card">
        <Card
          :title="item.title"
          :old-price="item.oldPrice"
          :price="item.price"
          :date="item.date"
          :color="item.color"
          :img="item.img"
          :sales="true"
          class="sales__card__wrap__card__item"
        />
        <div class="sales__card__wrap__card__right">
          <p class="sales__card__wrap__card__right__title">
            {{ item.right.title }}
          </p>
          <span class="sales__card__wrap__card__right__description">
            {{ item.right.description }}
          </span>
          <Button @click="redirect(item.id)">Узнать больше</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import Card from 'molecules/Cards/ServiceCard/CurrentCard/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
export default Vue.extend({
  name: 'SalesTemplate',
  components: {
    Card,
    ButtonBack,
    RFHeading,
  },
  data() {
    return {
      title: 'Акции',
    }
  },
  computed: {
    items() {
      return this.$store.state.sales.salesData
    },
  },
  methods: {
    redirect(id) {
      this.$router.push('/promotions/sales/sale')
      this.$store.commit('saleses/changeSalesId', id)
    },
  },
})
</script>

<style lang="scss" scoped>
.sales__card {
  padding: 50px 50px 100px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 28px;
    }
  }
  h1.rf-heading {
    margin: 0 0 47px;
    @include phone {
      margin-bottom: 28px;
      @include font-size(28px, 34px, 500);
    }
  }
  &__wrap {
    flex-wrap: wrap;
    gap: 20px;
    @include flex-row();
    @include phone {
      gap: 10px;
    }
    &__card {
      @include flex-row();
      @include phone {
        flex-direction: column;
      }
      &__right {
        background: $c-white;
        border: 1px solid $c-basic-blue;
        box-sizing: border-box;
        border-radius: 0 5px 5px;
        padding: 18px;
        width: 23.2em;
        justify-content: space-between;
        @include flex-column();
        @include wide-laptop {
          width: 21.1em;
        }
        @include laptop {
          width: 18.4em;
        }
        @include small-laptop {
          width: 14.8em;
        }
        @include medium-tablet {
          width: 50%;
        }
        @include phone {
          border-radius: 0 0 5px 5px;
          width: 100%;
        }
        &__title {
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 5px;
          @include font-size(20px, 28px);
          @include phone {
            @include font-size(16px, 22px);
          }
        }
        &__description {
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          @include font-size(16px, 24px);
          @include phone {
            @include font-size(14px, 20px);
          }
        }
        button {
          margin-top: 28px;
          padding: 0;
          text-decoration-line: underline;
          color: $c-primary;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          @include font-size(16px, 19px);
        }
      }
    }
    &__card:nth-child(2),
    &__card:nth-child(4) {
      .cards img {
        left: 80px;
      }
    }
  }
}
::v-deep {
  .cards.sales .cards__img {
    width: 13em !important;
    left: auto !important;
    top: auto !important;
    right: 0 !important;
    bottom: 4px !important;
    @include phone {
      width: 22rem !important;
    }
  }
  .sales__card__wrap__card:nth-child(3) .cards.sales .cards__img {
    width: 192px !important;
    height: 140px !important;
  }
}
</style>
