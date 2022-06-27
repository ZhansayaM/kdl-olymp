<template>
  <div class="main__info">
    <img
      :src="manager.attributes.image_path"
      :alt="manager.attributes.image_path"
    />
    <div class="main__info__text">
      <RFHeading tag="h2">{{ manager.attributes.name }}</RFHeading>
      <p class="main__info__text__subtitle">
        {{ manager.attributes.leadership }}
      </p>
      <div class="text-normalize" v-html="manager.attributes.description"></div>
    </div>
  </div>
</template>

<script>
import RFHeading from 'atoms/RFHeading/index.vue'

export default {
  name: 'ManagementInfo',
  components: {
    RFHeading,
  },
  head: 'Руководство1',
  computed: {
    manager() {
      return this.$store.getters['leadership/getLeadership']
    },
  },
}
</script>

<style lang="scss" scoped>
.main__info {
  margin-top: 46px;
  gap: 40px;
  @include flex-row();
  @include tablet {
    margin-top: 30px;
    gap: 20px;
  }
  @include phone {
    margin-top: 26px;
    display: block;
    text-align: center;
  }
  div {
    text-align: left;
  }
  img {
    width: 420px;
    height: fit-content;
    border-radius: 5px;
    @include tablet {
      width: 14rem;
    }
    @include phone {
      width: 20rem;
    }
    @include small-phone {
      width: 100%;
    }
  }
  &__text {
    h2.rf-heading {
      margin: 0 0 10px;
      font-weight: 400;
      @include phone {
        margin: 18px 0 6px;
        @include font-size(28px, 34px, 500);
      }
    }
    > p {
      color: $c-gray;
      @include font-size(24px, 32px);
      @include medium-tablet {
        @include font-size(20px, 26px);
      }
      @include tablet {
        @include font-size(16px, 22px);
      }
      @include phone {
        @include font-size(14px, 20px);
      }
    }
  }
  ::v-deep {
    div.text-normalize {
      div {
        margin-top: 40px;
        @include tablet {
          margin-top: 28px;
        }
        > span {
          color: $c-gray;
          @include font-size(18px, 28px);
          @include phone {
            color: $c-dark;
            @include font-size(18px, 26px);
          }
        }
        p {
          margin-top: 10px;
          @include font-size(16px, 26px);
          @include phone {
            margin: 0 0 18px;
            @include font-size(14px, 20px);
          }
          span {
            @include font-size(16px, 26px, 500);
            @include phone {
              @include font-size(14px, 20px);
            }
          }
        }
        p:nth-child(2) {
          @include phone {
            margin-top: 14px;
          }
        }
      }
      div:first-child p {
        margin: 0;
        @include font-size(20px, 28px);
        @include phone {
          margin-top: 2px;
          @include font-size(14px, 20px);
        }
      }
      ul {
        margin-top: 10px;
        @include phone {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
