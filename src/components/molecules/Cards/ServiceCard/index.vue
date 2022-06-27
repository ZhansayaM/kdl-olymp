<template>
  <div :class="['service-card', disabled && 'disabled']">
    <div v-if="isClose" class="service-card__close">
      <svg-icon name="close-gray" class="service-card__close-icon"></svg-icon>
    </div>
    <div class="service-card__content">
      <p class="service-card__content-title">{{ service.title }}</p>

      <p class="service-card__content-desc">{{ service.desc }}</p>

      <div class="service-card__content-tags">
        <AlertTag
          v-if="isAlert"
          class="service-card__content-tags-alert"
          :disabled="disabled"
          >Необходимо записаться на приём</AlertTag
        >
        <Tag :disabled="disabled">Tag 1</Tag>
        <Tag :disabled="disabled">Tag 2</Tag>
        <Tag :disabled="disabled">Tag 3</Tag>
      </div>
    </div>

    <div class="service-card__actions">
      <div class="service-card__actions-prices">
        <p class="old-price">{{ (+service.old_price).toLocaleString() }} ₸</p>
        <p class="price">{{ (+service.price).toLocaleString() }} ₸</p>
      </div>

      <template v-if="!isButton">
        <template v-if="!isRecover">
          <ButtonBase
            :disabled="disabled"
            :class="['service-card__actions-btn', { 'btn-active': isBuy }]"
            @click="isBuy = !isBuy"
            >{{ isBuy ? 'Добавлено' : 'В корзину' }}</ButtonBase
          >
        </template>
        <template v-else>
          <ButtonBase
            :disabled="disabled"
            class="service-card__actions-btn btn-active"
            >Восстановить</ButtonBase
          >
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ButtonBase from 'atoms/Button/index.vue'
import Tag from 'atoms/Tag/index.vue'
import AlertTag from 'atoms/Tag/AlertRecordTag/index.vue'

/**
 * MOLECULES/ServiceCard
 * @displayName ServiceCard
 */
export default Vue.extend({
  name: 'ServiceCard',
  components: { ButtonBase, Tag, AlertTag },
  props: {
    service: {
      type: Object,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Отображение кнопки "Восстановить"
     */
    isRecover: {
      type: Boolean,
      default: false,
    },
    /**
     * Отображение иконки закрытия
     */
    isClose: {
      type: Boolean,
      default: false,
    },
    /**
     * Отображение тега "нужна запись"
     */
    isAlert: {
      type: Boolean,
      default: false,
    },
    /**
     * Отображение кнопки
     */
    isButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isBuy: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.service-card {
  position: relative;
  max-width: 290px;
  width: 100%;
  background: $c-light-blue;
  border-radius: 10px;
  gap: 0 30px;
  padding: 14px 16px;

  &__close {
    position: absolute;
    top: 14px;
    right: 13px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: $c-white;

    &-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 14px;
      height: 14px;
    }
  }

  @include medium-tablet {
    grid-template-columns: 1fr;
    gap: 20px 0;
    padding: 14px 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;

    &-title {
      color: $c-dark;
      max-width: 210px;
      @include font-size(18px, 26px);

      @include medium-tablet {
        font-size: 18px;
        line-height: 26px;
      }
    }

    &-desc {
      font-size: 14px;
      line-height: 20px;
      color: $c-gray;
      margin-top: 4px;
    }

    &-tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;

      &-alert {
        margin-bottom: 10px;
      }
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    @include medium-tablet {
      margin-left: 10px;
    }

    &-prices {
      display: inline-flex;
      align-items: center;
      margin-bottom: 20px;

      .price {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: $c-dark;
        white-space: nowrap;
      }

      .old-price {
        font-size: 20px;
        line-height: 32px;
        color: $c-dark;
        opacity: 0.5;
        text-decoration-line: line-through;
        white-space: nowrap;
        margin-right: 10px;
      }
    }

    ::v-deep .button-base {
      &:disabled {
        background: white;
        border-color: white;
        color: $c-gray;
      }
    }

    &-btn {
      @include font-size(14px, 20px);
    }
  }

  &.disabled {
    background: $c-light-gray;

    p {
      color: $c-gray;
    }
  }
}

.btn-active {
  background: $c-white;
  color: $c-gray;
  border: none;

  &:hover {
    background: $c-white;
  }
}
</style>
