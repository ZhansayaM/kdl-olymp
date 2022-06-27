<template>
  <div class="about-company__info">
    <RFHeading tag="h2"> {{ aboutData[0].attributes.title }} </RFHeading>
    <div
      class="text-normalize"
      v-html="aboutData[0].attributes.description"
    ></div>
    <!-- TODO: API /about отдельное поле для featuresblock -->
    <FeaturesBlock />
    <Articals :articals="articles" class="about-company__info_articles" />
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'
import Articals from 'organisms/Articals/index.vue'
import FeaturesBlock from 'molecules/FeaturesBlock/index.vue'

export default {
  name: 'AboutCompanyTemplate',
  components: {
    RFHeading,
    Articals,
    FeaturesBlock,
  },
  computed: {
    articles() {
      return this.$store.getters['pages/getAllPages'].slice(0, 5)
    },
    aboutData() {
      return this.$store.getters['about/getAbout']
    },
  },
}
</script>

<style lang="scss" scoped>
.about-company__info {
  padding: 60px 50px 100px;
  max-width: 1440px;
  margin: 0 auto;
  @include tablet {
    padding: 40px 20px;
  }
  @include phone {
    padding: 28px 16px 60px;
  }
  h2.rf-heading {
    margin: 0 0 20px;
    @include font-size(44px, 48px);
    @include medium-tablet {
      @include font-size(36px, 40px);
    }
    @include phone {
      margin-bottom: 12px;
      @include font-size(28px, 36px);
    }
    @include small-phone {
      @include font-size(22px, 27px);
    }
  }
  &__features-title {
    margin: 60px 0 40px;
  }
  &_articles {
    margin-top: 50px;
    @include phone {
      margin-top: 36px;
    }
  }
}
::v-deep {
  .articals-top {
    @include medium-tablet {
      padding-bottom: 0;
    }
    @include phone {
      padding-bottom: 17px;
    }
  }
  h2.rf-heading {
    @include font-size(28px, 34px);
    @include small-laptop {
      font-size: 1.4rem;
    }
    @include medium-tablet {
      font-size: 1.2rem;
    }
    @include tablet {
      font-size: 1.4rem;
    }
    @include phone {
      @include font-size(22px, 27px);
    }
  }
  p {
    width: 70%;
    margin-bottom: 15px;
    @include font-size(20px, 28px);
    @include wide-laptop {
      width: 100%;
    }
    @include phone {
      margin-bottom: 10px;
      @include font-size(14px, 20px);
    }
  }
  p:nth-child(3) {
    margin-bottom: 60px;
    @include phone {
      margin-bottom: 28px;
    }
  }
  h4 {
    margin: 0 0 20px;
    font-weight: 400;
    @include phone {
      margin-bottom: 18px;
      @include font-size(22px, 27px);
    }
  }
  .cards {
    @include phone {
      background: $c-white;
      border: 1px solid $c-basic-blue;
      border-radius: 5px;
      width: 224px;
      height: 247px;
      padding: 14px 10px;
    }
  }
  .cards__text {
    @include phone {
      @include font-size(14px, 20px);
    }
  }
  .articals__slider .vueperslides__arrows {
    top: -48px;
    right: 14px;
    @include phone {
      top: -43px;
      display: block;
    }
    svg {
      @include small-laptop {
        width: 13px;
        height: fit-content;
      }
      @include small-phone {
        width: 11px;
      }
    }
  }
  .articals-top__link {
    @include phone {
      display: none;
    }
  }
}
</style>
