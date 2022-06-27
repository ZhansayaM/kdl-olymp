<template>
  <div class="select-city">
    <RFText variant="small" class="select-city__btn" @click="show = !show">
      {{ selected }}
    </RFText>

    <div v-if="show" v-click-outside="hide" class="select-city__list">
      <Input
        v-model="cityName"
        class="search_city"
        :placeholder="placeholder"
      />
      <li v-for="city in citiesTemp" :key="city.name" @click="selectCity(city)">
        {{ city }}
      </li>

      <div v-for="(item, index) in regionsTemp" :key="index">
        <p>
          {{ item.title }}
        </p>
        <li
          v-for="(city, elem) in item.cities"
          :key="elem"
          @click="selectCity(city)"
        >
          {{ city }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import Input from 'atoms/Input/index.vue'
import Search from 'services/common/Search'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'SelectCity',
  components: {
    Input,
    RFText,
  },
  data() {
    return {
      cities: ['Нур-Султан', 'Алматы', 'Шымкент'],
      citiesTemp: ['Нур-Султан', 'Алматы', 'Шымкент'],
      regions: [
        {
          title: 'Акмолинская область',
          cities: [
            'Акколь',
            'Атбасар',
            'Державинск',
            'Ерейментау',
            'Есиль',
            'Кокшетау',
            'Макинск',
            'Степногорск',
            'Степняк',
            'Щучинск',
          ],
        },
        {
          title: 'Актюбинская область',
          cities: [
            'Актобе',
            'Алга',
            'Жем',
            'Кандыагаш',
            'Темир',
            'Хромтау',
            'Шалкар',
            'Эмба',
            'Бадамша',
            'Байганин',
            'Комсомольское',
            'Мартук',
            'Хобда',
            'Шубар-кудук',
          ],
        },
        {
          title: 'Алматинская область',
          cities: [
            'Есик',
            'Жаркент',
            'Капшагай',
            'Каскелен',
            'Сарканд',
            'Талгар',
            'Талдыкорган',
            'Текели',
            'Учарал',
            'Уштобе',
          ],
        },
        {
          title: 'Атырауская область',
          cities: ['Атырау', 'Кулсары', 'Гурьев'],
        },
        {
          title: 'Восточно-Казахстанская область',
          cities: [
            'Аягоз',
            'Зайсан',
            'Зыряновск',
            'Курчатов',
            'Риддер',
            'Семей',
            'Серебрянск',
            'Усть-Каменогорск',
            'Шар',
            'Шемонаиха',
          ],
        },
        {
          title: 'Жамбыльская область',
          cities: ['Жанатас', 'Каратау', 'Тараз', 'Шу'],
        },
        {
          title: 'Западно-Казахстанская область',
          cities: ['Аксай', 'Уральск'],
        },
        {
          title: 'Карагандинская область',
          cities: [
            'Абай',
            'Балхаш',
            'Жезказган',
            'Караганды',
            'Каражал',
            'Каркаралинск',
            'Приозёрск',
            'Сарань',
            'Сатпаев',
            'Темиртау',
            'Шахтинск',
          ],
        },
        {
          title: 'Костанайская область',
          cities: ['Аркалык', 'Житикара', 'Костанай', 'Лисаковск', 'Рудный'],
        },
        {
          title: 'Кызылординская область',
          cities: [
            'Арал',
            'Казалинск',
            'Кызылорда',
            'Аральск',
            'Жалагаш',
            'Жанакорган',
            'Кармакчи',
            'Теренозек',
            'Шиели',
          ],
        },
        {
          title: 'Мангистауская область',
          cities: ['Актау', 'Жанаозен', 'Форт-Шевченко'],
        },
        {
          title: 'Павлодарская область',
          cities: ['Аксу', 'Павлодар', 'Экибастуз'],
        },
        {
          title: 'Северо-Казахстанская область',
          cities: [
            'Булаево',
            'Мамлютка',
            'Петропавловск',
            'Сергеевка',
            'Тайынша',
          ],
        },
        {
          title: 'Южно-Казахстанская область',
          cities: [
            'Арыс',
            'Жетысай',
            'Кентау',
            'Ленгер',
            'Сарыагаш',
            'Туркестан',
            'Шардара',
          ],
        },
      ],
      show: false,
      regionsTemp: [
        {
          title: 'Акмолинская область',
          cities: [
            'Акколь',
            'Атбасар',
            'Державинск',
            'Ерейментау',
            'Есиль',
            'Кокшетау',
            'Макинск',
            'Степногорск',
            'Степняк',
            'Щучинск',
          ],
        },
        {
          title: 'Актюбинская область',
          cities: [
            'Актобе',
            'Алга',
            'Жем',
            'Кандыагаш',
            'Темир',
            'Хромтау',
            'Шалкар',
            'Эмба',
            'Бадамша',
            'Байганин',
            'Комсомольское',
            'Мартук',
            'Хобда',
            'Шубар-кудук',
          ],
        },
        {
          title: 'Алматинская область',
          cities: [
            'Есик',
            'Жаркент',
            'Капшагай',
            'Каскелен',
            'Сарканд',
            'Талгар',
            'Талдыкорган',
            'Текели',
            'Учарал',
            'Уштобе',
          ],
        },
        {
          title: 'Атырауская область',
          cities: ['Атырау', 'Кулсары', 'Гурьев'],
        },
        {
          title: 'Восточно-Казахстанская область',
          cities: [
            'Аягоз',
            'Зайсан',
            'Зыряновск',
            'Курчатов',
            'Риддер',
            'Семей',
            'Серебрянск',
            'Усть-Каменогорск',
            'Шар',
            'Шемонаиха',
          ],
        },
        {
          title: 'Жамбыльская область',
          cities: ['Жанатас', 'Каратау', 'Тараз', 'Шу'],
        },
        {
          title: 'Западно-Казахстанская область',
          cities: ['Аксай', 'Уральск'],
        },
        {
          title: 'Карагандинская область',
          cities: [
            'Абай',
            'Балхаш',
            'Жезказган',
            'Караганды',
            'Каражал',
            'Каркаралинск',
            'Приозёрск',
            'Сарань',
            'Сатпаев',
            'Темиртау',
            'Шахтинск',
          ],
        },
        {
          title: 'Костанайская область',
          cities: ['Аркалык', 'Житикара', 'Костанай', 'Лисаковск', 'Рудный'],
        },
        {
          title: 'Кызылординская область',
          cities: [
            'Арал',
            'Казалинск',
            'Кызылорда',
            'Аральск',
            'Жалагаш',
            'Жанакорган',
            'Кармакчи',
            'Теренозек',
            'Шиели',
          ],
        },
        {
          title: 'Мангистауская область',
          cities: ['Актау', 'Жанаозен', 'Форт-Шевченко'],
        },
        {
          title: 'Павлодарская область',
          cities: ['Аксу', 'Павлодар', 'Экибастуз'],
        },
        {
          title: 'Северо-Казахстанская область',
          cities: [
            'Булаево',
            'Мамлютка',
            'Петропавловск',
            'Сергеевка',
            'Тайынша',
          ],
        },
        {
          title: 'Южно-Казахстанская область',
          cities: [
            'Арыс',
            'Жетысай',
            'Кентау',
            'Ленгер',
            'Сарыагаш',
            'Туркестан',
            'Шардара',
          ],
        },
      ],
      cityName: '',
      selected: 'Нур-Султан',
      placeholder: 'Поиск города',
    }
  },
  watch: {
    cityName(value) {
      this.cityName = value
      this.findMatch(this.cityName)
    },
  },
  methods: {
    selectCity(city) {
      this.show = false
      this.selected = city
    },
    hide() {
      this.show = false
    },
    findMatch(val) {
      const searchService = new Search()
      this.citiesTemp = searchService.searchElement(this.cities, val)
      for (let i = 0; i < this.regions.length; i++)
        this.regionsTemp[i].cities = searchService.searchElement(
          this.regions[i].cities,
          val
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.select-city {
  position: relative;
  background-color: $c-light-blue;
  max-width: 200px;
  &__btn {
    border: none;
    cursor: pointer;
    color: $c-dark;
    font-family: $f-text;
    background-image: url('assets/icons/arrowDown.svg');
    background-repeat: no-repeat;
    background-position: 85% 50%;
    padding: 10px;
    @include phone {
      @include font-size(14px, 17px);
    }
  }
  .search_city {
    background-image: none;
    text-indent: 0;
    font-size: 14px;
    width: 93%;
    padding: 10px;
  }
  &__list {
    position: absolute;
    right: 0;
    background: $c-white;
    width: 280px;
    padding: 27px 0 10px 18px;
    border-radius: 5px;
    box-shadow: 0 10px 23px rgba(38, 174, 243, 0.39);
    z-index: 11;
    max-height: 20rem;
    overflow-y: auto;
    @include flex-column();
    @include tablet {
      top: 1.7rem;
    }
    @include phone {
      top: 2.2rem;
    }
    p {
      margin: 10px 0;
      @include font-size(14px, 18px);
      @include tablet {
        @include font-size(12px, 16px, 500);
      }
    }
    li {
      width: 100%;
      list-style: none;
      color: $c-dark;
      font-family: $f-text;
      padding: 10px;
      border-bottom: 1px solid $c-additional-gray;
      cursor: pointer;
      @include font-size(16px, 20px);
      @include tablet {
        @include font-size(12px, 16px);
      }
      &:hover {
        color: $c-disabled-input-text;
        font-weight: 700;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
