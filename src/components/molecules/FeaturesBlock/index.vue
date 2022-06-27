<template>
  <div class="features">
    <div class="features__card">
      <img
        :src="require('icons/features-analyze.svg')"
        alt="Анализы"
        class="features__card__img"
      />
      <RFText variant="small">
        Широкий спектр медицинских анализов, достоверный и своевременный
        результат
      </RFText>
    </div>
    <div class="features__card">
      <img
        :src="require('icons/features-lab.svg')"
        alt="Лабаратории"
        class="features__card__img"
      />
      <RFText variant="small">
        Профессиональное лабораторное оборудование мировых производителей
      </RFText>
    </div>
    <div class="features__card">
      <img
        :src="require('icons/features-staff.svg')"
        alt="Персонал"
        class="features__card__img"
      />
      <RFText variant="small"> Квалифицированный персонал </RFText>
    </div>
    <div class="features__card">
      <img
        :src="require('icons/features-iso.svg')"
        alt="ISO-15189"
        class="features__card__img"
      />
      <RFText variant="small">
        Международный контроль качества и лидерство в области аккредитации
        лабораторий по ISO 15189
      </RFText>
    </div>
    <div class="features__card">
      <img
        :src="require('icons/features-independency.svg')"
        alt="Независимость"
        class="features__card__img"
      />
      <RFText variant="small">
        Широкий спектр медицинских анализов, достоверный и своевременный
        результат
      </RFText>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFText from 'atoms/RFText/index.vue'
export default Vue.extend({
  name: 'FeaturesBlock',
  components: {
    RFText,
  },
})
</script>

<style lang="scss" scoped>
.features {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-bottom: 60px;
  @include tablet {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @include phone {
    grid-template-columns: 1fr;
    grid-gap: 24px;
    margin-bottom: 28px;
    grid-template-rows: auto;
  }
  &__card {
    flex: 1;
    p {
      @include phone {
        @include font-size(14px, 20px);
      }
    }
    &__img {
      height: 65px;
      margin-bottom: 20px;
      @include phone {
        margin-bottom: 18px;
      }
    }
  }
}
</style>
