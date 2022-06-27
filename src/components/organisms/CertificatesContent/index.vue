<template>
  <div class="promotions__certificates">
    <section class="content">
      <!-- TODO: API /certificate проверить контент страницы и заменить на инфу с бэка -->
      <ButtonBack class="content__back" />
      <RFHeading tag="h1"> Сертификаты </RFHeading>
      <div class="content__wrap">
        <div class="content__wrap__left">
          <div class="content__wrap__top">
            <RFText
              v-for="(item, index) in generalInfo"
              :key="index"
              class="content__wrap__top__text"
            >
              {{ item }}
            </RFText>
          </div>

          <RFHeading tag="h5"> Где получить промо-коды? </RFHeading>
          <ol>
            <li class="info">
              <span>Выберите стоимость приобретаемого сертификата.</span>
            </li>
            <li class="info">
              <span>Выберите вид сертификата: бумажный или электронный.</span>
            </li>
            <li class="info">
              <span>Укажите количество приобретаемых сертификатов.</span>
            </li>
          </ol>
          <RFText class="info">
            Оплатить сертификат вы можете тремя способами: онлайн-платежом, в
            процедурном кабинете, либо курьеру при выборе доставки по адресу.
          </RFText>

          <RFHeading tag="h5"> Правила пользования сертификатом: </RFHeading>
          <ul>
            <li v-for="(item, index) in unordered" :key="index" class="info">
              {{ item }}
            </li>
          </ul>
        </div>
        <div>
          <Calculator />
          <RFText variant="xs" class="content__wrap__info">
            При заказе сертификатов на сумму более 200 000 ₸ доставка бесплатно
          </RFText>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import Calculator from 'molecules/Calculator/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'

export default Vue.extend({
  name: 'CertificatesContent',
  components: {
    RFHeading,
    RFText,
    Calculator,
    ButtonBack,
  },
  data() {
    return {
      generalInfo: [
        'Выбираете подарок для ваших близких? Подарите возможность проверить свое здоровье в одной из ведущих лабораторий страны!',
        'В сети клинико-диагностических лабораторий «ОЛИМП» можно заказать подарочные сертификаты с любым номиналом. Сертификат дает возможность вашим близким, родственникам, друзьям и коллегам сдать анализы в любом филиале КДЛ «ОЛИМП» по всему Казахстану.',
      ],
      unordered: [
        'При покупке услуг на сумму менее номинала сертификата денежная разница не возвращается;',
        'При покупке услуг на сумму более номинала сертификата разница оплачивается дополнительно;',
        'Сертификат действителен в течение 60 дней со дня покупки;',
        'Сертификат возврату и обмену не подлежит;',
        'Сертификат можно использовать для предоставления услуги только одному лицу.',
      ],
    }
  },
  computed: {
    certificateData() {
      return this.$store.getters['certificate/getCertificate']
    },
  },
})
</script>

<style lang="scss" scoped>
.promotions__certificates {
  padding: 50px 50px 60px;
  max-width: 1440px;
  margin: 0 auto;
  @include medium-tablet {
    padding: 30px 20px 60px;
  }
  @include phone {
    padding: 21px 16px 60px;
  }
  .content {
    &__back {
      margin-bottom: 40px;
      @include phone {
        margin-bottom: 28px;
      }
    }
    &__wrap {
      gap: 40px;
      justify-content: space-between;
      @include flex-row();
      @include tablet {
        flex-direction: column;
        gap: 18px;
      }
      &__left {
        max-width: 52rem;
      }
      &__info {
        padding: 18px 25px;
        margin-top: 20px;
        background: #fff2d3;
        border-radius: 5px;
        max-width: 26rem;
        @include tablet {
          max-width: 100%;
          margin-top: 10px;
        }
      }
      &__top {
        padding-bottom: 10px;
        @include tablet {
          padding-bottom: 0;
        }
        &__text {
          margin-bottom: 10px;
        }
      }
    }
  }
  .info {
    @include font-size(16px, 24px);
    @include phone {
      @include font-size(14px, 20px);
    }
  }
  h1.rf-heading {
    margin: 0 0 20px;
    @include phone {
      margin-bottom: 28px;
      letter-spacing: -0.02em;
      @include font-size(28px, 34px, 500);
    }
  }
  h5.rf-heading {
    margin: 20px 0;
    @include phone {
      margin: 28px 0 18px 0;
    }
  }

  ol {
    list-style: decimal inside none;
    @include phone {
      margin: 18px 0;
    }
  }
  ul {
    list-style: none;
    li::before {
      content: '\2022';
      color: #31b0ed;
      font-weight: bold;
      display: inline-block;
      width: 8px;
      margin-right: 19px;
      @include phone {
        width: auto;
        font-size: 2.1em;
        margin-right: 18px;
        margin-top: -2px;
      }
    }
    li {
      @include flex-row();
    }
  }
  li {
    margin-bottom: 20px;
    &::marker {
      color: $c-primary;
      margin-right: 10px;
    }
    span {
      margin-left: 10px;
    }
    @include phone {
      margin-bottom: 10px;
    }
  }
}
</style>
