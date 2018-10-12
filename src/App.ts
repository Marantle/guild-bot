class App {
  public message

  constructor() {
    this.message = 'hello'
  }

  public sayHello(): void {
    console.log(this.message)
    return this.message
  }
}

export default new App()
