<template>
  <div class="wrap">
    <div class="woman">
      <svg-icon name="womanBody" class="woman__body"></svg-icon>
      <svg-icon name="veins" class="woman__veins"></svg-icon>
      <svg-icon name="skeleton" class="woman__skeleton"></svg-icon>
      <svg-icon name="spine" class="woman__spine"></svg-icon>
      <svg-icon name="heart" class="woman__heart"></svg-icon>
      <svg-icon name="stomach" class="woman__stomach"></svg-icon>
      <svg-icon name="brain" class="woman__brain"></svg-icon>
      <svg-icon name="womanBrows" class="woman__brows"></svg-icon>
      <svg-icon name="womanCheeks" class="woman__cheeks"></svg-icon>
      <svg-icon name="womanNose" class="woman__nose"></svg-icon>
      <svg-icon name="rightLung" class="woman__rightLung"></svg-icon>
      <svg-icon name="leftLung" class="woman__leftLung"></svg-icon>
      <svg-icon name="gallbladder" class="woman__gallbladder"></svg-icon>
      <svg-icon name="rightKidney" class="woman__rightKidney"></svg-icon>
      <svg-icon name="leftKidney" class="woman__leftKidney"></svg-icon>
      <svg-icon name="womanLiver" class="woman__liver"></svg-icon>
      <svg-icon name="intestine" class="woman__intestine"></svg-icon>
      <svg-icon name="womanSexualOrgan" class="woman__sexualOrgan"></svg-icon>
      <svg-icon name="pancreas" class="woman__pancreas"></svg-icon>
      <svg-icon name="womanHair" class="woman__hair"></svg-icon>
      <svg-icon name="womanFlower" class="woman__flower1"></svg-icon>
      <svg-icon name="womanFlower" class="woman__flower2"></svg-icon>
      <Button @click="getData(12, 19, 9, 'right')">
        <svg-icon name="select" class="woman__selectHeart"></svg-icon>
      </Button>
      <Button @click="getData(7, 28.5, 9, 'right')">
        <svg-icon name="select" class="woman__selectSexual"></svg-icon>
      </Button>
      <Button @click="getData(18, 38.4, 6.5, 'left')">
        <svg-icon name="select" class="woman__selectKnees"></svg-icon>
      </Button>
      <Button @click="getData(6, 48, 10.8, 'right')">
        <svg-icon name="select" class="woman__selectAnkle"></svg-icon>
      </Button>
      <Button @click="getData(15, 27, 9, 'right')">
        <svg-icon name="select" class="woman__selectIntestine"></svg-icon>
      </Button>
      <Button @click="getData(14, 24.7, 9.5, 'right')">
        <svg-icon name="select" class="woman__selectPancreas"></svg-icon>
      </Button>
      <Button @click="getData(5, 30.5, 16.3, 'right')">
        <svg-icon name="select" class="woman__selectFingers"></svg-icon>
      </Button>
      <Button @click="getData(13, 24.2, 11.3, 'right')">
        <svg-icon name="select" class="woman__selectRightKidney"></svg-icon>
      </Button>
      <Button @click="getData(4, 25, 6.2, 'left')">
        <svg-icon name="select" class="woman__selectLeftKidney"></svg-icon>
      </Button>
      <Button @click="getData(16, 30, 9, 'right')">
        <svg-icon name="select" class="woman__selectEntry"></svg-icon>
      </Button>
      <Button @click="getData(8, 28, 2, 'left')">
        <svg-icon name="select" class="woman__selectWrist"></svg-icon>
      </Button>
      <Button @click="getData(3, 23, 6.7, 'left')">
        <svg-icon name="select" class="woman__selectLiver"></svg-icon>
      </Button>
      <Button @click="getData(2, 19.5, 7, 'left')">
        <svg-icon name="select" class="woman__selectBreast"></svg-icon>
      </Button>
      <Button @click="getData(11, 14.5, 9.3, 'right')">
        <svg-icon name="select" class="woman__selectRightThyroid"></svg-icon>
      </Button>
      <Button @click="getData(1, 14.5, 8.2, 'left')">
        <svg-icon name="select" class="woman__selectLeftThyroid"></svg-icon>
      </Button>
      <Button @click="getData(10, 11.7, 8.8, 'right')">
        <svg-icon name="select" class="woman__selectNose"></svg-icon>
      </Button>
      <Button @click="getData(0, 10, 8.2, 'left')">
        <svg-icon name="select" class="woman__selectBrain"></svg-icon>
      </Button>
      <Button @click="getData(9, 8.5, 9.6, 'right')">
        <svg-icon name="select" class="woman__selectHair"></svg-icon>
      </Button>
      <Button @click="getData(17, 21, 9, 'right')">
        <svg-icon name="select" class="woman__selectStomach"></svg-icon>
      </Button>
    </div>
    <BodyModal
      v-if="show"
      :data="data"
      :position="position"
      :side="side"
      class="wrap__body"
      @close="show = false"
    />
  </div>
</template>
<script>
import BodyModal from 'molecules/BodyModal/index.vue'
export default {
  name: 'WomanBody',
  components: { BodyModal },
  data() {
    return {
      organs: [
        {
          id: 0,
          title: 'Нервная система',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 1,
          title: 'Щитовидная железа',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 2,
          title: 'Молочная железа',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 3,
          title: 'Печень',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 4,
          title: 'Почки',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 5,
          title: 'Кроветворение',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 6,
          title: 'Имунная система',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 7,
          title: 'Половые органы',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 8,
          title: 'Суставы',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 9,
          title: 'Волосы',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 10,
          title: 'ЛОР-органы',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 11,
          title: 'Паращитовидная железа',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 12,
          title: 'Сердечно-сосудистая система',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 13,
          title: 'Надпочечники',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 14,
          title: 'Поджелудочная железа',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 15,
          title: 'Желудочно-кишечный тракт',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 16,
          title: 'Репродуктивная система (половые гормоны)',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 17,
          title: 'Система гемостаза (свертывание крови)',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
        {
          id: 18,
          title: 'Костная система',
          links: [
            { id: 0, title: 'Профиль Ревматологический полный' },
            { id: 1, title: 'Профиль Ревматологический расширенный' },
            { id: 2, title: 'Профиль Ревматологический стандартный' },
          ],
        },
      ],
      data: {},
      show: false,
      position: [0, 0],
      side: 'right',
    }
  },
  mounted() {
    this.$store.commit('womanBody/changeWomanBody', this.organs)
  },
  methods: {
    getData(id, top, left, side) {
      this.data = this.organs[id]
      this.side = side
      this.position[0] = top
      this.position[1] = left
      this.show = true
    },
  },
}
</script>
<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: -10em;
  left: calc(50% - 154.5px);
  z-index: 1;
  @include medium-tablet {
    top: -8em;
  }
  @include tablet {
    position: relative;
    width: 18em;
  }
  @include small-phone {
    left: calc(50% - 10.3em);
  }
}
.woman {
  position: relative;
  button {
    background: none;
    cursor: pointer;
    outline: none;
    border: none;
  }
  &__body,
  &__veins,
  &__skeleton,
  &__spine,
  &__heart,
  &__stomach,
  &__brain,
  &__brows,
  &__cheeks,
  &__nose,
  &__intestine,
  &__sexualOrgan,
  &__leftLung,
  &__rightLung,
  &__liver,
  &__gallbladder,
  &__rightKidney,
  &__leftKidney,
  &__pancreas,
  &__hair,
  &__flower1,
  &__flower2,
  &__selectHeart,
  &__selectSexual,
  &__selectKnees,
  &__selectAnkle,
  &__selectIntestine,
  &__selectPancreas,
  &__selectFingers,
  &__selectRightKidney,
  &__selectLeftKidney,
  &__selectEntry,
  &__selectWrist,
  &__selectLiver,
  &__selectBreast,
  &__selectLeftThyroid,
  &__selectRightThyroid,
  &__selectNose,
  &__selectBrain,
  &__selectHair,
  &__selectStomach {
    position: absolute;
  }
  &__selectPancreas,
  &__selectLiver,
  &__selectIntestine,
  &__selectHeart,
  &__selectAnkle,
  &__selectLeftKidney,
  &__selectKnees,
  &__selectSexual,
  &__selectHair,
  &__selectFingers,
  &__selectStomach,
  &__selectRightKidney,
  &__selectBrain,
  &__selectEntry,
  &__selectWrist,
  &__selectBreast,
  &__selectNose,
  &__selectLeftThyroid,
  &__selectRightThyroid {
    height: 0.8em;
    width: 0.8em;
  }
  &__selectStomach {
    top: 21em;
    left: 9em;
    @include phone {
      left: 12em;
    }
    @include small-phone {
      left: 9.8em;
    }
  }
  &__selectHair {
    top: 8.5em;
    left: 9.6em;
    @include phone {
      left: 12.6em;
    }
    @include small-phone {
      left: 10.4em;
    }
  }
  &__selectBrain {
    top: 10em;
    left: 8.2em;
    @include phone {
      left: 11.2em;
    }
    @include small-phone {
      left: 9em;
    }
  }
  &__selectNose {
    top: 11.7em;
    left: 8.8em;
    @include phone {
      left: 11.8em;
    }
    @include small-phone {
      left: 9.6em;
    }
  }
  &__selectRightThyroid {
    top: 14.5em;
    left: 9.3em;
    @include phone {
      left: 12.3em;
    }
    @include small-phone {
      left: 10.1em;
    }
  }
  &__selectLeftThyroid {
    top: 14.5em;
    left: 8.2em;
    @include phone {
      left: 11.2em;
    }
    @include small-phone {
      left: 9em;
    }
  }
  &__selectBreast {
    top: 19.5em;
    left: 7em;
    @include phone {
      left: 10em;
    }
    @include small-phone {
      left: 7.8em;
    }
  }
  &__selectLiver {
    top: 23em;
    left: 6.7em;
    @include phone {
      left: 9.7em;
    }
    @include small-phone {
      left: 7.5em;
    }
  }
  &__selectLeftKidney {
    top: 25em;
    left: 6.2em;
    @include phone {
      left: 9.2em;
    }
    @include small-phone {
      left: 7em;
    }
  }
  &__selectWrist {
    top: 28em;
    left: 2em;
    @include phone {
      left: 5em;
    }
    @include small-phone {
      left: 2.8em;
    }
  }
  &__selectEntry {
    top: 30em;
    left: 9em;
    @include phone {
      left: 12em;
    }
    @include small-phone {
      left: 9.8em;
    }
  }
  &__selectRightKidney {
    top: 24.2em;
    left: 11.3em;
    @include phone {
      left: 14.3em;
    }
    @include small-phone {
      left: 12.1em;
    }
  }
  &__selectFingers {
    top: 30.5em;
    left: 16.3em;
    @include phone {
      left: 19.3em;
    }
    @include small-phone {
      left: 17.1em;
    }
  }
  &__selectPancreas {
    top: 24.7em;
    left: 9.5em;
    @include phone {
      left: 12.5em;
    }
    @include small-phone {
      left: 10.3em;
    }
  }
  &__selectIntestine {
    top: 27em;
    left: 9em;
    @include phone {
      left: 12em;
    }
    @include small-phone {
      left: 9.8em;
    }
  }
  &__selectAnkle {
    top: 48em;
    left: 10.8em;
    @include phone {
      left: 13.8em;
    }
    @include small-phone {
      left: 11.6em;
    }
  }
  &__selectKnees {
    top: 38.4em;
    left: 6.5em;
    @include phone {
      left: 9.5em;
    }
    @include small-phone {
      left: 7.2em;
    }
  }
  &__body {
    height: 60em;
    @include phone {
      height: 44em;
      top: 8.5em;
    }
    @include small-phone {
      width: 20em;
    }
  }
  &__veins {
    height: 41em;
    top: 9.5em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__skeleton {
    top: 9.3em;
    left: -0.1em;
    height: 40em;
    @include small-phone {
      width: 20em;
    }
  }
  &__spine {
    height: 8em;
    top: 14.05em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__heart {
    height: 3em;
    top: 18.3em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__selectHeart {
    top: 19em;
    left: 9em;
    @include phone {
      left: 12em;
    }
    @include small-phone {
      left: 9.8em;
    }
  }
  &__stomach {
    height: 5em;
    top: 21.2em;
    left: 0.1em;
    @include small-phone {
      width: 20em;
    }
  }
  &__brain {
    height: 1.5em;
    top: 9.4em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__brows {
    height: 0.5em;
    top: 11.05em;
    left: -0.25em;
    @include small-phone {
      width: 20em;
    }
  }
  &__cheeks {
    height: 1em;
    top: 12.2em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__nose {
    height: 0.6em;
    top: 11.8em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__intestine {
    height: 6em;
    top: 25em;
    left: -0.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__sexualOrgan {
    height: 3.2em;
    top: 27.8em;
    left: -0.1em;
    @include small-phone {
      width: 20em;
    }
  }
  &__selectSexual {
    top: 28.5em;
    left: 9em;
    @include phone {
      left: 12em;
    }
    @include small-phone {
      left: 9.8em;
    }
  }
  &__rightLung {
    height: 4.5em;
    top: 17em;
    left: 1.8em;
    @include small-phone {
      width: 20em;
    }
  }
  &__leftLung {
    height: 4.5em;
    top: 17em;
    left: -2.1em;
    @include small-phone {
      width: 20em;
    }
  }
  &__liver {
    height: 3.5em;
    top: 21.7em;
    left: -0.9em;
    @include small-phone {
      width: 20em;
    }
  }
  &__gallbladder {
    height: 0.7em;
    top: 23.5em;
    left: -0.95em;
    @include small-phone {
      width: 20em;
    }
  }
  &__rightKidney {
    height: 2em;
    top: 24.2em;
    left: 2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__leftKidney {
    height: 2em;
    top: 24.5em;
    left: -2.2em;
    @include small-phone {
      width: 20em;
    }
  }
  &__pancreas {
    height: 1.5em;
    top: 24.1em;
    left: 0.4em;
    @include small-phone {
      width: 20em;
    }
  }
  &__hair {
    height: 8em;
    top: 8em;
    left: -0.05em;
    @include small-phone {
      width: 20em;
    }
  }
  &__flower1 {
    height: 2em;
    top: 19.2em;
    left: -1.9em;
    @include small-phone {
      width: 20em;
    }
  }
  &__flower2 {
    height: 2em;
    top: 19.2em;
    left: 1.9em;
    @include small-phone {
      width: 20em;
    }
  }
}
</style>
