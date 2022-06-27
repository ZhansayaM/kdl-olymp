<template>
  <OverlayBase :show="show">
    <div class="content">
      <CardBase>
        <slot name="content"></slot>
      </CardBase>
      <Icons
        variant="close-modal"
        :clickable="true"
        class="close"
        @click="close"
      ></Icons>
    </div>
  </OverlayBase>
</template>

<script>
import Vue from 'vue'
import OverlayBase from 'atoms/OverlayBase/index.vue'
import CardBase from 'atoms/CardBase/index.vue'
import Icons from 'atoms/Icons/index.vue'

export default Vue.extend({
  name: 'Modal',
  components: {
    OverlayBase,
    CardBase,
    Icons,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>

<style lang="scss" scoped>
.overlay.hide {
  display: none;
}
.content {
  align-items: flex-start;
  width: 80%;
  justify-content: center;
  @include flex-row();
  .card_base {
    max-height: 90vh;
    width: 100%;
    @include phone {
      margin: 0 auto;
    }
    &::-webkit-scrollbar {
      width: 5px;
      background-color: lighten($c-gray, 40%);
    }
    &::-webkit-scrollbar-thumb {
      background-color: $c-gray;
      border-radius: 20px;
    }
  }

  .close {
    margin: 0 10px;
    @include phone {
      width: 30px;
      height: 30px;
      margin: 10px 0;
    }
  }

  @include phone {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
}
</style>
