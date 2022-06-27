<template>
  <div class="search-card">
    <RFHeading tag="h4"> {{ title }} </RFHeading>
    <div class="search-card__inputs">
      <RFInput
        v-for="(item, index) in inputData"
        :id="item.id"
        :key="index"
        :min="item.minVal"
        :is-error="item.error"
        :type="item.type"
        :is-only-text="item.onlyText"
        @change="onChange(item, $event)"
      >
        <template #label>
          {{ item.label }}
        </template>
        <template #message> Неправильное значение </template>
      </RFInput>
    </div>
    <Button class="search-card__btn"> {{ btn }} </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFInput from 'atoms/RFInput/index.vue'

/**
 * 'Molecules/Cards/ResultsSearch'
 * @displayName ResultsSearch
 */
export default Vue.extend({
  name: 'ResultsSearch',
  components: { RFHeading, RFInput },
  data() {
    return {
      title: 'Поиск результатов',
      startEntry: '',
      endEntry: '',
      inputData: [
        {
          id: 'name',
          label: 'Имя',
          type: 'text',
          onlyText: true,
          error: false,
          val: '',
          minVal: '',
        },
        {
          id: 'surname',
          label: 'Фамилия',
          type: 'text',
          val: '',
          minVal: '',
          onlyText: true,
          error: false,
        },
        {
          id: 'number',
          type: 'number',
          label: 'Номер заявки',
          val: '',
          minVal: '',
          onlyText: false,
          error: false,
        },
        {
          id: 'start',
          type: 'date',
          label: 'Начало периода',
          val: '',
          minVal: '',
          onlyText: false,
          error: false,
        },
        {
          id: 'end',
          type: 'date',
          label: 'Конец периода',
          val: '',
          minVal: '',
          onlyText: false,
          error: false,
        },
      ],
      btn: 'Найти',
    }
  },
  methods: {
    onChange(element, val) {
      element.val = val
      if (element.id === 'end' && element.val < this.inputData[3].val)
        element.error = true
      else element.error = false
    },
  },
})
</script>

<style lang="scss" scoped>
.search-card {
  width: 100%;
  padding: 42px 40px 46px 40px;
  background: $c-disabled-bg;
  border-radius: 8px;
  @include tablet {
    padding: 20px 16px;
  }
  h4.rf-heading {
    margin: 0 0 36px 0;
    font-weight: 400;
    @include tablet {
      margin-bottom: 25px;
    }
    @include phone {
      margin-bottom: 18px;
    }
  }
  &__inputs {
    gap: 20px;
    flex-wrap: wrap;
    @include flex-row();
    @include phone {
      gap: 18px;
    }
    .rf-input {
      width: 19rem;
      @include font-size(16px, 24px);
      @include tablet {
        width: 14rem;
      }
      @include phone {
        width: 100%;
        @include font-size(14px, 20px);
      }
    }
  }
  &__btn {
    text-align: center;
    color: $c-white;
    padding: 9px 54.5px;
    background: $c-primary;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 44px;
    @include font-size(18px, 30px);
    @include phone {
      margin-top: 24px;
      width: 100%;
      @include font-size(16px, 22px);
    }
  }
}
</style>
