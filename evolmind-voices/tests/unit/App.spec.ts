import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router';
import state from '../mockedState';

describe('Given an App', () => {
  test('Should mount an App', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state,
            mutations: {
              fetchVoices: [{
                id: 'speechifier-ovation',
                name: 'Speechifier ovation',
                icon: 'VoicesVoiceIcon03.png',
                tags: [
                  'devices',
                ],
              },
              {
                id: 'speechifier-protest',
                name: 'Speechifier protest',
                icon: 'VoicesVoiceIcon01.png',
                tags: [
                  'devices',
                ],
              },
              {
                id: 'spirit',
                name: 'Spirit',
                icon: 'VoicesVoiceIcon02.png',
                tags: [
                  'horror',
                ],
              }],
            },
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
