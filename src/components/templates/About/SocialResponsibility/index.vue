<template>
  <div class="main__wrap">
    <div class="main__wrap__inner">
      <RFHeading tag="h2">
        {{ responsibilityData[0].attributes.title }}
      </RFHeading>
      <div
        class="text-normalize"
        v-html="responsibilityData[0].attributes.description"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'

export default Vue.extend({
  name: 'AboutSocialResponsibility',
  components: {
    RFHeading,
  },
  computed: {
    responsibilityData() {
      return this.$store.getters['responsibility/getResponsibility']
    },
  },
})
</script>

<style lang="scss" scoped>
.main {
  &__wrap {
    padding: 60px 50px 50px;
    max-width: 1440px;
    margin: 0 auto;
    @include tablet {
      padding: 40px 20px;
    }
    @include phone {
      padding: 28px 16px 46px;
    }
    &__inner {
      max-width: 900px;
    }
    h2.rf-heading {
      margin: 0 0 20px 0;
      font-weight: 400;
      @include phone {
        margin-bottom: 18px;
        @include font-size(28px, 34px, 500);
      }
    }
    ::v-deep .text-normalize {
      > p {
        padding-bottom: 20px;
        @include font-size(20px, 28px);
        @include tablet {
          @include font-size(18px, 24px);
        }
        @include phone {
          padding-bottom: 0;
          margin-bottom: 10px;
          @include font-size(14px, 20px);
        }
      }
      div {
        margin-top: 20px;
        @include phone {
          margin-top: 28px;
        }
        p:nth-child(1) {
          margin-bottom: 20px;
          @include font-size(24px, 32px);
          @include tablet {
            margin-bottom: 18px;
            @include font-size(22px, 27px);
          }
        }
        p:nth-child(2) {
          @include font-size(16px, 24px);
          @include phone {
            @include font-size(14px, 20px);
          }
        }
      }
      > p:last-child {
        margin-top: 40px;
        color: $c-gray;
        @include font-size(16px, 24px);
        @include phone {
          margin-top: 18px;
          @include font-size(14px, 20px);
        }
      }
    }
  }
}
</style>
