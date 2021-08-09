import { mount } from '@vue/test-utils';
import Modal from '@/components/Modal.vue';
import state from '../mockedState';

describe('Given a Modal component', () => {
  test('Mount a Modal component', () => {
    const wrapper = mount(Modal, {
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
    const wrapper = mount(Modal, {
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

    console.log(wrapper.html());

    await wrapper.find('.modal__header-button').trigger('click');

    wrapper.unmount();
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
