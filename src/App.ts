import log from 'Utility/log'

class App {
  public message: string

  constructor(message: string) {
    this.message = message
  }

  public sayHello(): string {
    log.info(this.message)
    return this.message
  }
}

export default new App('hello')
