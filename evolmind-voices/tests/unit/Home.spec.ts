import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import state from '../mockedState';

describe('Given an Add to Home component', () => {
  test('Should mount a Home view', () => {
    const wrapper = mount(Home, {
      global: {
        mocks: {
          $store: {
            state,
            getters: {
              isInFavorites: jest.fn(),
              filteredVoices: [
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
