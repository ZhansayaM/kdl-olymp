<template>
  <div :class="['discounts-card']">
    <div class="discounts-card__content">
      <img :src="back" alt="discount card back image" class="back" />
      <img :src="front" alt="discount card front image" class="front" />
    </div>

    <div class="discounts-card__actions">
      <ButtonBase
        :disabled="disabled"
        class="discounts-card__actions-btn"
        @click="toAcquireCard"
      >
        Получить дисконтную карту
      </ButtonBase>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBase from 'atoms/Button/index.vue'

/**
 * MOLECULES/DiscountCard
 * @displayName DiscountCard
 */
export default Vue.extend({
  name: 'DiscountCard',
  components: { ButtonBase },
  props: {
    back: {
      type: String,
      default: '',
    },
    front: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    toAcquireCard() {
      this.$router.push({
        name: 'discount-system-acquire',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.discounts-card {
  width: 420px;
  background: $c-light-blue;
  border-radius: 8px;
  padding: 50px 30px 30px;
  align-items: center;
  @include flex-column();
  @include medium-tablet {
    padding: 20px;
  }
  @include phone {
    width: 100%;
    padding: 0;
    background: none;
  }
  &__content {
    position: relative;
    margin-right: 30px;
    @include phone {
      margin-right: 0;
      align-items: center;
      gap: 7px;
      @include flex-column();
    }
    img {
      width: 100%;
      max-width: 270px;
      object-fit: contain;
      filter: drop-shadow(0 4px 10px rgba(0, 98, 146, 0.17));
      @include phone {
        filter: none;
        max-width: 100%;
      }
    }
    .back {
      position: absolute;
      @include phone {
        position: static;
      }
    }
    .front {
      position: relative;
      transform: translate(30px, 25px);
      @include phone {
        transform: none;
      }
    }
  }

  &__actions {
    margin-top: 65px;
    align-items: flex-end;
    width: 100%;
    @include phone {
      margin-top: 36px;
    }
    &-btn {
      width: 100%;
      @include font-size(16px, 30px);
      @include phone {
        @include font-size(16px, 22px);
      }
    }
  }
}
</style>
