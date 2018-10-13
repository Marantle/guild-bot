import { expect } from 'chai'
import log from 'Utility/log'
import App from '../src/App'

describe('App sayHello', () => {
  it('should say "hello"', () => {
    const text = App.sayHello()
    expect(text).to.equal('hello')
  })
})
