<template>
  <div class="blank">
    <RFHeading class="blank__title" tag="h5">{{ title }}</RFHeading>
    <table class="blank__table">
      <tr>
        <th v-for="item in headers" :key="item">{{ item }}</th>
      </tr>
      <tr v-for="item in results" :key="item">
        <td class="blank__table__title">{{ item.title }}</td>
        <td class="blank__table__material">
          {{ item.material }}
        </td>
        <td class="blank__table__status">
          <div class="blank__table__status__item">
            <svg-icon v-if="item.status === 'готово'" name="ready"></svg-icon>
            <svg-icon
              v-if="item.status === 'исследуется'"
              name="inProcess"
            ></svg-icon>
            <p>{{ item.status }}</p>
          </div>
        </td>
        <td class="blank__table__actions">
          <button
            v-if="item.actions.length > 0"
            class="blank__table__actions__item"
          >
            <svg-icon name="downloadResult"></svg-icon>
            <p>{{ item.actions[0] }}</p>
          </button>
          <button
            v-if="item.actions.length > 0"
            class="blank__table__actions__item"
          >
            <svg-icon name="sendEmail"></svg-icon>
            <p>{{ item.actions[1] }}</p>
          </button>
        </td>
        <td class="blank__table__past">
          <div class="blank__table__past__dates">
            <p v-for="date in item.past" :key="date">{{ date }}</p>
          </div>
        </td>
      </tr>
    </table>
    <div class="blank__blocks">
      <div v-for="item in results" :key="item">
        <p class="blank__blocks__title">{{ item.title }}</p>
        <p class="blank__blocks__material">{{ item.material }}</p>
        <div class="blank__blocks__actions">
          <button
            v-if="item.actions.length > 0"
            class="blank__blocks__actions__item"
          >
            <svg-icon name="downloadResult"></svg-icon>
            <p>{{ item.actions[0] }}</p>
          </button>
          <button
            v-if="item.actions.length > 0"
            class="blank__blocks__actions__item"
          >
            <svg-icon name="sendEmail"></svg-icon>
            <p>{{ item.actions[1] }}</p>
          </button>
          <p
            v-if="item.actions.length === 0"
            class="blank__blocks__actions__wait"
          >
            {{ waiting }}
          </p>
        </div>
        <div class="blank__blocks__past">
          <span> {{ past }} </span>
          <div class="blank__blocks__past__date">
            <p v-for="date in item.past" :key="date">{{ date }}</p>
          </div>
        </div>
        <svg-icon
          v-if="item.status === 'готово'"
          name="ready"
          class="blank__blocks__icon"
        ></svg-icon>
        <svg-icon
          v-if="item.status === 'исследуется'"
          name="inProcess"
          class="blank__blocks__icon"
        ></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'ResultsBlanks',
  components: {
    RFHeading,
  },
  props: {
    results: {
      type: Array,
      default: () => [
        {
          title: 'Биохимия (А4)',
          material: 'сыворотка',
          status: 'исследуется',
          actions: [],
          past: ['28.12.2020'],
        },
        {
          title: 'Общий анализ крови',
          material: 'сыворотка',
          status: 'готово',
          actions: ['Скачать PDF', 'Отправить'],
          past: ['12.05.2020', '28.12.2020'],
        },
      ],
    },
  },
  data() {
    return {
      title: 'Бланки результатов',
      headers: ['Наименование', 'Материал', 'Состояние', 'Действия', 'Прошлые'],
      waiting: 'Ожидание результатов',
      past: 'Прошлые анализы:',
    }
  },
}
</script>

<style lang="scss" scoped>
.blank {
  .rf-heading--dark {
    margin: 0 0 34px;
    @include font-size(28px, 34px);
    @include tablet {
      margin-bottom: 20px;
      @include font-size(24px, 30px);
    }
  }
  &__table {
    width: 100%;
    border-collapse: collapse;
    @include tablet {
      display: none;
    }
    th {
      color: $c-primary;
      @include font-size(18px, 22px, 600);
      @include medium-tablet {
        @include font-size(16px, 20px, 600);
      }
      @include tablet {
        @include font-size(14px, 18px, 600);
      }
    }
    td {
      @include font-size(16px, 20px);
      @include medium-tablet {
        @include font-size(14px, 18px);
      }
    }
    &__title {
      color: $c-gray;
    }
    &__past {
      &__dates {
        align-items: center;
        flex-wrap: wrap;
        gap: 9px;
        @include flex-row();
      }
      p {
        color: $c-primary;
      }
    }
    &__status {
      &__item {
        align-items: center;
        @include flex-row();
      }
      svg {
        width: 22px;
        height: 22px;
        margin-right: 14px;
      }
    }
    &__actions {
      min-height: 51px;
      flex-wrap: wrap;
      gap: 25px;
      @include flex-row();
      &__item {
        background: none;
        cursor: pointer;
        border: none;
        align-items: center;
        @include flex-row();
        svg {
          margin-right: 8px;
        }
        p {
          color: $c-primary;
          @include font-size(16px, 20px);
          @include medium-tablet {
            @include font-size(14px, 18px);
          }
        }
      }
      &__item:first-child {
        svg {
          width: 14px;
          height: 18px;
        }
      }
      &__item:last-child {
        svg {
          width: 24px;
          height: 20px;
        }
      }
    }
    th,
    td {
      padding: 14px 20px;
      border: 1px solid $c-light-blue;
      text-align: left;
      @include tablet {
        padding: 10px;
      }
    }
    tr.dangerBack {
      background: $c-disabled-bg;
    }
    td.dangerText {
      color: $c-red;
    }
    td:first-child,
    th:first-child {
      border-left: 0;
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
  &__blocks {
    display: none;
    @include tablet {
      display: block;
    }
    > div {
      border: 1.5px solid $c-basic-blue;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 20px 10px 25px 10px;
      width: 100%;
      margin-bottom: 15px;
      position: relative;
    }
    &__title,
    &__material,
    &__actions__wait,
    &__past span,
    &__past p {
      @include font-size(14px, 20px);
    }
    &__title {
      margin-bottom: 5px;
    }
    &__material {
      color: $c-gray;
      margin-bottom: 15px;
    }
    &__actions {
      justify-content: space-between;
      margin-bottom: 15px;
      @include flex-row();
      button {
        background: $c-white;
        border: 1px solid $c-primary;
        box-sizing: border-box;
        border-radius: 4px;
        align-items: center;
        justify-content: center;
        width: 45%;
        cursor: pointer;
        @include flex-row();
        p {
          color: $c-primary;
          @include font-size(13px, 24px);
        }
        svg {
          margin-right: 5px;
        }
      }
      button:first-child {
        svg {
          width: 14px;
          height: 16px;
        }
      }
      button:last-child {
        svg {
          width: 24px;
          height: 20px;
        }
      }
      &__wait {
        color: $c-gray;
        padding: 8px 15px;
        background: $c-light-gray;
        border-radius: 100px;
        width: 190px;
      }
    }
    &__past {
      span {
        color: $c-gray;
      }
      &__date {
        align-items: center;
        @include flex-row();
      }
      p {
        margin-top: 2px;
        color: $c-primary;
      }
      p:first-child {
        margin-right: 19px;
      }
    }
    &__icon {
      position: absolute;
      width: 19px;
      height: 19px;
      top: 14px;
      right: 9px;
    }
  }
}
</style>
