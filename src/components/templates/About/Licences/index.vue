<template>
  <section class="licences">
    <RFHeading tag="h2">Лицензии и сертификаты</RFHeading>
    <Tabs
      v-model="selectedTab"
      :tabs="tabs"
      type="wrap"
      type-tab="outline-primary"
    />
    <div class="licences-content">
      <DocumentPreviewCard
        v-for="(item, index) in tabItems"
        :key="index"
        :card="item"
      />
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import Tabs from 'molecules/Tabs/index.vue'
import DocumentPreviewCard from 'molecules/Cards/DocumentPreviewCard/index.vue'

export default Vue.extend({
  name: 'AboutLicencesTemplate',
  components: {
    RFHeading,
    Tabs,
    DocumentPreviewCard,
  },
  data() {
    return {
      selectedTab: 1,
      tabs: [
        {
          id: 1,
          title: 'Все',
        },
        {
          id: 2,
          title: 'Сертификаты',
        },
        {
          id: 3,
          title: 'Лицензии',
        },
        {
          id: 4,
          title: 'Аккредитации',
        },
      ],
      documents: [
        // Now there is no 'accreditation' category, need to remove this object after adding
        {
          type: 'accreditation',
          src: require('@/assets/images/documents/accreditation.png'),
          title:
            'Внешний контроль качества ТОО "МЫРЗА-ХАН", г. Астана, 2016 год',
        },
      ],
    }
  },
  computed: {
    tabItems() {
      switch (this.selectedTab) {
        case 1:
          return this.documents
        case 2:
          return this.documents.filter((item) => item.type === 'certificate')
        case 3:
          return this.documents.filter((item) => item.type === 'licence')
        case 4:
          return this.documents.filter((item) => item.type === 'accreditation')
        default:
          return []
      }
    },
  },
  mounted() {
    const licence = this.$store.getters['licence/getLicence']
    for (let i = 0; i < licence.length; i++) {
      const obj = {
        type: '',
        src: '',
        title: '',
      }
      // category_id = 50 -> licence
      // category_id = 51 -> certificate
      if (licence[i].attributes.category_id === 50) {
        obj.type = 'licence'
      } else obj.type = 'certificate'
      obj.src = licence[i].attributes.image_path
      obj.title = licence[i].attributes.title

      this.documents.push(obj)
    }
  },
})
</script>

<style lang="scss" scoped>
.licences {
  padding: 60px 50px;
  margin: 0 auto;
  max-width: 1440px;
  @include phone {
    padding: 28px 16px;
  }
  h2.rf-heading {
    margin: 0 0 20px;
    font-weight: 400;
  }
  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25%, 295px));
    justify-content: space-around;
    margin: 40px auto 60px;
  }
}
</style>
