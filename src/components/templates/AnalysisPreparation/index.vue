<template>
  <div class="analysis-prep">
    <TabsBlock :tabs="tabs" :analysis="true" @selectedTab="changeTab">
      <template #heading>
        <RFHeading class="about-prep__heading" variant="light">
          {{ title }}
        </RFHeading>
      </template>
    </TabsBlock>
    <Preparation v-if="!currentTab" />
    <div
      v-else
      class="text-normalize p-20"
      v-html="changeTabValue[0].attributes.description"
    ></div>
    <!-- <component :is="currentTabValue" /> -->
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import TabsBlock from 'organisms/TabsBlock/index.vue'
import Preparation from 'organisms/Preparation/index.vue'
/**
 * 'Templates/AnalysisPrepTemplate'
 * @displayName AnalysisPrepTemplate
 */
export default {
  name: 'AnalysisPrepTemplate',
  components: {
    RFHeading,
    TabsBlock,
    Preparation,
  },
  data() {
    return {
      title: 'Подготовка к анализам',
      currentTab: '',
      tabs: [
        {
          id: 'blood',
          title: 'Кровь',
        },
        {
          id: 'urine',
          title: 'Моча',
        },
        {
          id: 'feces',
          title: 'Кал',
        },
        {
          id: 'sperm',
          title: 'Сперма',
        },
        {
          id: 'smears',
          title: 'Мазки',
        },
        {
          id: 'saliva',
          title: 'Слюна',
        },
        {
          id: 'other',
          title: 'Другое',
        },
      ],
    }
  },
  computed: {
    changeTabValue() {
      return this.getPrepData.filter(
        (item) => item.attributes.id === this.currentTab
      )
    },
    getPrepData() {
      return this.$store.getters['prepare/getAnalysisPrepare']
    },
  },
  mounted() {
    const current = localStorage.getItem('last') || ''
    this.$store.commit('tabs/changeTabsActive', current)
    this.tabs = this.tabsTitle()
  },
  beforeDestroy() {
    localStorage.setItem('last', this.$store.state.tabs.tabsActive)
  },
  methods: {
    tabsTitle() {
      const tabs = []
      this.getPrepData.forEach((el) => {
        tabs.push({ id: el.attributes.id, title: el.attributes.title })
      })
      return tabs
    },
    changeTab(tab) {
      console.log(tab)
      this.currentTab = tab
      // this.$router.push(`/analysis-prep/${tab}`)
      this.$store.commit('tabs/changeTabsActive', tab)
    },
  },
}
</script>

<style lang="scss" scoped>
.analysis-prep {
  h1.rf-heading {
    margin: 0 0 30px 0;
    color: $c-white;
    @include tablet {
      @include font-size(40px, 50px, 500);
    }
    @include phone {
      @include font-size(28px, 34px, 500);
    }
  }

  .p-20 {
    margin: 0 auto;
    max-width: 1440px;
    padding: 50px 50px 100px;
  }
}
</style>
