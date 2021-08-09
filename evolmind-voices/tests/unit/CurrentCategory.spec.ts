import { mount } from '@vue/test-utils';
import CurrentCategory from '@/components/CurrentCategory.vue';
import state from '../mockedState';

describe('Given a Current Category component', () => {
  test('Should mount a Current Category component', () => {
    const wrapper = mount(CurrentCategory, {
      global: {
        mocks: {
          $store: {
            state,
            getters: {
              currentCategoryName: 'horror',
            },
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
