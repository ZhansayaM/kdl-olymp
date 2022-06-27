<template>
  <div class="amount">
    <Button @click="subtract">
      <svg-icon name="minus"></svg-icon>
    </Button>
    <p>{{ amount }}</p>
    <Button @click="add">
      <svg-icon name="plus"></svg-icon>
    </Button>
  </div>
</template>

<script>
export default {
  name: 'AmountSelect',
  data() {
    return {
      amount: 0,
    }
  },
  methods: {
    add() {
      this.amount += 1
      this.$emit('amount', this.amount)
    },
    subtract() {
      if (this.amount > 0) {
        this.amount -= 1
        this.$emit('amount', this.amount)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.amount {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-column-gap: 6px;

  p {
    background: $c-white;
    height: 52px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    @include flex-row();
    @include font-size(18px, 28px);
  }
  button {
    cursor: pointer;
    width: 52px;
    height: 52px;
    background: $c-white;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    @include flex-row();
    svg {
      width: 16px;
    }
  }
}
</style>
