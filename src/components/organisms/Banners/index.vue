<template>
  <section class="banner-cards">
    <div class="banner-cards_big">
      <Card
        v-for="(banner, index) in bannerBig"
        :key="index"
        :title="banner.title"
        :subtitle="banner.subtitle"
        :img="banner.img"
        :is-big="true"
        :link="banner.link"
      />
    </div>
    <div class="banner-cards_little">
      <Card
        v-for="(banner, index) in bannersLittle"
        :key="index"
        :title="banner.title"
        :img="banner.img"
        :link="banner.link"
      />
    </div>
  </section>
</template>

<script>
import Card from 'molecules/Cards/BannerCard/index.vue'

export default {
  name: 'Banner',
  components: {
    Card,
  },
  props: {
    banners: {
      type: Array,
      default: () => [{}],
    },
  },
  computed: {
    bannerBig() {
      return this.banners.slice(0, 1)
    },
    bannersLittle() {
      return this.banners.slice(1, 5)
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-cards {
  justify-content: space-between;
  gap: 40px;
  @include flex-row();
  @include medium-tablet {
    display: block;
  }
  &_big {
    width: 100%;
    @include medium-tablet {
      padding-bottom: 40px;
      text-align: center;
    }
    @include tablet {
      padding-bottom: 30px;
    }
    @include small-phone {
      padding-bottom: 10px;
    }
    ::v-deep {
      .cards,
      .cards img {
        width: 100%;
      }
    }
  }
  &_little {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-gap: 40px;
    grid-template-rows: 216px 216px;
    @include wide-laptop {
      grid-template-columns: 272px 272px;
    }
    @include laptop {
      grid-template-columns: 260px 260px;
      grid-template-rows: 201px 201px;
      grid-gap: 30px;
    }
    @include small-laptop {
      grid-template-columns: 215px 215px;
      grid-template-rows: 154px 154px;
      grid-gap: 20px;
    }
    @include wide-tablet {
      grid-template-rows: 144px 144px;
    }
    @include medium-tablet {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 145px 145px;
    }
    @include phone {
      grid-gap: 10px;
      grid-template-rows: 159px 159px;
    }
    .cards:first-child,
    .cards:last-child {
      .cards-little h4 {
        @include phone {
          width: 90%;
        }
      }
    }
    ::v-deep {
      .cards:last-child {
        img {
          width: 160px;
          height: 196px;
          @include laptop {
            width: 50%;
            height: fit-content;
          }
          @include medium-tablet {
            height: 90%;
            width: fit-content;
          }
          @include phone {
            width: 93%;
            height: fit-content;
            bottom: -5rem;
            right: -2rem;
          }
        }
      }
      .cards:nth-child(1),
      .cards:nth-child(2) {
        img {
          @include phone {
            right: -5px;
          }
        }
      }
    }
  }
  .cards {
    padding: 0;
  }
  .cards:hover {
    filter: drop-shadow(0 4px 40px rgba(41, 41, 75, 0.2));
  }
}
</style>
