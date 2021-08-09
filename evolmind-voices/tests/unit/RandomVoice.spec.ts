import { mount } from '@vue/test-utils';
import RandomVoice from '@/components/RandomVoice.vue';
import state from '../mockedState';

describe('Given a Modal component', () => {
  test('Mount a Modal component', () => {
    const wrapper = mount(RandomVoice, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state,
            getters: {
            },
            actions: {
            },
          },
        },
      },
      props: {
        isModalOpen: true,
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });

  test('Click on modal button', async () => {
    const wrapper = mount(RandomVoice, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state,
            getters: {
            },
            mutations: {
              clearRandomVoice: jest.fn(),
            },
            actions: {
            },
          },
        },
      },
      props: {
        isModalOpen: true,
      },
    });

    await wrapper.find('.fa-dice').trigger('click');
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
