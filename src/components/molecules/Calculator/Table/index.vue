<template>
  <RFTable>
    <thead>
      <tr>
        <th>{{ tableData.headings.heading }}</th>
        <th>{{ tableData.headings.day }}</th>
        <th>{{ tableData.headings.month }}</th>
        <th>{{ tableData.headings.oneMonth }}</th>
        <th>{{ tableData.headings.income }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in tableData.body"
        :key="index"
        :class="[row.total && 'highlight']"
      >
        <td v-if="row.total" class="gap"></td>
        <td
          :data-label="tableData.headings.heading"
          :class="[
            !row.total && 'no-before-content',
            tableMobileStyles[row.section]['heading'],
          ]"
        >
          {{ row.heading }}
        </td>
        <td
          :data-label="tableData.headings.day"
          :class="[
            'align-right',
            !row.total && 'no-before-content',
            tableMobileStyles[row.section]['day'],
          ]"
        >
          {{ row.day }}
        </td>
        <td
          :data-label="tableData.headings.month"
          :class="[
            'align-right',
            !row.total && 'no-before-content',
            tableMobileStyles[row.section]['month'],
          ]"
        >
          {{ row.month }}
        </td>
        <td
          :data-label="tableData.headings.oneMonth"
          :class="[
            'align-right',
            !row.total && 'no-before-content',
            tableMobileStyles[row.section]['oneMonth'],
          ]"
        >
          {{ row.oneMonth }}
        </td>
        <td
          :data-label="tableData.headings.income"
          :class="[
            'align-right',
            !row.total && 'no-before-content',
            tableMobileStyles[row.section]['income'],
          ]"
        >
          {{ row.income }}
        </td>
      </tr>
    </tbody>
  </RFTable>
</template>

<script>
import Vue from 'vue'
import RFTable from 'atoms/RFTable/index.vue'

export default Vue.extend({
  name: 'CalculatorTable',
  components: {
    RFTable,
  },
  data() {
    return {
      tableData: {
        headings: {
          heading: 'Статьи доходов и расходов франчайзи',
          day: 'В день',
          month: 'Ежемесячно',
          oneMonth: '1 месяц',
          income: 'Доходность за выбранный период',
        },
        body: [
          {
            section: 1,
            total: true,
            heading: 'Итого доходы франчайзи (забор + анализы)',
            day: '45 999',
            month: '1 149 975',
            oneMonth: '',
            income: '2 384 588',
          },
          {
            section: 2,
            total: true,
            heading: 'Итого текущие расходы франчайзи',
            day: '',
            month: '812 870',
            oneMonth: '',
            income: '860 562',
          },
          {
            section: 2,
            heading: 'Коммунальные расходы',
            day: '',
            month: '35 000',
            oneMonth: '',
            income: '35 000',
          },
          {
            section: 2,
            heading: 'Расходы по связи',
            day: '',
            month: '7 000',
            oneMonth: '',
            income: '7 000',
          },
          {
            section: 2,
            heading: 'Фонд оплаты труда',
            day: '',
            month: '340 000',
            oneMonth: '',
            income: '340 000',
          },
          {
            section: 2,
            heading: 'Налоги персоналу',
            day: '',
            month: '35 870',
            oneMonth: '',
            income: '35 870',
          },
          {
            section: 2,
            heading: 'Материальные затраты',
            day: '',
            month: '0',
            oneMonth: '',
            income: '47 692',
          },
          {
            section: 2,
            heading: 'Аренда помещения',
            day: '',
            month: '280 000',
            oneMonth: '',
            income: '280 000',
          },
          {
            section: 2,
            heading: 'Расходы на рекламу',
            day: '',
            month: '100 000',
            oneMonth: '',
            income: '100 000',
          },
          {
            section: 2,
            heading: 'Канцелярские и хоз. расходы',
            day: '',
            month: '8 000',
            oneMonth: '',
            income: '8 000',
          },
          {
            section: 2,
            heading: 'Услуги банка',
            day: '',
            month: '7 000',
            oneMonth: '',
            income: '7 000',
          },
          {
            section: 3,
            total: true,
            heading: 'Итого первоначальные вложения франчайзи',
            day: '',
            month: '',
            oneMonth: '4 405 606',
            income: '',
          },
          {
            section: 3,
            heading: 'Паушальный взнос',
            day: '',
            month: '166 667',
            oneMonth: '',
            income: '166 666',
          },
          {
            section: 3,
            heading: 'Ремонт ПК',
            day: '',
            month: '1 190 000',
            oneMonth: '',
            income: '',
          },
          {
            section: 3,
            heading: 'Оснащение ПК',
            day: '',
            month: '3 048 939',
            oneMonth: '',
            income: '',
          },
          {
            section: 4,
            total: true,
            heading: 'Прибыль франчайзи',
            day: '',
            month: '337 105',
            oneMonth: '-422 000',
            income: '1 524 026',
          },
          {
            section: 4,
            heading: 'Денежный поток',
            day: '',
            month: '337 105',
            oneMonth: '-4 827 606',
            income: '1 357 361',
          },
          {
            section: 4,
            heading: 'Кумулятивный денежный поток',
            day: '',
            month: '-4 827 606',
            oneMonth: '',
            income: '-1 338 788',
          },
        ],
      },
      tableMobileStyles: {
        1: {
          heading: 'cell-block',
          day: 'cell',
          month: 'cell',
          oneMonth: 'cell-none',
          income: 'cell-block',
        },
        2: {
          heading: 'cell-block',
          day: 'cell-none',
          month: 'cell',
          oneMonth: 'cell-none',
          income: 'cell',
        },
        3: {
          heading: 'cell-none',
          day: 'cell-none',
          month: 'cell-none',
          oneMonth: 'cell-none',
          income: 'cell-none',
        },
        4: {
          heading: 'cell-block',
          day: 'cell-none',
          month: 'cell',
          oneMonth: 'cell',
          income: 'cell-block',
        },
      },
    }
  },
})
</script>

<style lang="scss" scoped>
table.rf_table {
  margin-bottom: 60px;

  .align-right {
    text-align: right;
  }

  tr.highlight {
    @include phone {
      background-color: white;
    }
  }

  @include phone {
    td {
      text-align: left;
      border-left: 1px solid $c-light-blue;

      &:not(:first-of-type) {
        text-align: left;
      }
      &.no-before-content::before {
        height: 0;
        color: transparent;
      }
    }

    td:last-of-type {
      border-right: 1px solid $c-light-blue;
    }

    .cell-block {
      display: block;
    }
    .cell {
      display: table-cell;
      width: 50%;
    }
    .cell-none {
      display: none;
    }
  }

  .gap {
    display: none;
    border: none !important;

    @include phone {
      display: block;
      background-color: white;
    }
  }
}
</style>
