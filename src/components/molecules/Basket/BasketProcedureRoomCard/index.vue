<template>
  <Card class="cabinet__card" card-mode="light">
    <RFText>{{ title }}</RFText>
    <RFText variant="small">{{ location }}</RFText>
    <RFButton variant="link" size="small" @click="openProcedureChooseModal">
      Изменить
    </RFButton>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
/**
 * 'MOLECULES/BasketProcedureRoomCard'
 * @displayName BasketProcedureRoomCard
 */
export default Vue.extend({
  name: 'BasketProcedureRoomCard',
  components: {
    RFText,
    RFButton,
    Card,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    appointment: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    openProcedureChooseModal() {
      this.$emit('open')
    },
  },
})
</script>

<style lang="scss" scoped>
.cabinet__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 28px 30px;
    p:nth-child(2) {
      margin: 13px 0 33px;
    }
  }
  button.rf-btn {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
  }

  .rf-btn--link {
    color: $c-primary;
  }
  .appointment {
    margin-bottom: 18px;

    .label {
      color: $c-gray;
    }
  }
}
</style>
