<template>
  <div class="main-info">
    <RFText variant="xs" class="main-info__date"
      >{{ getDate(newsData.attributes.publish_at) }}
    </RFText>
    <div class="main-info__wrap">
      <div class="main-info__wrap__left">
        <RFHeading tag="h2" class="main-info__wrap__left__title">
          {{ newsData.attributes.title }}
        </RFHeading>
        <div
          class="main-info__wrap__left__text text-normalize"
          v-html="newsData.attributes.text"
        ></div>
      </div>
      <Card
        :title="card.title"
        :old-price="card.oldPrice"
        :price="card.price"
        :date="card.date"
        :color="card.color"
        :img="card.img"
        class="main-info__wrap__card"
      />
    </div>
    <div class="main-info__contact">
      <RFText variant="small" class="main-info__contact__text"
        >Остались вопросы? Свяжитесь с нами</RFText
      >
      <div class="main-info__contact__wrap">
        <a :href="`tel:${phoneNormalized(contactData[0].attributes.phone)}`">
          <svg-icon name="phone-blue"></svg-icon>
          <span> {{ contactData[0].attributes.phone }} </span>
        </a>
        <div>
          <a href="https://t.me/kdlolymp_chat"
            ><svg-icon name="telegram"></svg-icon
          ></a>
          <a
            :href="`https://wa.me/${phoneNormalized(
              contactData[0].attributes.phone_telegram
            )}`"
            ><svg-icon name="whatsapp"></svg-icon
          ></a>
          <span> {{ contactData[0].attributes.phone_telegram }}</span>
        </div>
      </div>
    </div>
    <div class="main-info__share">
      <RFText variant="small" class="main-info__share__text"
        >Поделитесь новостью</RFText
      >
      <div class="main-info__share__block">
        <div
          v-for="item in socials"
          :key="item.id"
          class="main-info__share__block__icons"
        >
          <svg-icon :name="item.img"></svg-icon>
          <ShareNetwork
            :network="item.network"
            :url="item.url"
            :title="newsData.attributes.title"
            :description="newsData.attributes.text"
            class="main-info__share__block__icons__text"
            :style="{ color: item.color }"
          >
            {{ item.text }}
          </ShareNetwork>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import Card from 'molecules/Cards/ServiceCard/CurrentCard/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'NewsItemInfo',
  components: {
    RFHeading,
    Card,
    RFText,
  },
  data() {
    return {
      socials: [
        {
          id: 1,
          network: 'facebook',
          url: 'https://www.facebook.com/kdlolymp/',
          text: 'Поделиться',
          img: 'facebook-dark.svg',
          color: '#3B579D',
        },
        {
          id: 2,
          network: 'twitter',
          url: 'https://twitter.com/kdl_olymp',
          text: 'Твитнуть',
          img: 'twitter.svg',
          color: '#31B0ED',
        },
        {
          id: 3,
          network: 'pinterest',
          url: 'KDL Olymp',
          text: 'Поделиться',
          img: 'pinterest.svg',
          color: '#CB1F27',
        },
        {
          id: 4,
          network: 'vk',
          url: 'https://vk.com/kdl_olymp',
          text: 'Репост',
          img: 'vk-dark.svg',
          color: '#5382B6',
        },
        {
          id: 5,
          network: 'telegram',
          url: 'https://t.me/cdlolymp',
          text: 'Отправить',
          img: 'telegram.svg',
          color: '#31B0ED',
        },
      ],
      card: {
        title: 'ПЦР тест на COVID-19 для детей',
        oldPrice: '19800',
        price: '14000',
        date: '1.07 - 31.07',
        img: 'helicobacter-3.png',
        color: 'linear-gradient(99.71deg, #FD9DA0 7.68%, #FEAFA1 57.06%)',
      },
    }
  },
  computed: {
    newsData() {
      return this.$store.getters['news/getNews']
    },
    contactData() {
      return this.$store.getters['contact/getContact']
    },
  },
  methods: {
    phoneNormalized(el) {
      return this.$services.common.phone.phoneNumber(el)
    },
    getDate(str) {
      const date = new Date(str)
      return (
        date.getDate() +
        ' ' +
        this.$services.common.month.monthFormat(date.getMonth()) +
        ' ' +
        date.getFullYear()
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.main-info {
  &__date {
    margin-bottom: 30px;
    color: $c-gray;
    @include tablet {
      margin-bottom: 28px;
      @include font-size(14px, 20px);
    }
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    &__left {
      max-width: 53rem;
      padding-bottom: 20px;
      border-bottom: 1px solid $c-basic-blue;
      @include phone {
        padding-bottom: 36px;
      }
      h2.rf-heading {
        margin: 0 0 20px 0;
        font-weight: 400;
        @include tablet {
          font-weight: 500;
          margin-bottom: 28px;
        }
      }
      &__text ::v-deep {
        p {
          margin-bottom: 20px;
          @include font-size(20px, 28px);
          @include tablet {
            margin-bottom: 15px;
            @include font-size(16px, 22px);
          }
          @include phone {
            @include font-size(14px, 20px);
          }
        }
        h6 {
          margin: 40px 0 0;
          color: $c-gray;
          @include font-size(14px, 20px);
          @include phone {
            margin-top: 24px;
          }
        }
      }
      &__subText {
        color: $c-gray;
        padding-top: 20px;
      }
    }
    &__card {
      min-width: 18rem;
      @include medium-tablet {
        display: none;
      }
    }
  }
  &__contact {
    margin: 20px 0;
    @include phone {
      margin: 36px 0 32px;
    }
    &__text {
      margin-bottom: 10px;
      color: $c-gray;
      @include tablet {
        margin-bottom: 20px;
        @include font-size(16px, 20px);
      }
      @include phone {
        width: 85%;
      }
    }
    &__wrap {
      gap: 27px;
      @include flex-row();
      @include small-phone {
        flex-direction: column;
        gap: 8px;
      }
      a,
      div {
        text-decoration: none;
        align-items: center;
        color: $c-dark;
        @include flex-row();
        @include font-size(16px, 20px);
        @include phone {
          @include font-size(14px, 20px);
        }
        svg {
          height: 18px;
          width: 18px;
          display: flex;
          align-items: center;
          margin-right: 8px;
          @include tablet {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
  &__share {
    &__text {
      margin-bottom: 10px;
      color: $c-gray;
      @include tablet {
        @include font-size(16px, 22px);
      }
    }
    &__block {
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      @include flex-row();

      &__icons {
        border: 1px solid $c-light-gray;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 7px 11px;
        display: flex;
        align-items: center;
        svg {
          width: 20px;
          height: 16px;
          margin-right: 9px;
        }
        &__text {
          text-decoration: none;
          @include font-size(12px, 16px);
        }
      }
    }
  }
}
::v-deep {
  .cards {
    width: 26rem;
  }
  .cards img {
    top: 2rem;
    width: 20.5rem;
    right: -0.5rem;
  }
}
</style>
