<template>
  <div class="calculate">
    <p class="calculate__title">{{ title }}</p>
    <Button
      @click="
        $router.push({
          name: 'calculator',
          query: { page: 1 },
        })
      "
    >
      {{ btntitle }}
    </Button>
    <img :src="require('@/assets/images/' + img)" alt="calculate image" />
  </div>
</template>

<script>
export default {
  name: 'Calculate',
  data() {
    return {
      title: 'Воспользуйтесь калькулятором, чтобы рассчитать затраты',
      btntitle: 'Рассчитать',
      img: 'calculate.png',
    }
  },
}
</script>

<style lang="scss" scoped>
.calculate {
  padding: 20px;
  width: 26.25rem;
  height: fit-content;
  min-width: 17.5rem;
  position: relative;
  background: radial-gradient(
    65.99% 154.98% at 97.54% -14.14%,
    #31b0ed 0%,
    #0087cb 100%
  );
  border-radius: 8px;
  @include phone {
    width: 100%;
    min-width: none;
  }
  &__title {
    margin-bottom: 75px;
    color: #fff;
    width: 83%;
    @include font-size(20px, 28px, 400);
    @include phone {
      position: relative;
      z-index: 2;
      @include font-size(18px, 26px, 400);
    }
  }
  button {
    color: #fff;
    padding: 6.5px 12px 7.5px 12px;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    @include font-size(16px, 24px, 400);
    @include phone {
      @include font-size(14px, 20px, 400);
    }
  }
  img {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 8rem;
  }
}
</style>
