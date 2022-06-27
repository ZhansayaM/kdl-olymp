<template>
  <div class="main__info">
    <RFHeading tag="h2">{{ title }}</RFHeading>
    <div class="main__info__text">
      <p class="main__info__text__title">{{ generalInfo.title }}</p>
      <p
        v-for="item in generalInfo.paragraph"
        :key="item"
        class="main__info__text__paragraph"
      >
        {{ item }}
      </p>
    </div>
    <div class="main__info__equipment">
      <EquipmentCard
        v-for="item in equipments"
        :id="+item.id"
        :key="item.id"
        :img="item.attributes.image_path"
        :title="item.attributes.equipment_name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import EquipmentCard from 'molecules/Cards/EquipmentCard/index.vue'

export default Vue.extend({
  name: 'AboutInnovationsTemplate',
  components: {
    EquipmentCard,
    RFHeading,
  },
  data() {
    return {
      title: 'Инновации и оборудование',
      generalInfo: {
        title: 'Технологическая политика',
        paragraph: [
          'КДЛ ОЛИМП, являясь крупнейшей сетью клинико-диагностических лабораторий в Казахстане осознает свои обязательства перед государством, сотрудниками, общественностью.',
          'Мы стремимся внести свой вклад в развитие здравоохранения Республики Казахстан и изменить жизнь общества к лучшему, придерживаясь традиций социальной ответственности и реализовывая благотворительные и спонсорские проекты.',
        ],
      },
    }
  },
  computed: {
    equipments() {
      return this.$store.getters['equipment/getAllEquipment']
    },
  },
})
</script>

<style lang="scss" scoped>
.main {
  &__info {
    padding: 60px 50px 100px;
    margin: 0 auto;
    max-width: 1440px;
    @include tablet {
      padding: 40px 20px;
    }
    @include phone {
      padding: 28px 16px 56px;
    }
    h2.rf-heading {
      margin: 0 0 40px;
      font-weight: 400;
      @include phone {
        margin-bottom: 28px;
        @include font-size(28px, 34px, 500);
      }
    }
    &__text {
      max-width: 855px;
      &__title {
        margin-bottom: 20px;
        @include font-size(24px, 32px);
        @include small-phone {
          @include font-size(22px, 28px);
        }
      }
      &__paragraph {
        margin-bottom: 20px;
        @include font-size(16px, 24px);
        @include small-phone {
          margin-bottom: 10px;
          @include font-size(14px, 20px);
        }
      }
    }
    &__equipment {
      flex-wrap: wrap;
      padding-top: 10px;
      gap: 20px;
      @include flex-row();
      @include medium-tablet {
        justify-content: space-around;
      }
      @include tablet {
        gap: 15px;
      }
      @include phone {
        padding-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 22px;
      }
    }
  }
}
</style>
