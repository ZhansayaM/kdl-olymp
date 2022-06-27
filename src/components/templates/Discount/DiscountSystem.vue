<template>
  <div class="discount_system_template">
    <div class="discount_system_template-main">
      <RFHeading tag="h2"> {{ discountData[0].attributes.title }} </RFHeading>
      <nuxt-link class="acquire_card" to="discount-system/acquire">
        Получить дисконтную карту
      </nuxt-link>
      <div
        class="text-normalize"
        v-html="discountData[0].attributes.description"
      ></div>
    </div>
    <DiscountCard
      :back="discountData[0].attributes.image_back_path"
      :front="discountData[0].attributes.image_path"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DiscountCard from 'molecules/Cards/DiscountCard/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'

export default Vue.extend({
  name: 'DiscountSystemTemplate',
  components: {
    DiscountCard,
    RFHeading,
  },
  computed: {
    discountData() {
      return this.$store.getters['discount/getDiscountSystem']
    },
  },
})
</script>

<style lang="scss" scoped>
.discount_system_template {
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  @include flex-row();
  @include medium-tablet {
    flex-direction: column;
    align-items: center;
  }
  @include phone {
    gap: 24px;
  }
  .acquire_card {
    margin-bottom: 24px;
    text-decoration-line: underline;
    color: $c-primary;
    display: none;
    @include font-size(16px, 23px);
    @include phone {
      display: block;
    }
  }
  &-main {
    max-width: 860px;
    @include flex-column();
    h2.rf-heading {
      font-weight: 400;
      margin: 0 0 20px;
      @include phone {
        font-weight: 500;
        margin-bottom: 18px;
      }
    }
    .text-normalize {
      ::v-deep {
        h6 {
          margin: 0 0 40px;
          line-height: 28px;
          @include phone {
            margin-bottom: 12px;
            @include font-size(14px, 20px);
          }
        }
        h4 {
          font-weight: 400;
          margin: 40px 0 20px;
          @include phone {
            margin: 26px 0 12px;
          }
        }
        h4.privileges {
          @include phone {
            margin: 28px 0 18px;
          }
        }
        div {
          padding-bottom: 6px;
          @include small-laptop {
            padding-bottom: 0;
          }
          p {
            @include phone {
              margin-bottom: 12px;
            }
          }
        }
        div.ending {
          @include phone {
            margin-top: 28px;
          }
        }
        p {
          margin-bottom: 20px;
          @include phone {
            margin-bottom: 18px;
          }
          span {
            font-weight: 600;
            @include phone {
              font-weight: 400;
            }
          }
          a {
            text-decoration-line: underline;
            color: $c-active-text;
          }
        }
        p.conditions,
        p.conditions * {
          @include phone {
            @include font-size(16px, 22px);
          }
        }
        ul.privileges-list {
          li {
            @include phone {
              margin-bottom: 12px;
            }
          }
          li:last-child {
            margin-bottom: 24px;
          }
        }
      }
    }
  }
}
</style>
