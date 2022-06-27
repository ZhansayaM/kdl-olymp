<template>
  <Card class="procedure-room__card" card-mode="light">
    <RFText class="label" variant="medium">Процедурный кабинет</RFText>
    <div v-if="appointment.date" class="procedure-room__card__row">
      <RFText variant="small">
        {{ `Запись на приём: ${appointment.date}, ${appointment.time}` }}
      </RFText>
    </div>
    <div class="procedure-room__card__row">
      <RFText>{{ location }}</RFText>
      <RFButton variant="link" size="small" @click="$emit('change')">
        Изменить
      </RFButton>
    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
import Card from 'atoms/Card/index.vue'
import RFButton from 'atoms/RFButton/index.vue'

/**
 * 'MOLECULES/CheckoutProcedureRoomCard'
 * @displayName CheckoutProcedureRoomCard
 */
export default Vue.extend({
  name: 'CheckoutProcedureRoomCard',
  components: {
    Card,
    RFText,
    RFButton,
  },
  props: {
    location: {
      type: String,
      default: '',
    },
    appointment: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

<style lang="scss" scoped>
.procedure-room__card {
  ::v-deep .content {
    width: 100%;
    margin: 0;
    padding: 28px 40px;
  }
  &__row {
    @include flex-row();

    justify-content: space-between;
    align-items: flex-end;
    .rf-btn--link {
      color: $c-primary;
    }
  }
  .label {
    color: $c-gray;
    margin-bottom: 6px;
  }
}
</style>
