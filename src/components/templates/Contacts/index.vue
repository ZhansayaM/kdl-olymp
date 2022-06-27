<template>
  <div class="contacts">
    <Banner :title="banner.title" :background-color="banner.background" />
    <div class="contacts_wrapper">
      <section class="row">
        <ContactsWrap :contacts="contacts" />
        <MessageCard class="message_card" card-mode="main">
          <RFText variant="medium" class="message_card__title"
            >График работы контакт-центра:</RFText
          >
          <RFText variant="mid" class="message_card__text"
            >Понедельник – Суббота</RFText
          >
          <RFText variant="mid" class="message_card__text">
            {{ contactData[0].attributes.start_time }} –
            {{ contactData[0].attributes.end_time }}</RFText
          >
        </MessageCard>
      </section>
      <section class="row">
        <form class="col">
          <RFHeading tag="h4" variant="dark"> Обратная связь </RFHeading>
          <div class="row">
            <RFInput id="city_input">
              <template slot="label">Город</template>
            </RFInput>
            <RFInput id="name_input">
              <template slot="label">Имя</template>
            </RFInput>
            <RFInput id="phone_input">
              <template slot="label">Номер телефона</template>
            </RFInput>
            <RFInput id="surname_input">
              <template slot="label">Фамилия</template>
            </RFInput>
            <RFTextArea title="Сообщение" />
            <UploadButton v-model="files" />
          </div>
          <RFButton>Отправить</RFButton>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFTextArea from 'atoms/RFTextarea/index.vue'
import UploadButton from 'atoms/UploadButton/index.vue'
import Banner from 'molecules/Banner/index.vue'
import MessageCard from 'atoms/MessageCard/index.vue'
import ContactsWrap from 'molecules/ContactsWrap/index.vue'
import RFText from 'atoms/RFText/index.vue'

/**
 * 'TEMPLATES/ContactsTemplate'
 * @displayName ContactsTemplate
 */
export default Vue.extend({
  name: 'ContactsTemplate',
  components: {
    RFHeading,
    RFButton,
    RFInput,
    RFTextArea,
    Banner,
    MessageCard,
    ContactsWrap,
    UploadButton,
    RFText,
  },
  data() {
    return {
      files: [],
      banner: {
        title: 'Контакты',
        background: 'main',
      },
      contacts: [
        {
          title: 'Контакт-центр',
          icon: 'phone',
          contacts: [
            {
              number: '',
              comment: 'по всему Казахстану',
            },
            {
              number: '',
              comment: 'г. Семей',
            },
          ],
        },
        {
          title: 'Telegram',
          icon: 'telegram',
          contacts: [
            {
              number: '',
              comment: 'только текстовые сообщения',
            },
          ],
        },
      ],
    }
  },
  computed: {
    contactData() {
      return this.$store.getters['contact/getContact']
    },
  },
  mounted() {
    this.contacts[0].contacts[0].number = this.contactData[0].attributes.phone
    this.contacts[0].contacts[1].number =
      this.contactData[0].attributes.phone_two
    this.contacts[1].contacts[0].number =
      this.contactData[0].attributes.phone_telegram
  },
})
</script>

<style lang="scss" scoped>
.contacts {
  &_wrapper {
    padding: 40px 50px 100px;
    max-width: 1440px;
    margin: 0 auto;
    @include flex-column();
    @include phone {
      padding: 20px 20px 60px;
    }
  }
  .row {
    max-width: 1040px;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap;
    @include flex-row();
  }

  section.row {
    margin-bottom: 120px;
  }

  @include phone {
    section.row {
      margin-bottom: 60px;
    }
  }

  form {
    .row {
      justify-content: flex-start;
      gap: 30px;
      width: 100%;
      .rf-input {
        width: 100%;
        max-width: 420px;
      }
      .rf-textarea {
        width: 100%;
        max-width: 880px;
      }

      @include phone {
        width: 100%;
        gap: 20px;
        flex-direction: column;
      }
    }
    button,
    .rf-btn {
      display: block;
      width: 222px;
      margin: 30px 0;
      font-size: rem(16);

      @include phone {
        width: 100%;
      }
    }
  }

  .col {
    width: 100%;
    @include flex-column();
  }

  .message_card {
    max-width: 420px;
    padding: 22px 46px;
    @include flex-column();

    &__title {
      color: $c-gray;
      margin-bottom: 5px;
    }

    &__text {
      margin-bottom: 7px;
      font-weight: 400;
    }

    @include phone {
      padding: 30px 16px;
      span {
        @include font-size(14px, 20px);
      }
      p {
        @include font-size(16px, 22px);
        &:last-of-type {
          @include font-size(22px, 26px);
        }
      }
    }
  }
}
</style>
