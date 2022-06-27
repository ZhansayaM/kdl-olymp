<template>
  <table class="rf_table">
    <slot></slot>
  </table>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'RFTable',
})
</script>

<style lang="scss" scoped>
table.rf_table {
  width: 100%;
  border-collapse: collapse;
  thead {
    th {
      color: $c-primary;
      @include font-size(18px, 22px, 600);
      @include tablet {
        @include font-size(14px, 20px, 600);
      }
    }
    @include phone {
      display: none;
    }
  }
  tbody {
    td {
      @include font-size(16px, 20px, 400);
      @include tablet {
        @include font-size(14px, 20px, 400);
      }
    }
  }
  th,
  td {
    padding: 15px 20px;
    text-align: left;
    border-right: 1px solid $c-light-blue;
    border-top: 1px solid $c-light-blue;
    border-bottom: 1px solid $c-light-blue;
    @include tablet {
      padding: 10px 15px;
    }
    @include phone {
      display: block;
      padding: 10px;
      &::before {
        display: block;
        width: 100%;
        content: attr(data-label);
        float: left;
        font-size: 13px;
        line-height: 17px;
        color: $c-primary;
      }
    }
  }
  td:last-child,
  th:last-child {
    border-right: 0;
  }
  tr.danger {
    background-color: $c-disabled-bg;
    td.text {
      color: red;
    }
  }
  tr.highlight {
    background-color: $c-light-gray;
  }

  tr {
    @include phone {
      display: block;
    }
  }
}
</style>
