import App from './App'

declare const module: any

if (module.hot) {
  module.hot.accept()

  console.log('its real hot')

  module.hot.dispose(() => console.log('hot dispose'))
}

App.sayHello()
