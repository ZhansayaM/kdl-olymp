<template>
  <div class="main">
    <ButtonBack class="main__back" />
    <div class="main-top">
      <svg-icon name="ISO" class="main__svg"></svg-icon>
      <Search
        :placeholder="searchData.placeholder"
        :title="searchData.title"
        :btn-name="searchData.btnName"
        :example="searchData.example"
        :text="searchData.text"
        class="main__search"
        @search="search"
      />
    </div>
    <div v-for="item in cards" :key="item" class="main__cards">
      <AnalyzesCard :service="item" is-alert class="main__cards__item" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Search from 'molecules/Search/index.vue'
import AnalyzesCard from 'molecules/Cards/AnalyzesCard/index.vue'
import ButtonBack from 'atoms/Button/ButtonBack/index.vue'

/**
 * 'PAGES/Main'
 * @displayName Main
 */
export default Vue.extend({
  name: 'SearchTemplate',
  components: {
    Search,
    AnalyzesCard,
    ButtonBack,
  },
  data() {
    return {
      searchData: {
        title: 'Клинико-диагностические лаборатории ОЛИМП',
        btnName: 'Найти',
        example: 'Например,',
        text: 'тест на COVID',
        placeholder: 'Поиск услуг и анализов',
      },
      cards: [
        {
          title:
            'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
          old_price: 7800,
          price: 6000,
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          title: 'ANA Screen (антиядерные антитела скрининг)',
          price: 6000,
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          title:
            'Свертывание крови (система гемостаза) (F II, F V, F VII, FXII, FXIII, FGB beta, GP1BA (2), ITGA2, ITGB3 (GPIIIa), MTHFR, MTR, MTRR, PAI-I (SERPINE1), SELPLG, JAK2) (16)',
          price: 6000,
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          title: 'Синдром Жильбера (UGT1A1: *28 6TA>7TA) (1)',
          price: 6000,
          tags: [
            {
              id: 1,
              title: '1-5 дней',
            },
          ],
        },
        {
          title:
            'Аминокислоты (32 показателя): Аланин (ALA), Аргинин (ARG), Аспарагиновая кислота (ASP), Цитруллин (CIT), Глутаминовая кислота (GLU), Глицин (GLY), Метионин (MET), Орнитин (ORN), Фенилаланин (PHE), Тирозин (TYR), Валин (VAL), Лейцин (LEU), Изолейцин (ILEU), Гидроксипролин (HPRO), Серин (SER), Аспарагин (ASN), a-аминоадипиновая к-та (AAA), Глутамин (GLN), b-аланин (BALA), Таурин (TAU), Гистидин (HIS), Треонин (THRE), 1-метилгистидин (1MHIS), 3-метилгистидин (3MHIS), y-аминомасляная к-та (GABA), b-аминоизомасляная к-та (BAIBA), a-аминомасляная к-та (AABA), Пролин (PRO), Цистатионин (CYST), Лизин (LYS), Цистин (CYS), Цистеиновая кислота (CYSA) - в крови',
          price: 6000,
          tags: [
            {
              id: 1,
              title: '1-5 дней',
            },
          ],
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.main {
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
    @include tablet {
      margin-bottom: 10px;
    }
    @include phone {
      margin-bottom: 26px;
    }
  }
  &-top {
    justify-content: space-between;
    flex-direction: row-reverse;
    @include flex-row();
    @include tablet {
      display: block;
    }
  }

  &__search {
    max-width: 800px;
    margin-bottom: 34px;
    @include tablet {
      clear: right;
      padding-top: 25px;
    }
    @include phone {
      padding-top: 0;
      margin-bottom: 24px;
    }
  }
  &__svg {
    height: 7rem;
    @include tablet {
      margin-top: 10px;
      width: 100px;
      height: 40px;
      float: right;
    }
    @include phone {
      display: none;
    }
  }
  &__cards {
    &__item {
      margin-bottom: 9px;
    }
  }
}
</style>
