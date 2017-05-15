import { mount } from 'avoriaz';
import Test from '@/components/Test'

describe('Test.vue', () => {
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
})
