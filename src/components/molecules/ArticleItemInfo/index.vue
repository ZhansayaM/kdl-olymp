<template>
  <div class="main__info">
    <RFHeading tag="h2" class="main__info__title">
      {{ article.attributes.title }}
    </RFHeading>
    <div class="text-normalize" v-html="article.attributes.text"></div>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'ArticleItemInfo',
  components: {
    RFHeading,
  },
  computed: {
    article() {
      return this.$store.getters['pages/getPages']
    },
  },
}
</script>

<style lang="scss" scoped>
.main__info {
  max-width: 53rem;
  h2.rf-heading {
    margin: 0 0 46px 0;
    font-weight: 400;
    @include tablet {
      margin-bottom: 40px;
    }
    @include phone {
      margin-bottom: 30px;
    }
    @include small-phone {
      margin-bottom: 20px;
    }
    ::v-deep p {
      max-width: 834px;
      margin-bottom: 20px;
      @include font-size(20px, 28px);
      @include tablet {
        margin-bottom: 15px;
        @include font-size(16px, 24px);
      }
      @include small-phone {
        margin-bottom: 10px;
        @include font-size(14px, 20px);
      }
    }
  }
}
</style>
