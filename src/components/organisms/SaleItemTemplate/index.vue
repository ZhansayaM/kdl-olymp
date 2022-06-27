<template>
  <section class="sales-item">
    <ButtonBack class="sales-item__back" />
    <RFHeading tag="h2">{{ item.right.title }}</RFHeading>
    <RFText variant="mid-big">
      {{ item.oldPrice }} ₸ вместо {{ item.price }} ₸</RFText
    >
    <div class="info">
      <div class="info__text">
        <RFText class="info__text_title"> {{ item.info.title }} </RFText>
        <ul v-for="(element, index) in item.info.points" :key="index">
          <li>{{ element }}</li>
        </ul>
      </div>
      <SalesCard
        :current-price="item.price"
        :old-price="item.oldPrice"
        :period="item.period"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import RFText from 'atoms/RFText/index.vue'
import SalesCard from 'molecules/Cards/SalesCard/index.vue'
export default Vue.extend({
  name: 'SalesOrganisms',
  components: {
    ButtonBack,
    RFHeading,
    RFText,
    SalesCard,
  },
  data() {
    return {
      item: {},
    }
  },
  created() {
    this.item =
      this.$store.state.saleses.salesData[this.$store.state.saleses.salesId]
  },
})
</script>

<style lang="scss" scoped>
.sales-item {
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
  h2.rf-heading {
    font-weight: 400;
    margin: 0 0 20px;
    max-width: 880px;
    @include small-phone {
      margin-bottom: 18px;
      @include font-size(28px, 34px, 500);
    }
  }
  .info {
    margin-top: 40px;
    gap: 86px;
    @include flex-row();
    @include medium-tablet {
      gap: 40px;
    }
    @include tablet {
      flex-direction: column;
    }
    @include phone {
      gap: 18px;
      flex-direction: column;
      margin-top: 28px;
    }
    &__text {
      max-width: 880px;
      &_title {
        margin-bottom: 20px;
        @include phone {
          margin-bottom: 18px;
        }
      }
      ul {
        list-style: none;
        margin-bottom: 20px;
        @include phone {
          margin-bottom: 10px;
        }
        li {
          @include flex-row();
          @include font-size(16px, 24px);
          @include phone {
            @include font-size(14px, 20px);
          }
        }
        li::before {
          content: '\2022';
          color: $c-primary;
          font-weight: bold;
          display: inline-block;
          width: 8px;
          margin-right: 19px;
          @include phone {
            width: auto;
            font-size: 2.1em;
            margin-right: 18px;
            margin-top: -2px;
          }
        }
      }
    }
  }
}
</style>
