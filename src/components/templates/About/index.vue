<template>
  <div class="main">
    <TabsBlock :tabs="tabs" @selectedTab="changeTab">
      <template #heading>
        <RFHeading class="main__heading" variant="light"> О нас </RFHeading>
      </template>
    </TabsBlock>
    <component :is="changeComponent" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import TabsBlock from 'organisms/TabsBlock/index.vue'
import Company from 'templates/About/Company/index.vue'
import Main from 'templates/About/Main/index.vue'
import Management from 'templates/About/Management/index.vue'
import SocialResponsibility from 'templates/About/SocialResponsibility/index.vue'
import Innovations from 'templates/About/Innovations/index.vue'
import Licences from 'templates/About/Licences/index.vue'
export default Vue.extend({
  name: 'AboutTemplate',
  components: {
    RFHeading,
    TabsBlock,
    Company,
    Main,
    Management,
    SocialResponsibility,
    Innovations,
    Licences,
  },
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          id: 1,
          title: 'О компании',
        },
        {
          id: 2,
          title: 'Руководство',
        },
        {
          id: 3,
          title: 'Социальная ответственность',
        },
        {
          id: 4,
          title: 'Инновации и оборудование',
        },
        {
          id: 5,
          title: 'Лицензии и сертификаты',
        },
      ],
    }
  },
  computed: {
    changeComponent() {
      switch (this.currentTab) {
        case 1:
          return Company
        case 2:
          return Management
        case 3:
          return SocialResponsibility
        case 4:
          return Innovations
        case 5:
          return Licences
        default:
          return Main
      }
    },
  },
  mounted() {
    this.$store.commit('tabs/changeTabsActive', this.currentTab)
  },
  beforeDestroy() {
    localStorage.setItem('last', this.$store.state.tabs.tabsActive)
  },

  methods: {
    changeTab(tab) {
      this.currentTab = tab
      this.$store.commit('tabs/changeTabsActive', tab)
    },
  },
})
</script>

<style lang="scss" scoped>
.main {
  &__heading {
    font-size: 56px !important;
    @include phone {
      font-size: 28px !important;
      margin-bottom: 10px !important;
    }
  }
}
</style>
