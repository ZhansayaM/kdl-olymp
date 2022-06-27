<template>
  <div class="main__info">
    <div class="main__info__img">
      <img :src="equipment.attributes.image_path" alt="Equipment" />
    </div>
    <div class="main__info__text">
      <RFHeading tag="h2">{{ equipment.attributes.equipment_name }}</RFHeading>
      <div
        class="text-normalize"
        v-html="equipment.attributes.description"
      ></div>
    </div>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'EquipmentInfo',
  components: {
    RFHeading,
  },
  computed: {
    equipment() {
      return this.$store.getters['equipment/getEquipment']
    },
  },
}
</script>

<style lang="scss" scoped>
.main__info {
  margin-top: 46px;
  gap: 40px;
  @include flex-row();
  @include medium-tablet {
    margin-top: 26px;
    gap: 20px;
  }
  @include phone {
    gap: 0;
    flex-direction: column;
    align-items: center;
  }
  &__img {
    width: 420px;
    box-sizing: border-box;
    height: fit-content;
    justify-content: center;
    padding: 20px;
    align-items: center;
    border: 0.901288px solid $c-basic-blue;
    border-radius: 7.2103px;
    @include flex-row();
    @include medium-tablet {
      max-width: 420px;
      width: 100%;
    }
    img {
      height: fit-content;
      width: 378px;
      @include medium-tablet {
        width: 210px;
      }
    }
  }
  &__text {
    h2.rf-heading {
      margin: 0 0 20px 0;
      font-weight: 400;
      @include phone {
        margin: 18px 0;
        @include font-size(28px, 34px, 500);
      }
    }
    ::v-deep {
      h6 {
        margin-bottom: 20px;
        @include font-size(20px, 28px);
        @include medium-tablet {
          @include font-size(18px, 24px);
        }
        @include tablet {
          margin-bottom: 10px;
          @include font-size(16px, 20px);
        }
        @include phone {
          @include font-size(14px, 20px);
        }
      }
      p {
        margin: 40px 0 20px;
        @include phone {
          margin: 28px 0 18px;
        }
      }
    }
  }
}
</style>
