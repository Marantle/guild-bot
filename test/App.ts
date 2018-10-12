import { expect } from 'chai'
import App from '../src/App'
// TODO refer to https://medium.com/@FizzyInTheHall/run-typescript-mocha-tests-in-visual-studio-code-58e62a173575
// TODO and https://hackernoon.com/testing-node-js-in-2018-10a04dd77391
describe('App sayHello', () => {
  it('should say "hello"', () => {
    const text = App.sayHello()
    expect(text).to.equal('hello')
  })
})
