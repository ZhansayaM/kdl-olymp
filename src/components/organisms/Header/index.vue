<template>
  <header class="header">
    <section class="header-top">
      <div class="header-top-contacts">
        <a
          class="header-top-contacts__link-telegram"
          href="https://t.me/kdlolymp_chat"
          >{{ contactData[0].attributes.phone_telegram }}</a
        >
        <a
          class="header-top-contacts__link-phone"
          :href="`tel:${phoneNormalized(contactData[0].attributes.phone)}`"
          >{{
            phoneFormat(phoneNormalized(contactData[0].attributes.phone))
          }}</a
        >
      </div>
      <SelectCity />
    </section>
    <section class="header-bottom">
      <div class="header-bottom__left">
        <div class="header-bottom__left__menu">
          <OlympLogo />
          <HeaderMenu
            :items="headerMenu"
            :options="dropdownLangOptions"
            :select="dropdownSelectedLangOption"
            class="header-bottom__left__menu__header"
            :class="{ open: burgerOpen }"
            @closed="burgerOpen = false"
          />
        </div>
      </div>
      <div class="header-bottom__right">
        <DropdownLang
          v-model="dropdownSelectedLangOption"
          :options="dropdownLangOptions"
        >
          {{ dropdownSelectedLangOption.title }}
        </DropdownLang>
        <ButtonCart
          :img="img.search"
          class="header-bottom__right_search"
          @click="$router.push('/search')"
        />
        <ButtonCart
          :img="img.basket"
          class="header-bottom__right_basket"
          @click="$router.push('/basket')"
        />
        <RFButton
          variant="secondary"
          class="header-bottom__right_results"
          @click="$router.push('/results')"
          >Результаты</RFButton
        >
        <ButtonBase
          icon="user"
          size="small"
          icon-left
          class="header-bottom__right_enter"
          @click="$router.push('/login')"
          >Войти</ButtonBase
        >
        <ButtonBase
          icon="user"
          variant="secondary"
          size="small"
          icon-left
          class="header-bottom__right_user"
          @click="$router.push('/login')"
        />
        <BurgerMenu
          v-click-outside="onClickOutside"
          :img="img.burger"
          class="header-bottom__right_burger"
          @click.native="burgerOpen = !burgerOpen"
        />
      </div>
    </section>
  </header>
</template>

<script>
import OlympLogo from 'atoms/Logo/index.vue'
import HeaderMenu from 'molecules/Header/HeaderMenu/index.vue'
import DropdownLang from 'atoms/Dropdown/DropdownLang/index.vue'
import SelectCity from 'molecules/SelectCity/index.vue'
import ButtonCart from 'molecules/ButtonCart/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import ButtonBase from 'atoms/Button/index.vue'
import BurgerMenu from 'molecules/BurgerMenu/index.vue'

/* Header сайта */

export default {
  name: 'Header',
  components: {
    HeaderMenu,
    DropdownLang,
    SelectCity,
    ButtonCart,
    RFButton,
    ButtonBase,
    OlympLogo,
    BurgerMenu,
  },
  async fetch() {
    await this.$store.dispatch('contact/fetchContact')
  },
  data() {
    return {
      burgerOpen: false,
      dropdownSelectedLangOption: { title: 'RU' },
      dropdownLangOptions: [
        { id: 1, title: 'RU' },
        { id: 2, title: 'QQ' },
        { id: 3, title: 'EN' },
      ],
      headerMenu: [
        {
          id: 1,
          title: 'Акции',
          link: '/promotions',
        },
        {
          id: 2,
          title: 'Анализы и цены',
          link: '/analyzes',
        },
        {
          id: 3,
          title: 'Где сдать?',
          link: '/where-to-take-tests',
        },
        {
          id: 4,
          title: 'Выезд на дом',
          link: '/house-call',
        },
        {
          id: 5,
          title: 'О нас',
          link: '/about',
        },
        {
          id: 6,
          title: 'Франшиза',
          link: '/franchise',
        },
        {
          id: 7,
          title: 'Контакты',
          link: '/contacts',
        },
      ],
      img: {
        basket: 'cart',
        search: 'loop-blue',
        burger: 'burger',
      },
    }
  },
  computed: {
    contactData() {
      return this.$store.getters['contact/getContact']
    },
  },
  methods: {
    onClickOutside() {
      setTimeout(() => (this.burgerOpen = false), 100)
    },
    phoneNormalized(el) {
      return this.$services.common.phone.phoneNumber(el)
    },
    phoneFormat(el) {
      return this.$services.common.phone.phoneNumberFormat(el)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: $c-light-blue;
  max-width: 1440px;
  max-height: 130px;
  justify-content: flex-start;
  padding-bottom: 35px;
  @include flex-column();
  @include tablet {
    padding: 15px 0;
  }

  &-top {
    max-width: 1440px;
    width: 100%;
    padding-top: 15px;
    justify-content: flex-end;
    @include flex-row();
    @include wide-laptop {
      padding-right: 55px;
    }
    @include small-laptop {
      padding-right: 20px;
    }
    @include tablet {
      display: none;
    }

    &-contacts {
      > a {
        text-decoration: none;
        color: $c-dark;
      }
      &__link {
        height: 100%;
        align-content: center;
        align-items: center;
        @include font-size(16px, 19px);

        &-telegram {
          padding-right: 25px;
          &::before {
            content: '';
            display: inline-block;
            background: no-repeat url('@/assets/icons/telegram.svg');
            width: 20px;
            height: 16px;
            margin-bottom: -1px;
            margin-right: 5px;
          }
        }
        &-phone {
          margin-right: 22px;
          &::before {
            content: '';
            display: inline-block;
            background: no-repeat url('@/assets/icons/phone-blue.svg');
            width: 15px;
            height: 15px;
            margin-bottom: -2px;
            margin-right: 5px;
          }
        }
      }
    }
  }

  &-bottom {
    width: 100%;
    justify-content: space-between;
    @include wide-laptop {
      justify-content: center;
    }
    @include medium-tablet {
      justify-content: space-between;
    }

    @include flex-row();

    &__left {
      padding-right: 36px;
      @include wide-laptop {
        padding-right: 25px;
      }
      @include small-laptop {
        padding-right: 15px;
      }
      @include small-phone {
        padding-right: 0;
      }
      &__menu {
        &__header {
          @include medium-tablet {
            display: none;
          }
          &.open {
            @include medium-tablet {
              display: inline-block;
            }
          }
        }

        padding: 10px 0;
        background: $c-light-blue;
        align-items: center;
        @include flex-row();

        @include laptop {
          padding-left: 20px;
        }
        @include phone {
          padding: 0 0 0 20px;
        }
        @include small-phone {
          padding: 0 0 0 7px;
        }
      }

      justify-content: flex-start;
      align-items: center;
    }
    &__right {
      align-items: center;
      @include flex-row();
      @include small-laptop {
        margin-right: 20px;
      }
      &_results {
        @include phone {
          order: 1;
        }
      }
      &_search {
        @include phone {
          order: 2;
        }
      }
      &_enter {
        @include tablet {
          height: 28px;
        }
        @include phone {
          display: none !important;
        }
      }
      &_basket {
        @include phone {
          order: 4;
        }
      }
      &_burger {
        @include phone {
          order: 5;
        }
      }
      &_user {
        display: none !important;
        @include phone {
          display: flex !important;
          order: 3;
        }
      }
    }
  }

  // ---------------  /header-menu styles -------------
}

::v-deep .select-city {
  max-width: 220px;
  &__btn {
    text-align: end !important;
    padding: 0 15px 0 0 !important;
    background-position: 100% 60% !important;
  }
  &__list {
    margin-top: 8px;
  }
}

::v-deep .rf-btn {
  max-width: 120px !important;
  height: 38px !important;
  padding: 5px 10px !important;
  border: 1px solid $c-primary !important;
  box-sizing: border-box !important;
  border-radius: 4px !important;
  margin-left: 10px !important;
  @include font-size(16px !important, 24px !important);
  @include tablet {
    height: 28px !important;
    padding: 2px 10px !important;
    @include font-size(14px !important, 16px !important);
  }
  @include small-phone {
    margin-left: 5px !important;
    padding: 2px !important;
  }

  &--secondary {
    background: $c-light-blue !important;
    color: $c-primary !important;
    // &:hover {
    //   color: $c-secondary-hover;
    // }
    // &:active {
    //   color: $c-secondary-active;
    // }
  }
}

::v-deep .button-base {
  margin-left: 10px;
  @include small-phone {
    margin-left: 5px;
  }
  &__small {
    max-width: 96px;
    max-height: 38px;
  }
  &__primary {
    background-color: $c-primary;
  }
}
</style>
