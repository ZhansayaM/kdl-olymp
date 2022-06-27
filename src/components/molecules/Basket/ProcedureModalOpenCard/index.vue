<template>
  <Card class="procedure-modal-open__card" card-mode="light">
    <RFText variant="small">
      Выберите процедурный кабинет для записи на приём
    </RFText>
    <RFButton
      :is-icon="true"
      size="xs"
      variant="outline-primary"
      @click="openProcedureChooseModal"
    >
      Выбрать процедурный кабинет
      <ArrowRight />
    </RFButton>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import ArrowRight from '@/assets/icons/arrow-right-tail.svg?inline'

/**
 * 'MOLECULES/ProcedureModalOpenCard'
 * @displayName ProcedureModalOpenCard
 */
export default Vue.extend({
  name: 'ProcedureModalOpenCard',
  components: {
    RFText,
    RFButton,
    Card,
    ArrowRight,
  },
  methods: {
    openProcedureChooseModal() {
      this.$emit('open')
    },
  },
})
</script>

<style lang="scss" scoped>
.procedure-modal-open__card {
  ::v-deep .content {
    background: $c-disabled-bg;
    width: 100%;
    margin: 0;
    padding: 28px 30px;
  }
  button.rf-btn {
    margin-top: 18px;
    width: fit-content;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    background: $c-white;
  }
}
</style>
