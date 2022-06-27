<template>
  <div class="wheretotake">
    <div class="wheretotake__wrapper__content-wrap__top">
      <Search
        :title="searchData.title"
        :btn-name="searchData.btnName"
        :example="searchData.example"
        :text="searchData.text"
        :placeholder="searchData.placeholder"
        class="wheretotake__wrapper__content-wrap__top__search"
      />
      <img
        src="~/assets/images/olymp_analyses_big.png"
        alt="background"
        class="wheretotake__wrapper__content-wrap__top_background"
      />
    </div>
    <div class="wheretotake__wrapper">
      <main class="wheretotake__wrapper__content-wrap">
        <div class="wheretotake__wrapper__content-wrap__main">
          <div class="wheretotake__wrapper__content-wrap__main__left">
            <div
              class="wheretotake__wrapper__content-wrap__main__left__filters"
            >
              <div
                class="
                  wheretotake__wrapper__content-wrap__main__left__filters__top-btn
                "
                :class="{ isMap: mapOpen }"
              >
                <Button
                  :class="[
                    'wheretotake__wrapper__content-wrap__main__left__filters__top-btn__left',
                    { 'btn-disabled': mapOpen },
                  ]"
                  @click="mapOpen = false"
                  >Список</Button
                >
                <Button
                  :class="[
                    'wheretotake__wrapper__content-wrap__main__left__filters__top-btn__right',
                    { 'btn-disabled': !mapOpen },
                  ]"
                  @click="mapOpen = true"
                  >Карта</Button
                >
              </div>
              <div
                class="
                  wheretotake__wrapper__content-wrap__main__left__filters_filter
                "
                :class="{ isMap: mapOpen }"
              >
                <AccordeonFilterCheckbox :options="dataFilters1" />
                <AccordeonFilterCheckbox :options="dataFilters2" />
              </div>
              <div
                v-if="mapOpen"
                class="wheretotake__wrapper__content-wrap__map small-map"
              >
                <Map class="map" is-actionable @click="redirectMap" />
              </div>
            </div>
          </div>
          <div class="wheretotake__wrapper__content-wrap__main__right">
            <div
              v-if="!mapOpen"
              class="wheretotake__wrapper__content-wrap__main__right__cards"
            >
              <WheretoCard
                v-for="(item, index) in analyzesData"
                :key="index"
                :service="item"
                @show="mapOpen = true"
              />
              <Button
                class="
                  wheretotake__wrapper__content-wrap__main__right__cards__more
                "
                >Показать еще</Button
              >
            </div>
            <div
              v-if="mapOpen"
              class="wheretotake__wrapper__content-wrap__map big-map"
            >
              <Map class="map" is-actionable @click="redirectMap" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Search from 'molecules/Search/index.vue'
import AccordeonFilterCheckbox from 'molecules/Accordeon/FilterCheckbox/index.vue'
import WheretoCard from 'molecules/Cards/WheretoCard/index.vue'
import Map from 'organisms/Map/YandexMap/index.vue'
/**
 * 'PAGES/Main'
 * @displayName WhereToTake
 */
export default Vue.extend({
  name: 'WhereToTake',
  components: {
    Search,
    AccordeonFilterCheckbox,
    WheretoCard,
    Map,
  },
  data() {
    return {
      title: 'Covid-19',
      mapOpen: false,
      searchData: {
        title: 'Где сдать?',
        btnName: 'Найти',
        example: 'Введите улицу или название ПК',
        text: '',
        placeholder: 'Поиск процедурного кабинета',
      },
      dataFilters1: {
        id: 1,
        title: 'Фильтры для поиска',
        isCheckbox: true,
        links: [
          {
            id: 1,
            title: 'Оплата банковской картой',
          },
          {
            id: 2,
            title: 'Работа без выходных',
          },
          {
            id: 3,
            title: 'Cкидка на услуги',
          },
        ],
      },
      dataFilters2: {
        id: 2,
        title: 'Отдельные виды анализов',
        isCheckbox: true,
        links: [
          {
            id: 1,
            title: 'Забор крови на биохимию, иммунохимию, ИФА, ПЦР',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 2,
            title: 'Забор крови на общий анализ (ОАК), электролиты, АКТГ',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 20:00',
          },
          {
            id: 3,
            title: 'Забор крови на гемостаз',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 4,
            title: 'Забор гинекологических мазков',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 20:00',
          },
          {
            id: 5,
            title: 'Забор мочи',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 20:00',
          },
          {
            id: 6,
            title: 'Забор ПЦР на COVID-19',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 7,
            title: 'Забор урологических мазков',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 8,
            title: 'ПЦР на ИППП "день в день"',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 9,
            title: 'Спермограмма',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 10,
            title: 'Забор кала',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 11,
            title: 'УЗИ-диагностика',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 12,
            title: 'ЭКГ, Холтер, СМАД',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 13,
            title: 'Внутривенное введение капельно (система), струйно',
            weekdays: '08:00 - 13:00',
            weekend1: '08:00 - 13:00',
            weekend2: '08:00 - 13:00',
          },
          {
            id: 14,
            title: 'Внутримышечная инъекция',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 15,
            title: 'Прием гинеколога',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 16,
            title: 'Прием эндокринолога',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 17,
            title: 'Прием кардиолога',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 18,
            title: 'Прием дерматовенеролога',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
          {
            id: 19,
            title: 'Прием генетика',
            weekdays: '',
            weekend1: '',
            weekend2: '',
          },
        ],
      },
      analyzesData: [
        {
          id: 1,
          title: 'Процедурный кабинет "Нурлы Тау"',
          status: '10% cкидка c 10.02. по 10.03.2021',
          statusText: '10% cкидка c 10 февраля по 10 марта',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress1: 'г. Алматы, пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress2:
            'БЦ "Нурлы-Тау", ЖК "Orion Residence", Остановка ТЦ Рамстор, Желтоксан (пр. Аль-Фараби)',
          bus: 'Автобусы №: 63, 127, 86, 38, 62, 2, 48',
          phone: '259-69-79 ',
          take: 'Приём анализов:',
          get: 'Выдача результатов:',
          weekdays: 'Пн-Пт',
          weekend1: 'Сб',
          weekend2: 'Вс',
          weekdaysTimetake: '08:00 - 12:00',
          weekdaysTimeget: '10:00 - 13:00',
          weekend1Timetake: '08:00 - 12:00',
          weekend1Timeget: '10:00 - 13:00',
          weekend2Time: 'Выходной',
          weekend2Timetake: '08:00 - 12:00',
          weekend2Timeget: '10:00 - 13:00',
          break: 'Перерыв:',
          breakTimeWeekdays: '11:30 - 12:00',
          breakTimeWeekend: '11:30 - 12:00',
        },
        {
          id: 1,
          title: 'Процедурный кабинет "Нурлы Тау"',
          status: '10% cкидка c 10.02. по 10.03.2021',
          statusText: '10% cкидка c 10 февраля по 10 марта',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress1: 'г. Алматы, пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress2:
            'БЦ "Нурлы-Тау", ЖК "Orion Residence", Остановка ТЦ Рамстор, Желтоксан (пр. Аль-Фараби)',
          bus: 'Автобусы №: 63, 127, 86, 38, 62, 2, 48',
          phone: '259-69-79 ',
          take: 'Приём анализов:',
          get: 'Выдача результатов:',
          weekdays: 'Пн-Пт',
          weekend1: 'Сб',
          weekend2: 'Вс',
          weekdaysTimetake: '08:00 - 12:00',
          weekdaysTimeget: '10:00 - 13:00',
          weekend1Timetake: '08:00 - 12:00',
          weekend1Timeget: '10:00 - 13:00',
          weekend2Time: 'Выходной',
          weekend2Timetake: '08:00 - 12:00',
          weekend2Timeget: '10:00 - 13:00',
          break: 'Перерыв:',
          breakTimeWeekdays: '11:30 - 12:00',
          breakTimeWeekend: '11:30 - 12:00',
        },
        {
          id: 1,
          title: 'Процедурный кабинет "Нурлы Тау"',
          status: 'Временно не работает',
          statusText: '10% cкидка c 10 февраля по 10 марта',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress1: 'г. Алматы, пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress2:
            'БЦ "Нурлы-Тау", ЖК "Orion Residence", Остановка ТЦ Рамстор, Желтоксан (пр. Аль-Фараби)',
          bus: 'Автобусы №: 63, 127, 86, 38, 62, 2, 48',
          phone: '259-69-79 ',
          take: 'Приём анализов:',
          get: 'Выдача результатов:',
          weekdays: 'Пн-Пт',
          weekend1: 'Сб',
          weekend2: 'Вс',
          weekdaysTimetake: '08:00 - 12:00',
          weekdaysTimeget: '10:00 - 13:00',
          weekend1Timetake: '08:00 - 12:00',
          weekend1Timeget: '10:00 - 13:00',
          weekend2Time: 'Выходной',
          weekend2Timetake: '08:00 - 12:00',
          weekend2Timeget: '10:00 - 13:00',
          break: 'Перерыв:',
          breakTimeWeekdays: '11:30 - 12:00',
          breakTimeWeekend: '11:30 - 12:00',
        },
        {
          id: 1,
          title: 'Процедурный кабинет "Нурлы Тау"',
          status: '10% cкидка c 10.02. по 10.03.2021',
          statusText: '10% cкидка c 10 февраля по 10 марта',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress1: 'г. Алматы, пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress2:
            'БЦ "Нурлы-Тау", ЖК "Orion Residence", Остановка ТЦ Рамстор, Желтоксан (пр. Аль-Фараби)',
          bus: 'Автобусы №: 63, 127, 86, 38, 62, 2, 48',
          phone: '259-69-79 ',
          take: 'Приём анализов:',
          get: 'Выдача результатов:',
          weekdays: 'Пн-Пт',
          weekend1: 'Сб',
          weekend2: 'Вс',
          weekdaysTimetake: '08:00 - 12:00',
          weekdaysTimeget: '10:00 - 13:00',
          weekend1Timetake: '08:00 - 12:00',
          weekend1Timeget: '10:00 - 13:00',
          weekend2Time: 'Выходной',
          weekend2Timetake: '08:00 - 12:00',
          weekend2Timeget: '10:00 - 13:00',
          break: 'Перерыв:',
          breakTimeWeekdays: '11:30 - 12:00',
          breakTimeWeekend: '11:30 - 12:00',
        },
      ],
    }
  },
  head: {
    title: 'Где сдать?',
  },
  mounted(): void {
    const result = [] as any
    for (let i = 0; i < this.dataFilters2.links.length; i++) {
      if (this.dataFilters2.links[i].weekdays !== '') {
        result.unshift(this.dataFilters2.links[i])
      } else result.push(this.dataFilters2.links[i])
    }
    this.$store.commit('storeArray', result)
  },
  methods: {
    redirectMap() {
      this.$router.push('/procedural-cabinet')
    },
  },
})
</script>

<style lang="scss" scoped>
.wheretotake {
  width: 100%;
  &__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    &__content-wrap {
      padding: 50px 50px 100px;
      @include small-laptop {
        padding: 30px 30px 80px;
      }
      @include phone {
        padding: 20px 16px 60px;
      }
      &__map {
        .map.ymap-container {
          width: 100%;
          height: 400px;
        }
        &__box {
          position: absolute;
          width: 340px;
          height: 310px;
          left: 811px;
          top: 683px;
          background: $c-white;
          border: 1px solid $c-basic-blue;
          box-sizing: border-box;
          border-radius: 5px;
        }
      }
      &__map.small-map {
        display: none;
        @include phone {
          display: block;
          order: 2;
        }
      }
      &__map.big-map {
        @include phone {
          display: none;
        }
      }
      &__top {
        position: relative;
        background-color: $c-blue;
        &_background {
          position: absolute;
          right: 150px;
          top: 0;
          @include medium-tablet {
            right: 10px;
          }
          @include tablet {
            height: 65%;
            top: 17px;
          }
        }
        &__search {
          position: relative;
          z-index: 1;
        }
      }
      &__main {
        width: 100%;
        justify-content: flex-start;
        @include flex-row();
        @include tablet {
          display: block;
        }
        &__left {
          align-items: center;
          padding-right: 20px;
          @include flex-column();
          @include medium-tablet {
            padding-right: 10px;
          }
          @include tablet {
            padding-right: 0;
            margin-bottom: 20px;
          }
          &__filters {
            @include phone {
              width: 100%;
              @include flex-column();
            }
            &_filter.isMap {
              > div:first-child {
                @include phone {
                  margin-bottom: 10px;
                }
              }
              @include phone {
                order: 3;
                margin-top: 20px;
              }
            }
            &__top-btn {
              background-color: $c-disabled-button-bg;
              border-radius: 8px;
              width: 369px;
              height: 56px;
              margin-bottom: 17px;
              align-items: center;
              justify-content: center;
              @include flex-row();
              @include small-laptop {
                width: 300px;
              }
              @include medium-tablet {
                width: 230px;
              }
              @include tablet {
                width: 400px;
              }
              @include phone {
                width: 100%;
              }
              &__left,
              &__right {
                padding: 10px 14px;
                width: 178.5px;
                cursor: pointer;
                background: $c-primary;
                border-radius: 6px;
                color: $c-white;
                outline: none;
                border: none;
                @include font-size(20px, 28px);
                @include medium-tablet {
                  @include font-size(18px, 20px);
                }
                @include phone {
                  width: 49%;
                }
                @include small-phone {
                  @include font-size(16px, 18px);
                }
                &:hover {
                  background: $c-primary;
                }

                &.btn-disabled {
                  background-color: $c-disabled-button-bg;
                  color: $c-dark;
                  cursor: pointer;
                  border: none;

                  &:hover {
                    background-color: $c-disabled-button-bg;
                  }
                }
              }
            }
            &__top-btn.isMap {
              @include phone {
                order: 1;
                margin-bottom: 27px;
              }
            }
          }
        }
        &__right {
          width: 100%;
          &__cards {
            &__more {
              color: $c-primary;
              width: 100%;
              padding: 8px;
              margin: 10px 0;
              border: 1px solid $c-primary;
              background: $c-white;
              outline: none;
              border-radius: 5px;
              cursor: pointer;
              @include font-size(14px, 20px);
            }
            h3 {
              margin-bottom: 30px;
              @include font-size(38px, 46px);
            }
            .analyzes-card + .analyzes-card {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}

// ----------------- Стили "Анализы и цены" searchInput ---------------
::v-deep .wheretotake {
  &__wrapper__content-wrap__top__search {
    max-width: 1440px;
    height: 356px;
    margin: 0 auto;
    width: 100%;
    padding: 80px 0 80px 50px;
    @include medium-tablet {
      padding: 80px 40px;
    }
    @include tablet {
      padding: 50px 30px;
      height: auto;
    }
    @include phone {
      padding: 60px 16px;
    }
    h1.rf-heading {
      margin-top: 0;
    }
    .container {
      &__search {
        > input {
          max-width: 630px;
          height: 64px;
          width: 100%;
          background-color: $c-white;
          @include font-size(24px, 32px);
          @include medium-tablet {
            @include font-size(22px, 24px);
          }
          @include tablet {
            height: 62px;
            white-space: nowrap;
            background-position: 9px 19px;
            overflow: hidden;
            text-overflow: ellipsis;
            @include font-size(18px, 20px);
          }
          @include small-phone {
            @include font-size(14px, 16px);
          }
        }

        &-btn {
          width: 158px;
          height: 64px;
          @include font-size(24px, 30px);
          @include tablet {
            width: 100px;
            height: 62px;
            @include font-size(20px, 22px);
          }
        }
      }
      &__hint {
        @include phone {
          display: none;
        }
      }
    }
  }
}
</style>
