import { mount } from '@vue/test-utils';
import AddToFavorites from '@/components/AddToFavorites.vue';
import state from '../mockedState';

describe('Given an Add to favorites component', () => {
  test('Should mount AddToFavorites', () => {
    const wrapper = mount(AddToFavorites, {
      global: {
        mocks: {
          $store: {
            state,
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
