import { mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';
import state from '../mockedState';

describe('Given a Search component', () => {
  test('Should mount a Search component', () => {
    const wrapper = mount(Search, {
      global: {
        mocks: {
          $store: {
            state,
          },
          data: {
            searchInput: '',
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
