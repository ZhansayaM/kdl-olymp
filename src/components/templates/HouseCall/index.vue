<template>
  <div class="house_call">
    <Banner :title="banner.title" :background-color="banner.background">
      <template slot="content">
        <RFText class="banner_subtitle">{{ banner.subtitle }}</RFText>
      </template>
    </Banner>

    <div class="house_call-container">
      <section class="content">
        <RFText>
          В условиях пандемии, а также в случаях, когда у вас нет возможности
          самостоятельно посетить клинику для сдачи анализов, самым удобным и
          безопасным способом сдачи анализов является вызов медицинской сестры.
        </RFText>

        <RFText>
          КДЛ «ОЛИМП» ценит Ваше время и комфорт и предлагает Вам забор анализов
          с выездом мобильной службы на дом или в офис:
        </RFText>
        <ul>
          <li>
            Cдать анализы могут несколько человек, оплатив только 1 вызов
            медицинской сестры;
          </li>
          <li>
            Для забора анализов используются современные стерильные материалы;
          </li>
          <li>Все заборы осуществляют высококвалифицированные специалисты;</li>
          <li>
            Анализы принимаются у пациентов всех возрастов, включая детей любого
            возраста (с письменного согласия родителей);
          </li>
          <li>
            Результаты анализов вы можете получить на сайте, заполнив данные из
            вашего чека.
          </li>
        </ul>

        <RFText class="contact_text">
          Заказать выезд Вы можете, заполнив форму ниже, либо позвонив в
          контакт-центр по номеру:
          <br />
          59-79-69 (Алматы – 259-79-69), (36-30-05 Семей)
        </RFText>
      </section>
      <aside>
        <MessageCard class="message_card" card-mode="light">
          <RFText>Стоимость выезда на дом</RFText>
          <RFHeading tag="h4">2 000 ₸</RFHeading>
        </MessageCard>
      </aside>
    </div>

    <div class="house_call-container">
      <section class="content">
        <RFHeading tag="h4">Заказать выезд на дом</RFHeading>
        <div class="form_content">
          <RFInput id="name_input" v-model="name">
            <template slot="label">Ф.И.О</template>
          </RFInput>
          <RFInput id="phone_input" v-model="phone">
            <template slot="label">Телефон</template>
          </RFInput>
          <RFInput id="email_input" v-model="email">
            <template slot="label">E-mail</template>
          </RFInput>
          <RFInput id="iin_input" v-model="iin">
            <template slot="label">ИИН</template>
          </RFInput>
          <RFInput id="address_input" v-model="address">
            <template slot="label">Ваш адрес</template>
          </RFInput>
          <RFInput id="city_input" v-model="city">
            <template slot="label">Город</template>
          </RFInput>
          <RFInput id="date_input" v-model="date">
            <template slot="label">Желаемая дата выезда</template>
          </RFInput>
          <NumberInput id="patients_count_input" v-model="pplCount">
            <template slot="label">Количество пациентов</template>
          </NumberInput>
          <RFButton type="submit" variant="primary" @click="submitData">
            Отправить заявку
          </RFButton>
        </div>
      </section>
      <aside></aside>
    </div>
    <Modal :show="showModal" @close="cancel">
      <div slot="content" class="notif_modal">
        <RFHeading tag="h3">Ваша заявка принята</RFHeading>
        <RFText variant="mid">
          Наши сотрудники свяжутся с вами в ближашее время
        </RFText>
        <RFButton
          size="small"
          variant="primary"
          @click="$router.push('/house-call/map')"
        >
          Хорошо
        </RFButton>
      </div>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Banner from 'molecules/Banner/index.vue'
import MessageCard from 'atoms/MessageCard/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import NumberInput from 'atoms/Input/NumberInput/index.vue'
import Modal from 'molecules/Modal/index.vue'
/**
 * 'TEMPLATES/HouseCallTemplate'
 * @displayName HouseCallTemplate
 */
export default Vue.extend({
  name: 'HouseCallTemplate',
  components: {
    Banner,
    MessageCard,
    RFButton,
    RFHeading,
    RFText,
    RFInput,
    NumberInput,
    Modal,
  },
  data() {
    return {
      banner: {
        title: 'Выезд на дом',
        subtitle: 'Сдавайте анализы, когда и где вам удобно',
        background: 'dark',
      },
      name: '',
      phone: '',
      email: '',
      iin: '',
      address: '',
      city: '',
      date: '',
      pplCount: 0,
      showModal: false,
    }
  },
  methods: {
    submitData() {
      this.showModal = true
    },
    cancel() {
      this.showModal = false
    },
  },
})
</script>

<style lang="scss" scoped>
.house_call {
  padding: 0;
  &-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: 40px;
    padding: 40px 50px;
    .content {
      width: 100%;
      .contact_text {
        max-width: 600px;
      }
      .form_content {
        display: flex;
        flex-wrap: wrap;
        column-gap: 60px;
        row-gap: 20px;
        .rf-input {
          width: 100%;
          max-width: 380px;
        }
        button {
          padding: 13.5px;
          border-radius: 4px;
          width: 100%;
          max-width: 380px;
          margin-top: 26px;
        }
      }
    }
    aside {
      width: 420px;
    }

    @include tablet {
      padding: 20px 40px;
      flex-direction: column-reverse;
      aside {
        width: fit-content;
        min-width: 300px;
      }
    }
  }
  .banner_subtitle {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    color: $c-white;
    margin-top: 30px;
  }
  ol {
    list-style: decimal inside none;
  }
  ul {
    list-style: disc inside none;
  }
  li {
    list-style: inherit;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 20px;

    &::marker {
      color: $c-primary;
    }
  }
  p {
    margin-bottom: 40px;
    @include wide-laptop {
      width: 100%;
    }
    @include phone {
      margin-bottom: 15px;
    }
  }
  p,
  li {
    max-width: 860px;
    font-size: 16px;
    line-height: 28px;
    @include wide-laptop {
      width: 100%;
    }
    @include phone {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .message_card {
    display: flex;
    flex-direction: column;
  }

  .notif_modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;

    @include phone {
      padding: 20px;
    }
  }
}
</style>
