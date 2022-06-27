<template>
  <section class="infections">
    <RFHeading tag="h1"> Инфекционные болезни - Covid-19 </RFHeading>
    <div class="infections-covid-template">
      <div class="infections-covid-template-main">
        <!-- TODO: API /infectious-disease добавить новый инфо блок сюда -->
        <CovidCard :dates="dates" class="md-only" />
        <div
          class="text-normalize"
          v-html="diseases[0].attributes.description"
        ></div>
        <RFCheckbox
          id="personal-data-collection-agreement"
          v-model="personalData"
          class="infections-covid-template__agreement one"
        >
          {{ diseases[0].attributes.agreement_one }}
        </RFCheckbox>
        <RFCheckbox
          id="test-taking-agreement"
          v-model="testTaking"
          class="infections-covid-template__agreement"
        >
          {{ diseases[0].attributes.agreement_two }}
        </RFCheckbox>
        <RFButton
          class="infections-covid-template__btn"
          :disabled="!(personalData && testTaking)"
          @click="openModal"
        >
          Заполнить анкету
        </RFButton>
      </div>
      <CovidCard :dates="dates" class="lg-only" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import CovidCard from 'molecules/Cards/CovidCard/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'

export default Vue.extend({
  name: 'CovidTestTemplate',
  components: {
    RFHeading,
    RFButton,
    CovidCard,
    RFCheckbox,
  },
  data() {
    return {
      personalData: false,
      testTaking: false,
      dates: '1.07 - 31.07',
    }
  },
  computed: {
    diseases() {
      return this.$store.getters['infectiousDisease/getInfectiousDisease']
    },
  },
  watch: {
    personalData(val) {
      this.$store.commit('covid/setAcceptPersonalDataCollection', val)
    },
    testTaking(val) {
      this.$store.commit('covid/setAcceptProcedures', val)
    },
  },
  methods: {
    openModal() {
      if (this.personalData && this.testTaking)
        this.$store.dispatch('modals/showModalCovidTerms', {})
    },
  },
})
</script>

<style lang="scss" scoped>
.infections {
  .rf-heading {
    max-width: 590px;
    margin: 0 0 20px;
    @include phone {
      margin-bottom: 18px;
    }
  }
  &-covid-template {
    align-items: flex-start;
    justify-content: space-between;
    gap: 86px;
    @include flex-row();
    @include tablet {
      flex-direction: column;
    }

    &-main {
      width: 100%;
      max-width: 860px;
      margin-right: 40px;
      align-items: flex-start;
      @include flex-column();
      @include phone {
        margin-right: 0;
      }

      ::v-deep div.text-normalize {
        h6 {
          @include font-size(24px, 32px);
          @include phone {
            @include font-size(14px, 20px);
          }
        }
        h5 {
          margin: 40px 0 20px;
          @include font-size(28px, 34px);
          @include phone {
            margin: 28px 0 18px;
            @include font-size(22px, 27px);
          }
        }
        ul {
          margin-bottom: 81px;
          @include phone {
            padding-bottom: 10px;
            margin-bottom: 0;
            border-bottom: 1px solid $c-secondary-gray;
          }
        }
      }
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

    &__agreement {
      margin-bottom: 38px;
      max-width: 600px;
      @include phone {
        margin: 0;
      }
    }
    &__agreement.one {
      @include phone {
        margin: 28px 0 20px;
      }
    }
    &__btn {
      margin-top: 46px;
      border-radius: 4px;
      width: 280px;
      height: 55px;
      @include phone {
        margin-top: 36px;
        width: 100%;
        height: 50px;
      }
    }
  }
}
</style>
