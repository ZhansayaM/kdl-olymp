<template>
  <div class="analyzes-price">
    <section class="analyzes-price-top">
      <Search
        :title="searchData.title"
        :btn-name="searchData.btnName"
        :example="searchData.example"
        :text="searchData.text"
        :placeholder="searchData.placeholder"
        class="Analyzes-search"
      />
      <img
        src="~/assets/images/microscope.png"
        alt="background"
        class="analyzes-price-top_background"
      />
    </section>
    <section class="analyzes-price-wrapper">
      <main class="analyzes-price-content-wrap">
        <div
          class="background-wrapper"
          :class="{ active: filters || categories }"
          @click="onClick"
        ></div>
        <div class="main">
          <div class="main__block">
            <div class="main__block_buttons">
              <RFButton
                size="xs"
                class="btn-categories"
                :class="{ active: categories }"
                @click="categories = true"
                >Категории</RFButton
              >
              <RFButton
                size="xs"
                class="btn-filters"
                :class="{ active: filters }"
                @click="filters = true"
                >Фильтры</RFButton
              >
            </div>
            <div class="left">
              <div class="left__filters">
                <div class="left__filters_main" :class="{ active: categories }">
                  <AccordeonFilters
                    v-for="item in dataFilters"
                    :key="item.id"
                    :options="item"
                    class="left__filters__big-screen"
                  />
                  <div
                    v-for="(item, index) in dataFilters"
                    :key="index"
                    class="left__filters__small-screen"
                  >
                    <AccordeonFilterCheckbox :options="item" />
                  </div>
                  <RFButton @click="$router.push('/house-call')"
                    >Выезд на дом</RFButton
                  >
                </div>
                <div
                  class="left__filters_additional"
                  :class="{ active: filters }"
                >
                  <AccordeonFilters
                    v-for="item in dataFiltersMain"
                    :key="item.id"
                    :options="item"
                    class="right__filters__big-screen"
                  />
                  <div
                    v-for="(item, index) in dataFiltersMain"
                    :key="index"
                    class="right__filters__small-screen"
                  >
                    <AccordeonFilterCheckbox :options="item" />
                  </div>
                </div>
              </div>
              <div class="left-btn">
                <RFButton @click="$router.push('/house-call')"
                  >Выезд на дом</RFButton
                >
              </div>
              <div class="left-card">
                <Card
                  v-for="(item, index) in banner"
                  :key="index"
                  :title="item.title"
                  :link="item.link"
                  :img="item.img"
                  class="left-card-wrap"
                />
              </div>
            </div>
            <div class="right">
              <div class="right__filters">
                <AccordeonFilters
                  v-for="item in dataFiltersMain"
                  :key="item.id"
                  :options="item"
                  is-absolute
                />
              </div>
              <section class="right-cards">
                <RFHeading tag="h3">{{ title }}</RFHeading>
                <AnalyzesCard
                  v-for="item in analyzesData"
                  :key="item.id"
                  :service="item"
                />
                <Button class="show-more">Показать еще</Button>
              </section>
            </div>
          </div>
          <div class="analyzes-price-bottom">
            <Popular
              :items="popularData"
              :is-button="false"
              title="Недавно просмотренные"
            />
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import Search from 'molecules/Search/index.vue'
import AccordeonFilters from 'molecules/Accordeon/Filters/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import Card from 'molecules/Cards/BannerCard/index.vue'
import Popular from 'organisms/Popular/index.vue'
import AnalyzesCard from 'molecules/Cards/AnalyzesCard/index.vue'
import AccordeonFilterCheckbox from 'molecules/Accordeon/FilterCheckbox/index.vue'

/**
 * 'PAGES/Main'
 * @displayName Main
 */
export default Vue.extend({
  name: 'Main',
  components: {
    Search,
    RFHeading,
    RFButton,
    AccordeonFilters,
    Card,
    Popular,
    AnalyzesCard,
    AccordeonFilterCheckbox,
  },
  data() {
    return {
      title: 'Covid-19',
      categories: false,
      filters: false,
      searchData: {
        title: 'Анализы и цены',
        btnName: 'Найти',
        example: 'Поиск услуг и аналитиков',
        text: '',
        placeholder: 'Поиск услуг и анализов',
      },
      dataFilters: [
        {
          id: 1,
          title: 'Анализы',
          isCheckbox: true,
          links: [
            {
              id: 1,
              title: 'Covid-19',
            },
            {
              id: 2,
              title: 'Клинический анализ крови',
            },
            {
              id: 3,
              title: 'Биохимические иследования',
            },
            {
              id: 4,
              title: 'Аллергические исследования',
            },
          ],
        },
        {
          id: 2,
          title: 'Профили',
          isCheckbox: true,
          links: [
            {
              id: 1,
              title: 'Covid-19',
            },
            {
              id: 2,
              title: 'Клинический анализ крови',
            },
            {
              id: 3,
              title: 'Биохимические иследования',
            },
            {
              id: 4,
              title: 'Аллергические исследования',
              submenu: [
                {
                  id: 1,
                  title: 'first',
                },
                {
                  id: 2,
                  title: 'second',
                },
                {
                  id: 3,
                  title: 'another',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: 'Медицинские услуги',
          isCheckbox: true,
          links: [
            {
              id: 1,
              title: 'Услуга 1',
              submenu: [
                {
                  id: 1,
                  title: 'Подвид 1',
                },
                {
                  id: 2,
                  title: 'Подвид 2',
                },
                {
                  id: 3,
                  title: 'Подвид 3',
                },
              ],
            },
            {
              id: 2,
              title: 'Услуга 2',
            },
            {
              id: 3,
              title: 'Услуга 3',
            },
            {
              id: 4,
              title: 'Услуга 4',
            },
          ],
        },
      ],
      dataFiltersMain: [
        {
          id: 1,
          title: 'Органы',
          isCheckbox: true,
          links: [
            {
              id: 1,
              title: 'Дыхательная система',
            },
            {
              id: 2,
              title: 'Иммунная система',
            },
            {
              id: 3,
              title: 'Кровь и кроветворная система',
            },
            {
              id: 4,
              title: 'Мочевыделительная система',
            },
            {
              id: 5,
              title: 'Нервная система',
            },
            {
              id: 6,
              title: 'Опорно-двигательная система',
            },
          ],
        },
        {
          id: 2,
          title: 'Болезни',
          isCheckbox: true,
          links: [
            {
              id: 1,
              title: 'Болезнь 1',
            },
            {
              id: 2,
              title: 'Болезнь 2',
            },
            {
              id: 3,
              title: 'Болезнь 3',
            },
            {
              id: 4,
              title: 'Болезнь 4',
            },
          ],
        },
      ],
      banner: [
        {
          id: 1,
          img: 'banner-card4.png',
          title: 'Выбираю сам',
          link: '/choose-myself',
        },
      ],
      popularData: [
        {
          id: 1,
          title: 'Анализы',
          data: [
            {
              id: 1,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              oldPrice: '7800',
              price: '5600',
            },
            {
              id: 2,
              title: 'Профиль 1',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              oldPrice: '7800',
              price: '5600',
            },
            {
              id: 3,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              oldPrice: '7800',
              price: '7200',
            },
            {
              id: 4,
              title: 'Профиль 2',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              oldPrice: '7800',
              price: '15600',
            },
            {
              id: 5,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 1, name: '1 день' },
              ],
              oldPrice: '7800',
              price: '12600',
            },
            {
              id: 6,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              oldPrice: '7800',
              price: '15600',
            },
          ],
        },
      ],
      analyzesData: [
        {
          id: 1,
          title:
            'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
          old_price: '7800',
          price: '6800',
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
          id: 2,
          title: 'Анти-ТГ (антитела к тиреоглобулину)',
          old_price: '5800',
          price: '4800',
          tags: [
            {
              id: 2,
              title: '1-5 дней',
            },
          ],
        },
        {
          id: 3,
          title: 'Анти-ТГ (антитела к тиреоглобулину)',
          old_price: '7800',
          price: '3800',
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
          id: 4,
          title: 'ANA Screen (антиядерные антитела скрининг)',
          old_price: '19800',
          price: '12800',
          tags: [
            {
              id: 1,
              title: 'Доступно с выездом на дом',
            },
            {
              id: 2,
              title: '1-5 дней',
            },
            {
              id: 3,
              title: 'tag 3',
            },
          ],
        },
      ],
    }
  },
  head: {
    title: 'Анализы и цены',
  },
  methods: {
    onClick() {
      this.filters = false
      this.categories = false
    },
  },
})
</script>

<style lang="scss" scoped>
.background-wrapper {
  display: none;
  @include tablet {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    z-index: 10;
    height: 100%;
    &.active {
      display: block;
    }
  }
}
.analyzes-price {
  width: 100%;
  overflow: hidden;
  &-wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }
  &-top {
    position: relative;
    background-color: $c-blue;
    &_background {
      position: absolute;
      right: 0;
      top: 0;
      @include medium-tablet {
        height: 100%;
      }
      @include tablet {
        height: 90%;
        top: 31px;
        right: -67px;
      }
      @include phone {
        right: -128px;
      }
    }
  }
  .main {
    padding: 50px 50px 100px;
    @include small-laptop {
      padding: 30px 30px 80px;
    }
    @include phone {
      padding: 20px 16px 60px;
    }
    &__block {
      gap: 20px;
      @include flex-row();
      @include tablet {
        display: block;
      }
      &_buttons {
        gap: 20px;
        display: none;
        justify-content: space-between;
        @include tablet {
          @include flex-row();
        }
        @include small-phone {
          gap: 10px;
        }
        .btn {
          &-categories.active,
          &-filters.active {
            z-index: 10;
          }
          &-categories,
          &-filters {
            width: 100%;
            color: $c-dark;
            padding: 10px 33.5px;
            background: $c-button-background;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            outline: none;
          }
        }
      }

      .left {
        &__filters {
          @include flex-column();
          @include phone {
            left: calc(50% - 165px);
            width: 330px;
          }
          @include small-phone {
            width: 270px;
            left: calc(50% - 135px);
          }
          &_main {
            @include tablet {
              display: none;
              padding: 37px 16px 43px;
              background: $c-white;
              border-radius: 10px;
              position: fixed;
              left: calc(11%);
              top: calc(50% - 150px);
              width: 80%;
              &.active {
                display: block;
                z-index: 100;
              }
            }
            .rf-btn {
              display: none;
              @include tablet {
                display: block;
                border: 1px solid $c-basic-blue;
                width: 100%;
                height: 70px;
                border-radius: 3px;
                padding: 0 18px;
                outline: none;
                text-align: left;
                background: $c-white;
                cursor: pointer;
                color: $c-primary;
                @include font-size(18px, 22px, 500);
              }
              @include phone {
                height: 40px;
                @include font-size(14px, 20px);
              }
            }
          }
          &_additional {
            display: none;
            @include medium-tablet {
              @include flex-column();
            }
            @include tablet {
              display: none;
              padding: 40px 16px;
              background: $c-white;
              border-radius: 10px;
              position: fixed;
              width: 80%;
              left: calc(11%);
              top: calc(50% - 150px);
              &.active {
                display: block;
                z-index: 100;
              }
            }
            @include phone {
              left: calc(50% - 165px);
              width: 330px;
            }
            @include small-phone {
              width: 270px;
              left: calc(50% - 135px);
            }
          }
          &__big-screen {
            @include tablet {
              display: none;
            }
          }
          &__small-screen {
            display: none;
            @include tablet {
              display: block;
            }
          }
        }
        &-btn {
          width: 100%;
          margin: 40px 0;
          @include tablet {
            display: none;
          }
          .rf-btn--primary {
            border-radius: 4px;
            width: 100%;
            background-color: $c-primary;
          }
        }
        &-card {
          width: 100%;
          overflow: hidden;
          &-wrap {
            width: 100%;
            padding: 0;
          }
          @include tablet {
            margin: 10px 0 28px;
          }
          ::v-deep .cards-little {
            width: 100%;
            height: 140px;
            @include small-phone {
              height: 80px;
            }
            h4 {
              font-weight: 400;
            }
            img {
              width: 284px;
              height: 284px;
              left: 130px;
              top: -30px;
              @include wide-tablet {
                left: 100px;
              }
              @include tablet {
                left: auto;
                right: 0;
              }
              @include small-phone {
                width: 245px;
                height: auto;
                left: 130px;
                top: -59px;
              }
            }
          }
        }
      }
      .right {
        width: 100%;
        &__filters {
          gap: 18px;
          margin-bottom: 42px;
          @include flex-row();
          @include medium-tablet {
            display: none;
          }
          ::v-deep .wrapper .menu > li {
            color: $c-dark;
            padding: 16px 24px;
          }
          &__big-screen {
            @include tablet {
              display: none;
            }
          }
          &__small-screen {
            display: none;
            @include tablet {
              display: block;
            }
          }
        }
        .show-more {
          display: none;
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
          @include small-phone {
            display: block;
          }
        }
        &-cards {
          padding-bottom: 100px;
          @include small-phone {
            padding-bottom: 50px;
          }
          h3 {
            margin: 0 0 30px;
            font-weight: 400;
          }
          .analyzes-card + .analyzes-card {
            margin-top: 20px;
          }
        }
      }
    }
    &-bottom {
      width: 100%;
      padding: 0 50px 100px;

      @include medium-tablet {
        padding: 0 30px 100px;
      }

      @include phone {
        padding: 0 16px 50px;
      }
    }
  }
}

// ----------------- Стили "Анализы и цены" searchInput ---------------
::v-deep .Analyzes {
  &-search {
    max-width: 1440px;
    height: 356px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 0 80px 50px;
    position: relative;
    z-index: 1;
    @include medium-tablet {
      padding: 80px 30px;
      height: auto;
    }
    @include phone {
      padding: 50px 20px;
    }

    > h2.rf-heading {
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
          @include tablet {
            background-position: 9px 22px;
          }
          @include phone {
            background-position: 9px 20px;
            @include font-size(19px, 22px);
          }

          @include small-phone {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        &-btn {
          width: 158px;
          height: 64px;
          @include font-size(24px, 30px);

          @include tablet {
            display: none;
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

::v-deep {
  .analyzes-card {
    max-width: 100%;
  }
  .wrapper .drop-down,
  .wrapper .wrap-menu,
  .wrapper .menu > li {
    @include tablet {
      width: auto;
    }
  }
  .wrapper {
    @include tablet {
      width: 100%;
      max-width: 100%;
    }
    .drop-down {
      border: 1px solid $c-basic-blue;
      @include phone {
        padding: 0 18px;
        height: 40px;
      }
      > span {
        @include phone {
          @include font-size(14px, 20px);
        }
      }
    }
    .menu > li {
      @include phone {
        color: $c-dark;
        padding: 10px 18px;
        @include font-size(14px, 20px);
      }
    }
  }
  .cards {
    &__bottom {
      @include phone {
        width: 100%;
      }
    }
  }
}
</style>
