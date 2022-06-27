<template>
  <div class="articles">
    <RFHeading tag="h1"> {{ title }} </RFHeading>
    <AllNews />
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import AllNews from 'organisms/AllNews/index.vue'

/**
 * 'TEMPLATES/NewsInfo'
 * @displayName NewsInfo
 */
export default Vue.extend({
  name: 'NewsInfo',
  components: {
    RFHeading,
    AllNews,
  },
  data() {
    return {
      title: 'Новости',
    }
  },
})
</script>

<style lang="scss" scoped>
.articles {
  h1.rf-heading {
    margin: 0 0 42px;
    @include small-laptop {
      margin: 0 0 40px;
      @include font-size(40px, 50px, 500);
    }
    @include phone {
      margin: 0 0 30px;
      @include font-size(36px, 40px, 500);
    }
  }
}
</style>
