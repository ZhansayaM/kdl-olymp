<template>
  <div class="schedule">
    <RFHeading tag="h2">Расписание работы</RFHeading>
    <table>
      <tr>
        <th>Услуги</th>
        <th>Будни</th>
        <th>Суббота</th>
        <th>Воскресенье</th>
      </tr>
      <tr v-for="item in analysesType" :key="item">
        <td :class="{ inactive: item.weekdays === '' }">{{ item.title }}</td>
        <td :class="{ inactive: item.weekdays === '' }">
          {{ item.weekdays }}
        </td>
        <td :class="{ inactive: item.weekdays === '' }">
          {{ item.weekend1 }}
        </td>
        <td :class="{ inactive: item.weekdays === '' }">
          {{ item.weekend2 }}
        </td>
      </tr>
    </table>
    <ProceduralScheduleSmall />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProceduralScheduleSmall from 'molecules/ProceduralScheduleSmall/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'

/**
 * 'PAGES/Main'
 * @displayName ProceduralRoom
 */
export default Vue.extend({
  name: 'ProceduralRoom',
  components: { ProceduralScheduleSmall, RFHeading },
  data() {
    return {
      analysesType: [],
    }
  },
  created() {
    this.analysesType = this.$store.state.analysesType
  },
})
</script>

<style lang="scss" scoped>
.schedule {
  margin-bottom: 65px;
  h2 {
    margin-bottom: 42px;
    @include font-size(28px, 34px, 400);
    @include tablet {
      margin-bottom: 10px;
      @include font-size(26px, 28px, 400);
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    @include tablet {
      display: none;
    }
    tr {
      th {
        color: #31b0ed;
        text-align: left;
        @include font-size(18px, 22px, 600);
      }
      td.inactive {
        background: #f8f8f8;
        color: #8296a9;
        border-left: 0;
        border-right: 0;
      }
      th,
      td {
        border: 1px solid #daedff;
        padding: 15px 20px;
      }
      td:first-child,
      th:first-child {
        border-left: 0;
      }
      td:last-child,
      th:last-child {
        border-right: 0;
      }
      td {
        @include font-size(16px, 20px, 400);
      }
    }
    tr:first-child {
      th {
        border-top: 0;
      }
    }
    tr:last-child {
      td {
        border-bottom: 0;
      }
    }
  }
}
</style>
