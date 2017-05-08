import Vue from 'vue'
import Test from '@/components/Test'

describe('Hello.vue', () => {
  it('renders data from the list', () => {
    const Constructor = Vue.extend(Test)
    const vm = new Constructor().$mount()

    expect(vm.$el.textContent).to.contain('welcome')
  })
})
