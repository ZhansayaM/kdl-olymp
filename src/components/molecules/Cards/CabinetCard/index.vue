<template>
  <section class="flex-ui">
    <div
      v-for="item in items"
      :key="item.id"
      :class="{ 'card-padding': isMiddle, 'cabinet-cards': true }"
    >
      <div class="cabinet-cards__top">
        <RFHeading class="cabinet-cards__title" tag="h3">{{
          item.title
        }}</RFHeading>
        <p
          v-if="item.isDiscount && !isMaking && isDiscount"
          class="cabinet-cards__discount"
        >
          {{ item.discount }}
        </p>
      </div>
      <p class="cabinet-cards__address">
        {{ item.address }}
      </p>
      <p class="cabinet-cards__tel">{{ item.tel }}</p>
      <template v-if="isMiddle || isBig">
        <section
          v-if="item.worktime && !isMaking"
          class="cabinet-cards__worktime"
        >
          <p
            v-for="(value, index) in item.worktime"
            :key="index"
            class="cabinet-cards__time"
          >
            {{ value }}
          </p>
        </section>
      </template>
      <template v-if="isBig">
        <section v-if="item.tags" class="cabinet-cards__middle">
          <Tag
            v-for="(value, index) in item.tags"
            :key="index"
            class="cabinet-cards__tag"
          >
            {{ value }}
          </Tag>
          <template v-if="!isMaking">
            <section class="cabinet-cards__icons">
              <div
                v-for="(value, index) in item.icons"
                :key="index"
                class="cabinet-cards__icons-list"
              >
                <svg-icon :name="value" class="cabinet-cards__icon"></svg-icon>
              </div>
            </section>
            <div class="cabinet-cards__bottom">
              <Button
                class="cabinet-cards__bottom-btn"
                @click="isMaking = !isMaking"
                >Выбрать</Button
              >
            </div>
          </template>
          <template v-else>
            <section class="cabinet-cards__input">
              <div class="cabinet-cards__input-data">
                <DropdownBase
                  v-model="dropdownSelectedOption"
                  label="Выберите дату:"
                  :options="dropdownOptions"
                >
                  {{ 'Placeholder' }}
                </DropdownBase>
              </div>
              <div class="cabinet-cards__input-time">
                <DropdownBase
                  v-model="dropdownSelectedOption"
                  label="Выберите время"
                  :options="dropdownTimeOptions"
                >
                  {{ dropdownSelectedOption.title || 'Выберите время' }}
                </DropdownBase>
              </div>
            </section>
            <div class="cabinet-cards__bottom">
              <Button class="cabinet-cards__bottom-btn"
                >Записаться на приём</Button
              >
            </div>
            <p class="cabinet-cards__bottom-text" @click="isMaking = !isMaking">
              Выбрать другой процедурный кабинет
            </p>
          </template>
        </section>
      </template>
    </div>
  </section>
</template>

<script>
import Button from 'atoms/Button/index.vue'
import Tag from 'atoms/Tag/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import DropdownBase from 'atoms/Dropdown/index.vue'

export default {
  name: 'CabinetCard',
  components: {
    Button,
    Tag,
    RFHeading,
    DropdownBase,
  },
  props: {
    items: {
      type: Array,
      default: () => [{}],
    },
    /**
     * Карточка только с адресом и телефоном по умолчанию
     */
    /**
     * Отображение скидки
     */
    isDiscount: {
      type: Boolean,
      default: false,
    },
    /**
     * Карточка только с адресом и телефоном + время работы
     */
    isMiddle: {
      type: Boolean,
      default: false,
    },
    /**
     * Полная карточка для записи
     */
    isBig: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMaking: false,
      dropdownSelectedOption: { title: '9.00' },
      dropdownTimeOptions: [
        { id: 1, title: '10.00' },
        { id: 2, title: '11.00' },
        { id: 3, title: '12.00' },
      ],
      dropdownOptions: [{}],
    }
  },
}
</script>

<style lang="scss" scoped>
.cabinet-cards {
  max-width: 320px;
  max-height: 560px;
  height: 100%;
  border-radius: 10px;
  background: $c-light-blue;
  padding: 24px 16px 36px 16px;
  color: $c-dark;

  &__top {
    padding-bottom: 10px;
    > h3 {
      margin: 0;
      display: inline-block;
      max-width: 290px;
      @include font-size(22px, 27px, 400);
    }
  }

  &__discount {
    padding-top: 4px;
    color: $c-primary;
    @include font-size(16px, 22px);
  }

  &__address {
    @include font-size(14px, 20px);

    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 14px;
      padding-right: 12px;
      background: url('@/assets/icons/map-marker-little.svg') no-repeat;
    }
  }

  &__tel {
    padding-top: 6px;
    @include font-size(14px, 20px);

    &::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      padding-right: 12px;
      background: url('@/assets/icons/phone-blue.svg') no-repeat;
    }
  }

  &__worktime {
    > p:first-of-type {
      padding-top: 6px;
      &::before {
        content: '';
        display: inline-block;
        width: 13px;
        height: 13px;
        padding-right: 11px;
        background: url('@/assets/icons/calendar-blue.svg') no-repeat;
      }
    }
    > p:last-of-type {
      padding-left: 28px;
    }
  }

  &__time {
    @include font-size(14px, 20px);
  }

  &__middle {
    padding-top: 20px;
  }

  &__tag {
    margin-top: 6px;
    @include font-size(14px, 20px);
  }

  &__icons {
    padding-top: 20px;
    @include flex-row();

    &-list {
      height: 32px;
      background: $c-basic-blue;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      width: 42px;
      @include flex-row();

      > svg {
        max-width: 48px;
        width: 100%;
        height: 100%;
      }

      &:last-child {
        width: 62px;

        > svg {
          max-width: 60px;
          width: 100%;
          height: 100%;
        }
      }
    }

    > div + div {
      margin-left: 6px;
    }
  }

  &__bottom {
    &-btn {
      margin-top: 20px;
      max-width: 285px;
      width: 100%;
      max-height: 38px;
      @include font-size(14px, 20px);
    }

    &-text {
      padding-top: 18px;
      cursor: pointer;
      display: inline-block;
      color: $c-primary;
      text-align: center;
      text-decoration: underline;
      @include font-size(16px, 24px);
    }
  }

  &__input {
    padding-top: 20px;

    &-time {
      padding-top: 20px;
    }
  }
}

.card-padding {
  padding: 18px 24px !important;
}

::v-deep {
  .wrapper .label {
    @include font-size(14px, 20px);
  }
  .drop-down {
    background: $c-white;
    > span {
      color: $c-dark !important;
      @include font-size(16px !important, 22px !important);
    }
  }
  .cabinet-cards__input-data .wrapper .drop-down {
    &::after {
      width: 20px;
      height: 22px;
      margin-left: 10px;
      @include bg('~assets/icons/calendar-gray.svg', center center/cover);
    }
  }
  .cabinet-cards__input-data .open .drop-down {
    &::after {
      transform: none;
    }
  }
}
.flex-row {
  @include flex-row();

  > .cards + .cards {
    margin-left: 30px;
  }
}
</style>
