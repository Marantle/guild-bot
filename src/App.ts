import log from 'Config/log'

class App {
  public message

  constructor() {
    this.message = 'hello'
  }

  public sayHello(): void {
    log.info(this.message)
    return this.message
  }
}

export default new App()
