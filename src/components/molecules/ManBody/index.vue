<template>
  <div class="wrap">
    <div class="man">
      <svg-icon name="manBody" class="man__body"></svg-icon>
      <svg-icon name="veins" class="man__veins"></svg-icon>
      <svg-icon name="spine" class="man__spine"></svg-icon>
      <svg-icon name="stomach" class="man__stomach"></svg-icon>
      <svg-icon name="heart" class="man__heart"></svg-icon>
      <svg-icon name="brain" class="man__brain"></svg-icon>
      <svg-icon name="manBrows" class="man__brows"></svg-icon>
      <svg-icon name="manCheeks" class="man__cheeks"></svg-icon>
      <svg-icon name="manNose" class="man__nose"></svg-icon>
      <svg-icon name="rightLung" class="man__rightLung"></svg-icon>
      <svg-icon name="leftLung" class="man__leftLung"></svg-icon>
      <svg-icon name="gallbladder" class="man__gallbladder"></svg-icon>
      <svg-icon name="pancreas" class="man__pancreas"></svg-icon>
      <svg-icon name="leftKidney" class="man__leftKidney"></svg-icon>
      <svg-icon name="rightKidney" class="man__rightKidney"></svg-icon>
      <svg-icon name="intestine" class="man__intestine"></svg-icon>
      <svg-icon name="manLiver" class="man__liver"></svg-icon>
      <svg-icon name="manHair" class="man__hair"></svg-icon>
      <svg-icon name="manSexualOrgan" class="man__sexualOrgan"></svg-icon>
      <Button @click="getData(17, 38.4, 7.4, 'left')">
        <svg-icon name="select" class="man__selectKnees"></svg-icon>
      </Button>
      <Button @click="getData(12, 17, 9.6, 'right')">
        <svg-icon name="select" class="man__selectHeart"></svg-icon>
      </Button>
      <Button @click="getData(18, 48, 11.5, 'right')">
        <svg-icon name="select" class="man__selectAnkle"></svg-icon>
      </Button>
      <Button @click="getData(15, 25.5, 10, 'right')">
        <svg-icon name="select" class="man__selectIntestine"></svg-icon>
      </Button>
      <Button @click="getData(17, 23.2, 10.4, 'right')">
        <svg-icon name="select" class="man__selectPancreas"></svg-icon>
      </Button>
      <Button @click="getData(5, 29.5, 16.9, 'right')">
        <svg-icon name="select" class="man__selectFingers"></svg-icon>
      </Button>
      <Button @click="getData(13, 22.5, 12.3, 'right')">
        <svg-icon name="select" class="man__selectRightKidney"></svg-icon>
      </Button>
      <Button @click="getData(4, 23.6, 6.6, 'left')">
        <svg-icon name="select" class="man__selectLeftKidney"></svg-icon>
      </Button>
      <Button @click="getData(8, 26.5, 2.7, 'left')">
        <svg-icon name="select" class="man__selectWrist"></svg-icon>
      </Button>
      <Button @click="getData(3, 21.3, 7.3, 'left')">
        <svg-icon name="select" class="man__selectLiver"></svg-icon>
      </Button>
      <Button @click="getData(11, 12.5, 10.1, 'right')">
        <svg-icon name="select" class="man__selectRightThyroid"></svg-icon>
      </Button>
      <Button @click="getData(1, 12.5, 9.1, 'left')">
        <svg-icon name="select" class="man__selectLeftThyroid"></svg-icon>
      </Button>
      <Button @click="getData(10, 10, 9.65, 'right')">
        <svg-icon name="select" class="man__selectNose"></svg-icon>
      </Button>
      <Button @click="getData(0, 7.8, 9, 'left')">
        <svg-icon name="select" class="man__selectBrain"></svg-icon>
      </Button>
      <Button @click="getData(9, 6.8, 11.1, 'right')">
        <svg-icon name="select" class="man__selectHair"></svg-icon>
      </Button>
      <Button @click="getData(6, 19.2, 9.7, 'right')">
        <svg-icon name="select" class="man__selectStomach"></svg-icon>
      </Button>
      <Button @click="getData(14, 30, 10.4, 'right')">
        <svg-icon name="select" class="man__selectEgg"></svg-icon>
      </Button>
      <Button @click="getData(7, 30.5, 9.3, 'left')">
        <svg-icon name="select" class="man__selectSexual"></svg-icon>
      </Button>
      <img src="~icons/manProstata.png" alt="prostata" class="man__prostata" />
      <Button @click="getData(2, 28.8, 9.1, 'left')">
        <svg-icon name="select" class="man__selectProstata"></svg-icon>
      </Button>
      <BodyModal
        v-if="show"
        :data="data"
        :position="position"
        :side="side"
        class="wrap__body"
        @close="show = false"
      />
    </div>
  </div>
</template>
<script>
import BodyModal from 'molecules/BodyModal/index.vue'
export default {
  name: 'ManBody',
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
          title: 'Предстательная железа',
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
    this.$store.commit('manBody/changeManBody', this.organs)
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
    top: -6em;
  }
  @include tablet {
    position: relative;
    width: 18em;
  }
  @include small-phone {
    left: calc(50% - 13.7em);
  }
}
.man {
  position: relative;
  button {
    background: none;
    cursor: pointer;
    outline: none;
    border: none;
  }
  &__body,
  &__veins,
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
  &__prostata,
  &__selectProstata,
  &__rightLung,
  &__liver,
  &__gallbladder,
  &__rightKidney,
  &__leftKidney,
  &__pancreas,
  &__hair,
  &__selectHeart,
  &__selectSexual,
  &__selectKnees,
  &__selectAnkle,
  &__selectIntestine,
  &__selectPancreas,
  &__selectFingers,
  &__selectRightKidney,
  &__selectLeftKidney,
  &__selectEgg,
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
  &__selectProstata,
  &__selectRightKidney,
  &__selectBrain,
  &__selectEgg,
  &__selectWrist,
  &__selectNose,
  &__selectLeftThyroid,
  &__selectRightThyroid {
    height: 0.8em;
    width: 0.8em;
  }
  &__selectProstata {
    top: 28.8em;
    left: 9.1em;
    @include phone {
      left: 12.1em;
    }
    @include small-phone {
      left: 11.9em;
    }
  }
  &__selectStomach {
    top: 19.2em;
    left: 9.7em;
    @include phone {
      left: 12.7em;
    }
    @include small-phone {
      left: 12.5em;
    }
  }
  &__selectHair {
    top: 6.8em;
    left: 11.1em;
    @include phone {
      left: 14.1em;
    }
    @include small-phone {
      left: 13.9em;
    }
  }
  &__selectBrain {
    top: 7.8em;
    left: 9em;
    @include phone {
      left: 12em;
    }
    @include small-phone {
      left: 11.8em;
    }
  }
  &__selectNose {
    top: 10em;
    left: 9.65em;
    @include phone {
      left: 12.65em;
    }
    @include small-phone {
      left: 12.45em;
    }
  }
  &__selectRightThyroid {
    top: 12.5em;
    left: 10.1em;
    @include phone {
      left: 13.1em;
    }
  }
  &__selectLeftThyroid {
    top: 12.5em;
    left: 9.1em;
    @include phone {
      left: 12.1em;
    }
    @include small-phone {
      left: 11.9em;
    }
  }
  &__selectLiver {
    top: 21.3em;
    left: 7.3em;
    @include phone {
      left: 10.3em;
    }
    @include small-phone {
      left: 10.1em;
    }
  }
  &__selectLeftKidney {
    top: 23.6em;
    left: 6.6em;
    @include phone {
      left: 9.6em;
    }
    @include small-phone {
      left: 9.4em;
    }
  }
  &__selectWrist {
    top: 26.5em;
    left: 2.7em;
    @include phone {
      left: 5.7em;
    }
    @include small-phone {
      left: 5.5em;
    }
  }
  &__selectEgg {
    top: 30em;
    left: 10.4em;
    @include phone {
      left: 13.4em;
    }
    @include small-phone {
      left: 13.2em;
    }
  }
  &__selectRightKidney {
    top: 22.5em;
    left: 12.3em;
    @include phone {
      left: 15.3em;
    }
    @include small-phone {
      left: 15.1em;
    }
  }
  &__selectFingers {
    top: 29.5em;
    left: 16.9em;
    @include phone {
      left: 19.9em;
    }
  }
  &__selectPancreas {
    top: 23.2em;
    left: 10.4em;
    @include phone {
      left: 13.4em;
    }
    @include small-phone {
      left: 13.2em;
    }
  }
  &__selectIntestine {
    top: 25.5em;
    left: 10em;
    @include phone {
      left: 13em;
    }
    @include small-phone {
      left: 12.8em;
    }
  }
  &__selectAnkle {
    top: 48em;
    left: 11.5em;
    @include phone {
      left: 14.5em;
    }
    @include small-phone {
      left: 15em;
    }
  }
  &__selectKnees {
    top: 38.4em;
    left: 7.4em;
    @include phone {
      left: 10.4em;
    }
    @include small-phone {
      left: 10.2em;
    }
  }
  &__body {
    height: 57em;
    width: 20em;
    @include phone {
      left: 3em;
    }
    @include small-phone {
      width: 20em;
    }
  }
  &__veins {
    height: 42em;
    top: 7.5em;
    left: 0.5em;
    @include small-phone {
      width: 20em;
      left: 3em;
    }
  }
  &__spine {
    height: 8em;
    top: 12.05em;
    left: 0.6em;
    @include small-phone {
      width: 20em;
      left: 3em;
    }
  }
  &__heart {
    height: 3em;
    top: 16.3em;
    left: 0.5em;
    @include small-phone {
      left: 2.9em;
      width: 20em;
    }
  }
  &__selectHeart {
    top: 17em;
    left: 9.6em;
    @include phone {
      left: 12.6em;
    }
    @include small-phone {
      left: 12.4em;
    }
  }
  &__stomach {
    height: 6em;
    top: 19em;
    left: 0.9em;
    @include small-phone {
      left: 3.3em;
      width: 20em;
    }
  }
  &__brain {
    height: 1.6em;
    top: 7.2em;
    left: 0.65em;
    @include small-phone {
      left: 3.05em;
      width: 20em;
    }
  }
  &__brows {
    height: 0.6em;
    top: 9.05em;
    left: 0.6em;
    @include small-phone {
      left: 3em;
      width: 20em;
    }
  }
  &__cheeks {
    height: 1em;
    top: 10.3em;
    left: 0.65em;
    @include small-phone {
      left: 3.05em;
      width: 20em;
    }
  }
  &__nose {
    height: 0.6em;
    top: 10em;
    left: 0.7em;
    @include small-phone {
      left: 3.1em;
      width: 20em;
    }
  }
  &__intestine {
    height: 7em;
    top: 23.5em;
    left: 0.6em;
    @include small-phone {
      left: 3em;
      width: 20em;
    }
  }
  &__sexualOrgan {
    height: 5em;
    top: 26.8em;
    left: 0.5em;
    @include small-phone {
      left: 2.9em;
      width: 20em;
    }
  }
  &__prostata {
    height: 3em;
    top: 26.8em;
    left: 9em;
    @include phone {
      left: 12em;
    }
  }
  &__selectSexual {
    top: 30.5em;
    left: 9.3em;
    @include phone {
      left: 12.3em;
    }
    @include small-phone {
      left: 12.1em;
    }
  }
  &__rightLung {
    height: 5em;
    top: 15em;
    left: 2.7em;
    @include small-phone {
      left: 5.1em;
      width: 20em;
    }
  }
  &__leftLung {
    height: 5em;
    top: 15em;
    left: -1.5em;
    @include small-phone {
      left: 0.9em;
      width: 20em;
    }
  }
  &__liver {
    height: 3.5em;
    top: 19.9em;
    left: -0.4em;
    @include small-phone {
      left: 2em;
      width: 20em;
    }
  }
  &__gallbladder {
    height: 0.7em;
    top: 21.8em;
    left: -0.5em;
    @include small-phone {
      left: 0.9em;
      width: 20em;
    }
  }
  &__rightKidney {
    height: 2.2em;
    top: 22.6em;
    left: 3em;
    @include small-phone {
      left: 5.4em;
      width: 20em;
    }
  }
  &__leftKidney {
    height: 2.2em;
    top: 22.8em;
    left: -2em;
    @include small-phone {
      left: 0.4em;
      width: 20em;
    }
  }
  &__pancreas {
    height: 1.6em;
    top: 22.6em;
    left: 1.1em;
    @include small-phone {
      left: 3.5em;
      width: 20em;
    }
  }
  &__hair {
    height: 3.7em;
    top: 6.1em;
    left: 0.6em;
    @include small-phone {
      width: 20em;
      left: 3em;
    }
  }
}
</style>
