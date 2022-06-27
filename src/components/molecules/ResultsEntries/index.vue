<template>
  <div class="entries">
    <RFInput :id="1" :type="'text'">
      <template #label> {{ title }} </template>
    </RFInput>
    <RFInput :id="2" :type="'password'">
      <template #label> {{ passwordLbl }} </template>
    </RFInput>
    <div class="entries__terms">
      <RFCheckbox :id="3" :value="false" />
      <p>Принимаю условия <a href="#">пользовательского соглашения</a>.</p>
    </div>
    <Button class="entries__btn" @click="redirect"> {{ btnTitle }} </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'

/**
 * 'PAGES/Main'
 * @displayName ProceduralRoom
 */
export default Vue.extend({
  name: 'ResultsEntries',
  components: { RFInput, RFCheckbox },
  data() {
    return {
      ready: true,
      title: 'Номер заявки',
      passwordLbl: 'Пароль',
      btnTitle: 'Показать результаты',
    }
  },
  methods: {
    redirect() {
      if (this.ready === false) this.$router.push('results-not-ready')
      else this.$router.push('results-ready')
    },
  },
})
</script>

<style lang="scss" scoped>
.entries {
  margin-top: 25px;
  .rf-input {
    max-width: 26.25rem;
    margin-bottom: 30px;
    color: #8296a9;
    @include font-size(16px, 24px, 400);
    @include phone {
      max-width: 100%;
      margin-bottom: 15px;
    }
  }
  .rf-input__field {
    @include phone {
      width: 100%;
    }
  }
  &__terms {
    display: flex;
    margin: 6px 0 47.5px 0;
    align-items: center;
    p {
      @include font-size(14px, 17px, 400);
      a {
        color: $c-dark;
        @include font-size(14px, 17px, 400);
      }
    }
  }
  &__btn {
    color: #fff;
    padding: 12.5px 0;
    text-align: center;
    width: 16.875rem;
    background: #31b0ed;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    @include font-size(18px, 30px, 400);
    @include phone {
      width: 100%;
      @include font-size(16px, 20px, 400);
    }
  }
}
</style>
