<template>
  <section class="promocode">
    <!-- TODO: API /promocode добавить контент страницы с бэка (сейчас информации с этой страницы нет) -->
    <ButtonBack class="promocode__back" />
    <RFHeading tag="h1" class="promocode__title">{{ title }}</RFHeading>
    <p class="promocode__genInfo">{{ genInfo }}</p>
    <div v-for="item in data" :key="item.id" class="promocode__paragraph">
      <p class="promocode__paragraph__title">{{ item.title }}</p>
      <p
        v-for="(elem, index) in item.text"
        :key="index"
        class="promocode__paragraph__text"
      >
        {{ elem }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
export default Vue.extend({
  name: 'PromocodeTemplate',
  components: {
    RFHeading,
    ButtonBack,
  },
  data() {
    return {
      title: 'Промо-коды',
      genInfo:
        'Хотите сэкономить деньги? Просто активируйте промо-код и получите скидку! В сети клинико-диагностических лабораторий «ОЛИМП» действует система промо-кодов позволяющих сдавать анализы со скидкой.',
      data: [
        {
          id: 1,
          title: 'Где получить промо-коды?',
          text: [
            'Промо-коды доступны в личном кабинете в разделе «Промо-коды».',
          ],
        },
        {
          id: 2,
          title: 'Как активировать промо-код?',
          text: [
            'Зайдите в раздел «Промо-коды» в личном кабинете, выберите нужный промо-код и нажмите кнопку «Активировать». После активации промо-кода в оформлении заказа скидка автоматически активируется.',
          ],
        },
        {
          id: 3,
          title: 'Правила пользования промо-кодом',
          text: [
            'Срок действия промо-кода является ограниченным. Воспользоваться промо-кодом возможно до истечения срока его действия. Датой реализацией промо-кода является фактическая дата предоставления услуги.',
            'В случае активации промо-кода и оплаты услуги онлайн, но неполучения услуги в назначенную дату по причине отсутствия Держателя промо-кода, Лаборатория оставляет за собой право рассмотрения вопроса о возврате Держателю промо-кода стоимости неполученной услуги.',
          ],
        },
      ],
    }
  },
  // computed: {
  //   promocodeData() {
  //     return this.$store.getters['promocode/getPromocode']
  //   },
  // },
})
</script>

<style lang="scss" scoped>
.promocode {
  padding: 50px 50px 100px 50px;
  @include tablet {
    padding: 30px 30px 50px 30px;
  }
  @include phone {
    padding: 20px 16px;
  }
  &__back {
    margin-bottom: 46px;
    @include phone {
      margin-bottom: 28px;
    }
  }
  h1.rf-heading {
    margin: 0 0 20px;
    @include phone {
      margin-bottom: 28px;
      @include font-size(28px, 34px, 500);
    }
  }
  &__genInfo {
    margin-bottom: 40px;
    max-width: 55rem;
    @include font-size(20px, 28px, 400);
    @include tablet {
      margin-bottom: 28px;
      @include font-size(18px, 24px, 400);
    }
    @include phone {
      @include font-size(14px, 20px, 400);
    }
  }
  &__paragraph {
    &__title {
      margin-bottom: 20px;
      @include font-size(24px, 32px, 400);
      @include phone {
        margin-bottom: 12px;
        @include font-size(18px, 26px, 400);
      }
    }
    &__text {
      margin-bottom: 10px;
      max-width: 55rem;
      @include font-size(16px, 24px, 400);
      @include phone {
        @include font-size(14px, 20px, 400);
      }
    }
    &__text:last-child {
      margin-bottom: 20px;
      @include phone {
        margin-bottom: 28px;
      }
    }
  }
}
</style>
