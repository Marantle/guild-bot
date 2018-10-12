import { expect } from 'chai'
import App from '../src/App'
// TODO refer to https://medium.com/@FizzyInTheHall/run-typescript-mocha-tests-in-visual-studio-code-58e62a173575
describe('App sayHello', () => {
  it('should say "hello"', () => {
    const text = App.sayHello()
    expect(text).to.equal('hello')
  })
})
