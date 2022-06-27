<template>
  <div class="upload">
    <ul v-if="values.length > 0">
      <li v-for="(file, index) of values" :key="index">
        <span>{{ file.name }}</span>
        <button type="button" @click="onRemoveFile(file.id)">
          <i class="remove"></i>
        </button>
      </li>
    </ul>

    <button type="button" @click.prevent="onUploadFile" @blur="$emit('blur')">
      <i class="clip"></i> Прикрепить файл
    </button>

    <p v-if="(typeof error === 'string' && error) || errorSize" class="error">
      {{ error || errorSize }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Элемент input upload file
 * @displayName UploadFile
 */
export default Vue.extend({
  name: 'UploadFile',
  model: {
    prop: 'values',
    event: 'change',
  },
  props: {
    /**
     * формат загружаемых файлов
     */
    accept: {
      type: String,
      default:
        'application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain,application/pdf,image/*',
    },
    /**
     * @model
     */
    values: {
      type: Array,
      default: () => [],
    },
    /**
     * Ошибка поля
     */
    error: {
      type: [String, Boolean],
      default: false,
    },
    /**
     * Возможность загружать несколько файлов
     */
    isMultiple: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      errorSize: '' as string,
    }
  },
  computed: {
    model: {
      get(): Array<any> {
        return this.values
      },
      set(newValues: any): void {
        /**
         * Назначит активный таб
         * @event change
         * @property {any} newValues new value set
         */
        this.$emit('change', newValues)
      },
    },
  },
  watch: {
    values() {
      this.errorSize = ''
    },
  },
  methods: {
    uploadFile() {
      const fileInput = document.createElement('input')
      fileInput.type = 'file'
      fileInput.accept = this.accept
      fileInput.style.display = 'none'
      document.body.appendChild(fileInput)
      fileInput.click()

      return new Promise((resolve) => {
        fileInput.onchange = () => {
          if (fileInput && fileInput.files) resolve(fileInput.files[0])
        }
      })
    },
    /**
     * метод для загрузги файла
     */
    onUploadFile(): void {
      this.uploadFile().then((file: any) => {
        if (file.size > 10000000) {
          this.errorSize = 'Размер файла больше чем 10 мб'
        } else if (this.isMultiple) {
          this.$emit('change', [
            Object.assign(file, { id: new Date().toString() }),
            ...this.values,
          ])
        } else {
          this.$emit('change', [
            Object.assign(file, { id: new Date().toString() }),
          ])
        }
      })
    },
    /**
     * метод для удаление файла
     */
    onRemoveFile(fileId: String): void {
      this.$emit(
        'change',
        this.values.filter((file: any) => file.id !== fileId)
      )
    },
  },
})
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;
  > ul {
    margin-bottom: 30px;
    > li {
      align-items: center;
      justify-content: space-between;
      @include flex-row();

      > span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @include font-size(15px, 18px);
      }
      > button {
        background: transparent;
        border: none;
        margin: 0;
        padding: 0;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        @include flex-row();
        .remove {
          transition: transform 0.3s;
          margin-left: 10px;
          @include block(24px, 12px);
          @include bg('~assets/icons/close-gray.svg', center center/contain);
        }
        &:hover {
          .remove {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  button {
    height: 48px;
    align-items: center;
    background: $c-white;
    border: 1px solid $c-white;
    border-radius: 3px;
    font-family: $f-text;
    font-size: 15px;
    line-height: 18px;
    color: $c-dark;
    opacity: 1;
    transition: opacity 0.3s;
    cursor: pointer;
    margin: 0;
    padding: 0 18px;
    @include flex-row();

    &:hover {
      opacity: 0.7;
    }

    &:active {
      transform: translateY(1px);
    }

    .clip {
      margin-right: 8px;
      @include block(24px, 12px);
      @include bg('~assets/icons/clip.svg', center center/contain);
    }
  }
}
.error {
  margin: 0;
  margin-top: 8px;
  color: $c-error;
  @include font-size(13px, 16px);
}
</style>

<docs>
- пример использования

```jsx
<UploadFile accept="image/jpeg,image/png" />
```
</docs>
