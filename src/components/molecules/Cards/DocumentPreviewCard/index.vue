<template>
  <div class="document-card">
    <div class="document-wrapper">
      <img :src="card.src" />
    </div>
    <label>{{ card.title }}</label>
  </div>
</template>

<script>
export default {
  name: 'DocumentPreviewCard',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.document-card {
  width: 295px;
  .document-wrapper {
    width: 295px;
    height: 250px;
    background: $c-white;
    border: 1px solid $c-basic-blue;
    border-radius: 5px;
    padding: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  label {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
