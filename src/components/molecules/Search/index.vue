<template>
  <div class="container">
    <RFHeading tag="h1">{{ title }}</RFHeading>
    <div class="container__search">
      <!-- TODO: wrap in form, add @keydown event with debounce -->
      <Input v-model="searchText" :placeholder="placeholder" />
      <Button
        size="big"
        class="container__search-btn"
        @click="$emit('search', searchText)"
      >
        {{ btnName }}
      </Button>
    </div>
    <RFText style-type="hint" variant="medium" class="container__hint">
      {{ example }}
      <nuxt-link v-if="text && text.link" class="link" :to="text.link">
        {{ text.text }}
      </nuxt-link>
      <span v-else>{{ text }}</span>
    </RFText>
  </div>
</template>

<script>
import Input from 'atoms/Input/index.vue'
import Button from 'atoms/Button/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'

export default {
  name: 'Search',
  components: {
    Input,
    Button,
    RFHeading,
    RFText,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    btnName: {
      type: String,
      default: '',
    },
    example: {
      type: String,
      default: '',
    },
    text: {
      type: [Object, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  @include flex-column();
  &__search {
    margin-bottom: 10px;
    @include flex-row();
    @include small-phone {
      margin-bottom: 5px;
    }
    &-btn {
      margin-left: 10px;
      height: 100%;
      padding: 16.5px 43px 18.5px;
      @include medium-tablet {
        padding: 15px 25px;
      }
      @include phone {
        display: none;
      }
    }
  }
  h1.rf-heading {
    margin: 0 0 20px 0;
  }
  p {
    @include small-phone {
      @include font-size(12px, 15px);
    }
  }
  .link {
    text-decoration-line: none;
  }
}
</style>
