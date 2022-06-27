<template>
  <div class="main">
    <ButtonBack />
    <ChooseMyselfInfo />
  </div>
</template>

<script>
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
import ChooseMyselfInfo from 'molecules/ChooseMyselfInfo/index.vue'

export default {
  name: 'ChooseMyself',
  components: {
    ButtonBack,
    ChooseMyselfInfo,
  },
  head: {
    title: 'Выбираю сам',
  },
}
</script>

<style lang="scss" scoped>
.main {
  padding: 50px 50px 100px 50px;
  max-width: 1440px;
  margin: 0 auto;
  @include small-laptop {
    padding: 50px 50px 125px 50px;
  }
  @include medium-tablet {
    padding: 20px 20px 286px 20px;
  }
  @include tablet {
    padding: 20px 20px 50px 20px;
  }
}
</style>
