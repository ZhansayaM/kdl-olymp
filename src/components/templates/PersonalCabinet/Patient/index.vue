<template>
  <div class="patient">
    <TabsBlock :tabs="tabs" @selectedTab="changeTab">
      <template #heading>
        <section class="patient__heading">
          <RFHeading variant="light" tag="h1">
            Здравствуйте, Алексей
          </RFHeading>
          <CallIcon class="patient__call" />
        </section>
      </template>
    </TabsBlock>
    <PatientResults v-if="$route.fullPath === '/patient/results'" />
    <PatientDiscounts v-else-if="$route.fullPath === '/patient/discount'" />
    <PatientPromo v-else-if="$route.fullPath === '/patient/promo'" />
    <PatientSettings v-else-if="$route.fullPath === '/patient/settings'" />
    <PatientHome v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import TabsBlock from 'organisms/TabsBlock/index.vue'
import PatientHome from 'organisms/Patient/Home/index.vue'
import PatientResults from 'organisms/Patient/Results/index.vue'
import PatientDiscounts from 'organisms/Patient/Discounts/index.vue'
import PatientPromo from 'organisms/Patient/Promo/index.vue'
import PatientSettings from 'organisms/Patient/Settings/index.vue'

const CallIcon = require('~/assets/icons/call-icon.svg?inline')

export default Vue.extend({
  name: 'PatientTemplate',
  components: {
    RFHeading,
    TabsBlock,
    CallIcon,
    PatientHome,
    PatientResults,
    PatientDiscounts,
    PatientPromo,
    PatientSettings,
  },
  data() {
    return {
      tabs: [
        {
          id: 'results',
          title: 'Результаты анализов',
        },
        {
          id: 'promo',
          title: 'Промо-коды',
        },
        {
          id: 'discount',
          title: 'Дисконтная карта',
        },
        {
          id: 'settings',
          title: 'Настройки',
        },
      ],
    }
  },
  mounted() {
    const current = localStorage.getItem('last') || ''
    this.$store.commit('tabs/changeTabsActive', current)
  },
  beforeDestroy() {
    localStorage.setItem('last', this.$store.state.tabs.tabsActive)
  },
  methods: {
    changeTab(tab) {
      this.$router.push(`/patient/${tab}`)
      this.$store.commit('tabs/changeTabsActive', tab)
    },
  },
})
</script>

<style lang="scss" scoped>
.patient {
  &__heading {
    gap: 15px;
    padding-bottom: 50px;
    @include flex-row();

    @include tablet {
      padding-bottom: 30px;
    }

    > h1 {
      margin: 0 !important;
      @include font-size(56px, 52px, 500);

      @include tablet {
        @include font-size(42px, 48px, 500);
      }

      @include phone {
        @include font-size(28px, 34px, 500);
      }
    }
  }
}
</style>
