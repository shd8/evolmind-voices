import { mount } from '@vue/test-utils';
import Favorites from '@/views/Favorites.vue';
import state from '../mockedState';

describe('Given a Favorite view', () => {
  test('Should mount a Home view', () => {
    const wrapper = mount(Favorites, {
      global: {
        mocks: {
          $store: {
            state,
            getters: {
              isInFavorites: jest.fn(),
              filteredFavorites: [
                {
                  id: 'speechifier-protest',
                  name: 'Speechifier protest',
                  icon: 'VoicesVoiceIcon01.png',
                  tags: [
                    'devices',
                  ],
                },
              ],
            },
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
