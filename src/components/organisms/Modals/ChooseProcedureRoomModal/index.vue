<template>
  <Modal :show="show" @close="$emit('close')">
    <div
      slot="content"
      class="procedural-modal"
      :class="{ roomOpen: !findRoom }"
    >
      <aside>
        <div class="procedural-modal__head">
          <RFText variant="mid">Выбор процедурного кабинета</RFText>
        </div>
        <div class="procedural-modal__cards" :class="{ roomOpen: !findRoom }">
          <template v-if="!extended">
            <ProceduralRoomAddressCard
              v-for="room in procedureRooms"
              :key="room.id"
              :title="room.title"
              :location="room.location"
              :phone="room.phone"
            />
          </template>
          <template v-else>
            <ProceduralRoomAddressCard
              :title="chosenCard.title"
              :location="chosenCard.location"
              :phone="chosenCard.phone"
              :schedules="chosenCard.schedule"
              :tags="chosenCard.tags"
              :icons="chosenCard.icons"
              :detailed-view="true"
              @confirmChoice="chooseRoom"
            />
          </template>
        </div>
        <div v-if="!findRoom" class="btn-another" @click="ceaseCard">
          <img
            src="~@/assets/icons/arrow-left.svg"
            alt="back-arrow"
            class="btn-another__icon"
          />
          <button class="btn-another__btn" @click="onBack">
            Выбрать другой
          </button>
        </div>
      </aside>
      <div class="procedural-modal__map">
        <Map class="map" is-actionable @click="extendCard" />
        <Input
          v-if="findRoom"
          v-model="searchText"
          placeholder="Улица или название процедурного кабинета"
        />
        <SelectCity v-if="findRoom" />
      </div>
    </div>
  </Modal>
</template>

<script>
import ProceduralRoomAddressCard from 'molecules/Basket/ProceduralRoomAddress/index.vue'
import RFText from 'atoms/RFText/index.vue'
import Modal from 'molecules/Modal/index.vue'
import Map from 'organisms/Map/YandexMap/index.vue'
import Input from 'atoms/Input/index.vue'
import SelectCity from 'molecules/SelectCity/index.vue'

/**
 * Модальное окно выбор процедурного кабинета
 * @displayName ChooseProcedureRoomModal
 */
export default {
  name: 'ChooseProcedureRoomModal',
  components: {
    Modal,
    RFText,
    ProceduralRoomAddressCard,
    Map,
    Input,
    SelectCity,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    includeSchedule: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      findRoom: true,
      extended: undefined,
      searchText: '',
    }
  },
  computed: {
    procedureRooms() {
      return this.$store.state.procedureRoom.items
    },
    chosenCard() {
      return this.procedureRooms.find((room) => room.id === this.extended)
    },
  },
  methods: {
    extendCard() {
      this.extended = 1
      this.findRoom = false
    },
    ceaseCard() {
      this.extended = undefined
      this.findRoom = true
    },
    chooseRoom(appointment) {
      if (this.chosenCard)
        this.$store.commit('order/setProcedureRoom', this.chosenCard)
      if (appointment) this.$store.commit('order/setAppointment', appointment)

      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.procedural-modal {
  width: 100%;
  gap: 20px;
  @include flex-row();
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: $c-light-gray;
  }

  ::-webkit-scrollbar-thumb {
    background: $c-basic-blue;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: $c-blue;
  }
  aside {
    max-width: 380px;
    @include tablet {
      max-width: 100%;
    }
    .btn-another {
      align-items: center;
      cursor: pointer;
      margin-top: 43px;
      @include flex-row();
      &__icon {
        margin-right: 6px;
        @include block(4px, 10px);
      }
      &__btn {
        border: none;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        padding: 0;
        background: transparent;
        color: $c-primary;
        outline: none;
        @include font-size(14px, 20px);
        &:hover {
          border-bottom: 1px solid $c-primary;
        }
      }
    }
  }
  &__head {
    justify-content: space-between;
    @include flex-row();
    p {
      font-weight: 400;
      margin-bottom: 18px;
    }
  }
  &__cards {
    max-height: 60.5vh;
    overflow-y: auto;
    gap: 10px;
    padding-right: 11px;
    @include flex-column();
    @include medium-tablet {
      max-height: 54vh;
    }
    @include phone {
      max-height: 73vh;
    }
    ::v-deep .card .content {
      width: 333px;
      @include medium-tablet {
        width: 230px;
      }
      @include tablet {
        width: 100%;
      }
    }
  }
  &__cards.roomOpen {
    ::v-deep .card .content {
      @include medium-tablet {
        width: 100%;
      }
    }
  }
  &__map {
    width: 100%;
    height: 100%;
    position: relative;
    .map.ymap-container {
      width: 100%;
      height: 100%;
      @include tablet {
        display: none;
      }
    }
    input {
      position: absolute;
      top: 26px;
      left: 24px;
      background-color: $c-white;
      background-position: 15px 14px;
      width: 434px;
      height: 50px;
      @include font-size(16px, 22px);
      @include wide-laptop {
        width: 80%;
        background-position: 10px 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      @include tablet {
        display: none;
      }
    }
    ::v-deep .select-city {
      position: absolute;
      top: 26px;
      right: 24px;
      width: 195px;
      height: 50px;
      background: $c-white;
      border: 1px solid $c-primary;
      border-radius: 4px;
      padding: 13px 18px;
      background-image: url('assets/icons/arrowDown-blue.svg');
      background-repeat: no-repeat;
      background-position: 90% 50%;
      align-items: center;
      cursor: pointer;
      @include flex-row();
      @include wide-laptop {
        display: none;
      }
      &__btn {
        padding: 0;
        background: $c-white;
        color: $c-primary;
      }
      &__list {
        top: 50px;
        width: 195px;
      }
    }
  }

  @include tablet {
    flex-direction: column;
    position: relative;
    width: 100%;
  }
}
.procedural-modal.roomOpen {
  @include medium-tablet {
    flex-direction: column;
    overflow-y: auto;
  }
  aside {
    @include medium-tablet {
      max-width: 100%;
    }
  }
  .procedural-modal__cards {
    max-height: 100%;
  }
}
</style>
