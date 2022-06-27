<template>
  <section class="manager">
    <ButtonBack class="manager__back" />
    <div class="manager__row">
      <img
        :src="require('@/assets/images/management/Erlan.png')"
        :alt="name"
        class="manager__img"
      />
      <div class="manager__main">
        <RFHeading tag="h1" class="manager__main__title">{{ name }}</RFHeading>
        <RFText class="manager__main__position">{{ position }}</RFText>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="manager__main__data" v-html="data" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'
export default Vue.extend({
  name: 'ManagementTemplate',
  components: {
    RFHeading,
    RFText,
    ButtonBack,
  },
  data() {
    return {
      name: 'Ерлан Мельсович Сулейменов',
      position: 'Генеральный директор',
      data: '<h2>Место рождения: </h2><p>г. Целиноград (г. Нур-Султан)</p><h2>Образование</h2><p>1997 год – Акмолинская государственная медицинская академия Специальность «Лечебное дело».</p><p>1999 год – клиническая ординатура Акмолинской государственной медицинской академии. Специальность «Врач общей практики».</p><p>2001 год – Евразийский университет им. Гумилева Л.Н. Специальность «Экономика и менеджмент в социальной сфере».</p><p>2019 год – Высшая школа бизнеса AlmaU. Звание магистра МВА.</p><h2>Сертификаты</h2><p>2006 год – сертификат Japan International Cooperation Agency (Япония)</p><p>2014 год – сертификат GIZ (Германия) по программе «Деловые связи»</p><p>2020 год – сертификат Business Professional Group (Таиланд)</p><h2>Трудовая деятельность</h2><p>2007 год - по настоящее время – Генеральный директор сети клинико-диагностических лабораторий «ОЛИМП».</p><p>2014 год – Учредитель ТОО «Olymp Medical Group»: сеть медицинских центров «DiVera».</p><p>2017 год – Учредитель ТОО «Meditec».</p><p>2017 год – Соучредитель ТОО «Almaz Medical Group».</p><h2>Основные награды</h2><ul><li>Лауреат Премии Содружества Независимых Государств 2019 года за достижения в области качества продукции и услуг.</li><li>Премия Президента Республики Казахстан, национальная награда за достижения в области качества «Алтын Сапа».</li><li>Медаль «25 лет Независимости Республики Казахстан».</li><li>Нагрудный знак НПП «Атамекен» «За верность делу» III степени.</li><li>Премия «Лучшая казахстанская франшиза на отечественном рынке».</li><li>Специальная премия НПП «Атамекен» «ІСКЕР».</li></ul>',
    }
  },
  head: {
    title: 'Руководство',
  },
})
</script>

<style lang="scss" scoped>
.manager {
  margin: 0 auto;
  max-width: 1440px;
  padding: 50px 50px 100px;
  @include small-laptop {
    padding: 30px 30px 80px;
  }
  @include phone {
    padding: 20px 16px 60px;
  }
  &__back {
    margin-bottom: 40px;
    @include phone {
      margin-bottom: 26px;
    }
  }
  &__row {
    gap: 40px;
    align-items: flex-start;
    @include flex-row();
    @include tablet {
      flex-direction: column;
    }
  }
  &__img {
    flex: 1;
    max-width: 420px;
    border-radius: 5px;
    margin-bottom: 18px;
    @include tablet {
      width: 100%;
      max-width: 100%;
    }
  }
  &__main {
    flex: 2;
    &__title {
      font-size: 44px !important;
      font-weight: 400;
      margin-top: 0 !important;
      margin-bottom: 10px !important;
      @include phone {
        font-size: 28px !important;
        line-height: 34px !important;
      }
    }
    &__position {
      font-size: 24px;
      color: $c-gray;
      margin-bottom: 40px;
      @include phone {
        font-size: 14px;
      }
    }
    &__data {
      ::v-deep h2 {
        font-size: 18px;
        color: $c-gray;
        margin-bottom: 10px;
        margin-top: 30px;
        font-weight: 400;
      }
      ::v-deep p {
        margin-bottom: 10px;
        font-size: 16px;
        @include phone {
          font-size: 14px;
        }
      }
      ::v-deep ul {
        list-style: none;
        li {
          margin-bottom: 10px;
          font-size: 16px;
          @include phone {
            font-size: 14px;
          }
          &::before {
            content: '\2022';
            margin-right: 10px;
            color: $c-secondary-background;
          }
        }
      }
    }
  }
}
</style>
