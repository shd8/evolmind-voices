import { mount } from '@vue/test-utils';
import Dropdown from '@/components/Dropdown.vue';
import state from '../mockedState';

describe('Given a Dropdown component', () => {
  test('Should mount a Dropdown component', () => {
    const wrapper = mount(Dropdown, {
      global: {
        mocks: {
          $store: {
            state,
            getters: {
            },
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
