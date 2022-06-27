<template>
  <div class="bloodanalysis">
    <RFHeading class="bloodanalysis__title" tag="h5">{{ title }}</RFHeading>
    <table class="bloodanalysis__table">
      <tr>
        <th>Компонент</th>
        <th>Результат</th>
        <th>Референсные значения</th>
        <th class="bloodanalysis__table__comment">Комментарии</th>
      </tr>
      <tr
        v-for="item in data"
        :key="item"
        :class="{ dangerBack: item.comment === 'понижено' }"
      >
        <td>{{ item.var }}</td>
        <td :class="{ dangerText: item.comment === 'понижено' }">
          {{ item.result }}
        </td>
        <td>
          {{ item.reference }}
        </td>
        <td class="bloodanalysis__table__comment">
          {{ item.comment }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'BloodAnalysis',
  components: {
    RFHeading,
  },
  props: {
    results: {
      type: Array,
      default: () => [
        {
          result: '141 г/л',
          reference: '130-160',
          comment: '',
        },
        {
          result: '4,59 10/12/л',
          reference: '4,00-5,00',
          comment: '',
        },
        {
          result: '0,92',
          reference: '0,86-1,05',
          comment: '',
        },
        {
          result: '41,7%',
          reference: '30,0-49,5',
          comment: '',
        },
        {
          result: '91,0 фл',
          reference: '78,0-103,0',
          comment: '',
        },
        {
          result: '30,7 пг',
          reference: '26,0-35,0',
          comment: '',
        },
        {
          result: '13,7%',
          reference: '11,5-14,5',
          comment: '',
        },
        {
          result: '160 10/9/л',
          reference: '180-320',
          comment: 'понижено',
        },
        {
          result: '13,7%',
          reference: '11,5-14,5',
          comment: '',
        },
        {
          result: '67,7%',
          reference: '47,0-72,0',
          comment: '',
        },
      ],
    },
  },
  data() {
    return {
      title: 'Общий анализ крови',
      variables: [
        'Гемоглобин',
        'Эритроциты',
        'Цветной показатель',
        'Гематокрит',
        'Средний объём эритроцида',
        'Среднее содержание Hb в эритроците',
        'Средняя концентрация Hb в эритроците',
        'Тромбоциты',
        'Лейкоциты',
        'Нейтрофилы',
      ],
      data: [],
    }
  },
  mounted() {
    for (let i = 0; i < this.variables.length; i++) {
      const obj = {}
      obj.var = this.variables[i]
      obj.result = this.results[i].result
      obj.reference = this.results[i].reference
      obj.comment = this.results[i].comment
      this.data.push(obj)
    }
  },
}
</script>

<style lang="scss" scoped>
.bloodanalysis {
  .rf-heading--dark {
    margin: 0 0 34px 0;
    @include font-size(28px, 34px, 400);
    @include tablet {
      margin-bottom: 20px;
      @include font-size(24px, 30px, 400);
    }
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
    th {
      color: #31b0ed;
      @include font-size(18px, 22px, 600);
      @include tablet {
        @include font-size(14px, 20px, 600);
      }
      @include small-phone {
        @include font-size(12px, 16px, 600);
      }
    }
    td {
      @include font-size(16px, 20px, 400);
      @include tablet {
        @include font-size(14px, 20px, 400);
      }
      @include small-phone {
        @include font-size(12px, 16px, 400);
      }
    }
    th,
    td {
      padding: 15px 20px;
      text-align: left;
      border: 1px solid #ebf8ff;
      @include tablet {
        padding: 10px 15px;
      }
      @include small-phone {
        padding: 5px;
      }
    }
    tr.dangerBack {
      background: #f2fbff;
    }
    td.dangerText {
      color: red;
    }
    td:first-child,
    th:first-child {
      border-left: 0;
      @include phone {
        border-left: 1px solid #ebf8ff;
      }
    }
    td:last-child,
    th:last-child {
      border-right: 0;
    }
    &__comment {
      @include phone {
        display: none;
      }
    }
  }
}
</style>
