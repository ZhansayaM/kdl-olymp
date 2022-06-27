import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '86a51ee3-f368-4fc1-aad6-dbddbe8a3be6',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}
Vue.use(YmapPlugin, settings)
