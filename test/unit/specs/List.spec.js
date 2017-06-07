import { mount } from 'avoriaz';
import List from '@/components/List'
import Vue from 'vue'

describe('List.vue', () => {

  it('renders data from the list', () => {
    const list = mount(List);
    expect(list.text()).to.contain('play games')

  })

  it('adds new item to list on click', () => {

    const list = mount(List);
    list.setData({
    	listItems: ['my', 'listItems'],
    	newItem: 'mynewItem',
    });

    const button = list.find('button')[0];
    button.simulate('click');

    expect(list.data().listItems).to.contain('mynewItem');
    expect(list.data().newItem).to.equal('');
  })
})
