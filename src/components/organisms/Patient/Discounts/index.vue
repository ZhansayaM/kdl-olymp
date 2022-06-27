<template>
  <div class="patient-discounts">
    <PatientDiscount />
    <div class="patient-discounts__applications">
      <p class="patient-discounts__applications__title">Последние заявки</p>
      <div class="patient-discounts__applications__block">
        <Application
          v-for="(item, index) in applications"
          :key="index"
          :date="item.date"
          :name="item.name"
          :number="item.number"
          :price="item.price"
          :ready="item.ready"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PatientDiscount from 'molecules/Cards/PatientDiscount/index.vue'
import Application from 'molecules/Cards/DiscountCard/Application/index.vue'

export default Vue.extend({
  name: 'PatientTemplate',
  components: { PatientDiscount, Application },
  data() {
    return {
      applications: [
        {
          date: '15 декабря',
          number: 97000003,
          name: 'Алексеев Дмитрий Алексеевич',
          price: 2400,
        },
        {
          date: '15 декабря',
          number: 97000000,
          name: 'Алексеев Дмитрий Алексеевич',
          ready: true,
          price: 2400,
        },
        {
          date: '15 декабря',
          number: 97000002,
          name: 'Алексеев Дмитрий Алексеевич',
          ready: true,
          price: 2400,
        },
        {
          date: '15 декабря',
          number: 97000001,
          name: 'Алексеев Дмитрий Алексеевич',
          ready: true,
          price: 2400,
        },
        {
          date: '15 декабря',
          number: 97000004,
          name: 'Алексеев Дмитрий Алексеевич',
          price: 2400,
          ready: true,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.patient-discounts {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  gap: 40px;
  @include flex-row();
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include medium-tablet {
    @include flex-column();
  }
  @include tablet {
    gap: 30px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  &__applications {
    width: 100%;
    &__title {
      margin-bottom: 32px;
      @include font-size(28px, 34px);
      @include phone {
        margin-bottom: 30px;
        font-weight: 500;
      }
    }
    &__block {
      gap: 10px;
      @include flex-column();
      @include phone {
        gap: 18px;
      }
    }
  }
}
</style>
