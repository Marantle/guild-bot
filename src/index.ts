import { Client } from 'discord.js'
import * as firebase from 'firebase-admin'
import App from './App'
import log from './utility/log'

declare const module: any

if (module.hot) {
  module.hot.accept()

  log.info('its real hot')

  module.hot.dispose(() => log.info('hot dispose'))
}

const client = new Client()
const cooltest = firebase.apps.length

log.info(App.sayHello())
