import { expect } from 'chai'
import App from '../src/App'
import log from '../src/utility/log'

describe('App sayHello', () => {
  it('should say "hello"', () => {
    const text = App.sayHello()
    expect(text).to.equal('hello')
  })
})
