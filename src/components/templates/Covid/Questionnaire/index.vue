<template>
  <div class="covid_test_questionnaire">
    <div class="section covid_test_questionnaire-head">
      <div class="covid_test_questionnaire-heading">
        <RFHeading tag="h2">Анкета для ПЦР-тестированияна Covid-19 в</RFHeading>
        <DropdownBase v-model="city" class="dropdown" :options="cities" />
      </div>

      <!-- TODO: implement search method & fix with backend connection -->
      <Search
        :placeholder="searchData.placeholder"
        :title="searchData.title"
        :btn-name="searchData.btnName"
        :example="searchData.example"
        :text="searchData.text"
        @search="search"
      />
    </div>
    <div class="section covid_test_questionnaire-row">
      <div class="covid_test_questionnaire-col">
        <RFText style-type="hint" variant="small">
          Стоимость Общего анализа крови
        </RFText>
        <RFHeading tag="h4">10 200 тенге</RFHeading>
      </div>
      <div class="covid_test_questionnaire-col">
        <RFText style-type="hint" variant="small">
          Срок выполнения услуги
        </RFText>
        <RFHeading tag="h4">5-7 дней</RFHeading>
      </div>
    </div>
    <div class="section covid_test_questionnaire-col">
      <TabsForm
        v-model="citizenshipTab"
        class="tabs-input"
        label="Гражданство"
        :required="true"
        :tabs="citizenshipTabs"
        type="line"
        type-tab="primary"
      />
      <div class="covid_test_questionnaire-row">
        <div
          v-for="(inputCol, index) in formInputs"
          :key="index"
          class="covid_test_questionnaire-col"
        >
          <RFInput
            v-for="(input, ind) in inputCol"
            :id="`covid-input-${index}-${ind}`"
            :key="`input-${index}-${ind}`"
            v-model="input.model"
            :type="input.type"
            :required="input.required"
            :placeholder="input.placeholder"
          >
            <template #label> {{ input.label }} </template>
          </RFInput>
        </div>
      </div>
      <div class="covid_test_questionnaire-row">
        <TabsForm
          v-model="tempTab"
          class="tabs-input"
          label="Температура"
          :required="true"
          :tabs="tempTabs"
          type="wrap"
          type-tab="outline-primary"
        />
      </div>
      <div class="covid_test_questionnaire-row">
        <TabsForm
          v-model="breathShortnessTab"
          class="covid_test_questionnaire-col tabs-input"
          label="Одышка"
          :required="true"
          :tabs="breathShortnessTabs"
          type="line"
          type-tab="primary"
        />
        <TabsForm
          v-model="coughTab"
          class="covid_test_questionnaire-col tabs-input"
          label="Кашель"
          :required="true"
          :tabs="coughTabs"
          type="line"
          type-tab="primary"
        />
      </div>
      <div class="covid_test_questionnaire-row">
        <TabsForm
          v-model="muscleAcheTab"
          class="tabs-input"
          label="Мышечные боли"
          :required="true"
          :tabs="muscleAcheTabs"
          type="line"
          type-tab="primary"
        />
        <TabsForm
          v-model="diarrheaTab"
          class="tabs-input"
          label="Диарея"
          :required="true"
          :tabs="diarrheaTabs"
          type="line"
          type-tab="primary"
        />
      </div>
    </div>
    <div class="section">
      <div class="covid_test_questionnaire-row">
        <div class="covid_test_questionnaire-col">
          <RFInput id="covid-initial-symptoms" v-model="initialSymptoms">
            <template #label>
              Информация о давности перенесенных симптомов
            </template>
          </RFInput>
          <RFInput
            id="covid-countries-last-months"
            v-model="countries"
            class="md-only"
          >
            <template #label>
              Информация о посещении пациентом стран за последние 3 месяца
            </template>
          </RFInput>
          <RFInput
            id="covid-departure-date"
            v-model="departureDate"
            type="date"
            :required="true"
          >
            <template #label>Дата выезда</template>
          </RFInput>
        </div>
        <div class="covid_test_questionnaire-col align-end lg-only">
          <RFInput id="covid-countries-last-months" v-model="countries">
            <template #label>
              Информация о посещении пациентом стран за последние 3 месяца
            </template>
          </RFInput>
        </div>
      </div>
      <div class="covid_test_questionnaire-row">
        <RFCheckbox
          id="covid-agreement-checkbox"
          v-model="personalDataAgreement"
          :required="true"
        >
          Я согласен на передачу личной информации для регистрации в дисконтной
          программе КДЛ "ОЛИМП"
        </RFCheckbox>
      </div>
      <div class="covid_test_questionnaire-row">
        <RFButton class="submit-btn">Отправить заявку</RFButton>
      </div>
      <div class="covid_test_questionnaire-row">
        <RFText style-type="hint" variant="xs" class="required-hint">
          Поля, помеченные звездочкой, обязательны для заполнения.
        </RFText>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import Search from 'molecules/Search/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import TabsForm from 'organisms/TabsForm/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import DropdownBase from 'atoms/Dropdown/index.vue'

export default Vue.extend({
  name: 'CovidTestQuestionnaire',
  components: {
    Search,
    RFHeading,
    RFText,
    RFInput,
    TabsForm,
    RFCheckbox,
    RFButton,
    DropdownBase,
  },
  data() {
    return {
      city: {},
      searchData: {
        title: '',
        btnName: 'Найти',
        example: 'Название или код',
        text: '',
        placeholder: 'Поиск услуг и анализов',
      },
      citizenshipTab: 'resident',
      citizenshipTabs: [
        {
          id: 'resident',
          title: 'резидент РК',
        },
        {
          id: 'non-resident',
          title: 'нерезидент РК',
        },
      ],
      formInputs: [
        [
          {
            label: 'ИИН',
            required: true,
            type: 'number',
            model: '',
          },
          {
            label: 'Имя',
            required: true,
            type: 'text',
            model: '',
          },
          {
            label: 'Фамилия',
            required: true,
            type: 'text',
            model: '',
          },
          {
            label: 'Отчество (при наличии)',
            required: false,
            type: 'text',
            model: '',
          },
          {
            label: 'Дата рождения',
            required: true,
            type: 'date',
            model: new Date().toLocaleDateString('ru-RU'),
          },
        ],
        [
          {
            label: 'Номер телефона',
            required: true,
            placeholder: '+7',
            type: 'text',
            model: '',
          },
          {
            label: 'Оператор',
            required: true,
            type: 'date',
            model: new Date().toLocaleDateString('ru-RU'),
          },
          {
            label: 'Эл.почта',
            required: true,
            type: 'text',
            model: '',
          },
          {
            label: 'Место работы',
            required: false,
            type: 'text',
            model: '',
          },
          {
            label: 'Домашний адрес',
            required: true,
            type: 'text',
            model: '',
          },
        ],
      ],
      tempTab: 1,
      tempTabs: [
        {
          id: 1,
          title: 'до 36,6°C',
        },
        {
          id: 2,
          title: '36,7°C -37,0°C',
        },
        {
          id: 3,
          title: '37,1°C -38,0°C',
        },
        {
          id: 4,
          title: '38,1°C -39,0°C',
        },
        {
          id: 5,
          title: 'выше 39°C',
        },
      ],
      breathShortnessTab: 'at-rest',
      breathShortnessTabs: [
        {
          id: 'at-rest',
          title: 'да, в покое',
        },
        {
          id: 'active',
          title: 'да, при нагрузке',
        },
        {
          id: 'none',
          title: 'нет',
        },
      ],
      coughTab: 'none',
      coughTabs: [
        {
          id: 'none',
          title: 'нет',
        },
        {
          id: 'dry',
          title: 'сухой',
        },
        {
          id: 'wet',
          title: 'влажный',
        },
      ],
      muscleAcheTab: 'none',
      muscleAcheTabs: [
        {
          id: 'none',
          title: 'нет',
        },
        {
          id: 'present',
          title: 'да',
        },
      ],
      diarrheaTab: 'none',
      diarrheaTabs: [
        {
          id: 'none',
          title: 'нет',
        },
        {
          id: 'present',
          title: 'да',
        },
      ],
      initialSymptoms: '',
      departureDate: '',
      countries: '',
      personalDataAgreement: false,
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities.cities
    },
  },
  watch: {
    city(val) {
      this.$store.commit('cities/setCity', val)
    },
  },
  mounted() {
    this.city = this.$store.state.cities.city
  },
  methods: {
    search() {
      return ''
    },
  },
})
</script>

<style lang="scss" scoped>
.covid_test_questionnaire {
  max-width: 954px;
  margin: 40px 0;

  &-heading {
    h2.rf-heading {
      display: inline;
    }
    .dropdown {
      display: inline-block;
      ::v-deep .drop-down {
        padding: 0 0 0 5px;
        span {
          margin: 15px 0;
          color: $c-primary;
          @include font-size(44px, 48px, 500);
          @include medium-tablet {
            @include font-size(36px, 40px, 400);
          }
          @include phone {
            @include font-size(28px, 36px, 400);
          }
          @include small-phone {
            @include font-size(24px, 30px, 400);
          }
          &:hover {
            color: $c-primary;
          }
        }
      }
    }
  }

  h2.rf-heading {
    @include phone {
      @include font-size(22px, 27px);
    }
  }

  .section {
    margin-bottom: 60px;
    @include phone {
      margin-bottom: 28px;
    }
  }

  &-row {
    width: 100%;
    @include flex-row();

    @include tablet {
      flex-direction: column;
    }
  }

  &-col {
    width: 100%;
    align-items: flex-start;
    @include flex-column();
  }

  label {
    margin-bottom: 10px;
  }

  .tabs-input {
    width: fit-content;
    margin: 0 50px 30px 0;

    ::v-deep .tab {
      white-space: nowrap;
    }

    @include phone {
      margin: 0 0 28px;
    }
  }

  .rf-input {
    width: 100%;
    height: 100%;
    padding-right: 40px;
    margin-bottom: 30px;

    ::v-deep input {
      height: 51px;
    }
    ::v-deep input[type='date'] {
      height: 100%;
      width: 100%;
    }

    @include phone {
      padding-right: 0;
      margin-bottom: 20px;
    }
  }

  .align-end {
    align-self: flex-end;
  }

  .submit-btn {
    margin: 46px 0 30px;
    width: 100%;
    max-width: 369px;
  }

  .required-hint::before {
    content: '*';
    color: $c-error;
  }

  .lg-only {
    @include flex-row();
    @include tablet {
      display: none;
    }
  }
  .md-only {
    display: none;
    @include tablet {
      @include flex-row();
    }
  }
}
</style>
