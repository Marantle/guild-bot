import log from './utility/log'

class App {
  public message: string

  constructor(message: string) {
    this.message = message
  }

  public sayHello(): string {
    return this.message
  }
}

export default new App('hello')
