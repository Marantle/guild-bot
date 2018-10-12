import log from 'Config/log'
import App from './App'

declare const module: any

if (module.hot) {
  module.hot.accept()

  log.info('its real hot')

  module.hot.dispose(() => log.info('hot dispose'))
}

App.sayHello()
