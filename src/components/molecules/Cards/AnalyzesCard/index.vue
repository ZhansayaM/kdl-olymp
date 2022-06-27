<template>
  <div :class="['analyzes-card', disabled && 'disabled']">
    <div class="analyzes-card__content">
      <nuxt-link
        class="analyzes-card__content-title"
        :to="`/Analyzes/analyzes-1`"
      >
        {{ service.title }}
      </nuxt-link>

      <div class="analyzes-card__content-tags">
        <Tag v-for="tag in service.tags" :key="tag.id" :disabled="disabled">{{
          tag.title
        }}</Tag>
      </div>

      <!-- Additional custom content --->
      <slot />
    </div>

    <div class="analyzes-card__actions">
      <div class="analyzes-card__actions-prices">
        <p v-if="service.old_price" class="old-price">
          {{ (+service.old_price).toLocaleString() }} ₸
        </p>
        <p class="price">{{ (+service.price).toLocaleString() }} ₸</p>
        <Icons
          v-if="close"
          class="close_btn"
          :clickable="true"
          variant="close-gray"
          @click="$emit('close')"
        />
      </div>

      <template v-if="!isButton">
        <ButtonBase
          :disabled="disabled"
          :class="['analyzes-card__actions-btn', { 'btn-active': isBuy }]"
          @click="isBuy = !isBuy"
          >{{ isBuy ? 'Добавлено' : 'В корзину' }}</ButtonBase
        >
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBase from 'atoms/Button/index.vue'
import Tag from 'atoms/Tag/index.vue'
import Icons from 'atoms/Icons/index.vue'

/**
 * MOLECULES/AnalyzesCard
 * @displayName AnalyzesCard
 */
export default Vue.extend({
  name: 'AnalyzesCard',
  components: { ButtonBase, Tag, Icons },
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
     * Отображение кнопки
     */
    isButton: {
      type: Boolean,
      default: false,
    },
    close: {
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
.analyzes-card {
  position: relative;
  max-width: 950px;
  width: 100%;
  min-height: 154px;
  background: $c-light-blue;
  border-radius: 10px;
  padding: 30px;
  cursor: pointer;
  justify-content: space-between;
  @include flex-row();
  @include medium-tablet {
    padding: 20px;
  }
  @include phone {
    display: block;
  }
  @include small-phone {
    padding: 16px;
  }
  &__content {
    max-width: 650px;
    @include flex-column();

    &-title {
      color: $c-dark;
      text-decoration: none;
      width: 100%;
      @include font-size(24px, 32px);
      @include small-laptop {
        margin: 0;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      @include medium-tablet {
        @include font-size(18px, 26px);
      }
      @include phone {
        width: calc(100% - 20px);
      }
      &:hover {
        text-decoration: underline;
      }
    }

    &-tags {
      width: 100%;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px;
      @include flex-row();

      &-alert {
        margin-bottom: 10px;
      }
    }
  }

  &__actions {
    align-items: flex-end;
    @include flex-column();
    @include medium-tablet {
      margin-left: 10px;
    }
    @include phone {
      margin-top: 10px;
    }
    @include small-phone {
      align-items: baseline;
      margin-left: 0;
      margin-top: 20px;
    }
    &-prices {
      display: inline-flex;
      align-items: center;
      margin-bottom: 20px;
      @include small-phone {
        margin-bottom: 8px;
      }
      .price {
        color: $c-dark;
        white-space: nowrap;
        @include font-size(24px, 32px, 600);
        @include phone {
          @include font-size(22px, 26px);
        }
      }

      .old-price {
        color: $c-dark;
        opacity: 0.5;
        text-decoration-line: line-through;
        white-space: nowrap;
        @include font-size(20px, 32px);
        @include phone {
          @include font-size(18px, 20px);
        }
      }
      :not(:first-child) {
        margin-left: 10px;
      }
    }

    ::v-deep .button-base {
      &:disabled {
        background: $c-white;
        border-color: $c-white;
        color: $c-gray;
      }
    }

    &-btn {
      width: 140px;
      @include font-size(18px, 28px);
      @include phone {
        width: 100px;
        @include font-size(16px, 18px);
      }
      @include small-phone {
        width: 100%;
      }
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

.close_btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}
</style>
