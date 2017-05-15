import { mount } from 'avoriaz';
import Test from '@/components/Test'
import Error from '@/components/Error'
import Vue from 'vue'

describe('Test.vue', () => {

  window.Event = new Vue;

  it('renders data from the list', () => {
    const test = mount(Test);
    expect(test.text()).to.contain('welcome')

  })

  it('adds entry to list on click', () => {

    const test = mount(Test);
    test.setData({
    	list: ['my', 'list'],
    	entry: 'myEntry'
    });

    const button = test.find('button')[0];
    button.simulate('click');

    expect(test.data().list).to.contain('myEntry');
    expect(test.data().entry).to.equal('');
  })

    it('does not add empty string to list', () => {

        const test = mount(Test);
        test.setData({
          entry: ''
        });

        const button = test.find('button')[0];
        button.simulate('click');

        expect(test.data().list).to.not.contain('');
  })

    it('shows error if user tries to add empty shopping item', () => {



        const test = mount(Test);
        test.setData({
          entry: ''
        });

        const button = test.find('button')[0];
        button.simulate('click');

        expect(test.text()).to.contain('Please input your list item.');
  })
})
