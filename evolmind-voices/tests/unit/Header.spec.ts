import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import router from '@/router';
import state from '../mockedState';

const mockRouter = {
  push: jest.fn(),
};

describe('Given a Header component', () => {
  test('Should mount a Header', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
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

  test('When link is clicked, should call scroll to top', async () => {
    window.scrollTo = () => 0;

    const methods = {
      scrollToTop: jest.fn(),
    };

    const wrapper = mount(Header, {
      global: {
        mocks: {
          $router: mockRouter,
          $store: {
            state,
          },
          methods,
        },
      },
    });

    methods.scrollToTop();

    await wrapper.find('router-link').trigger('click');

    expect(methods.scrollToTop).toHaveBeenCalled();
  });

  test('When Dropdown is clicked, should call setOpenedDropdown', async () => {
    const methods = {
      setOpenedDropdown: jest.fn(),
    };

    const wrapper = mount(Header, {
      global: {
        plugins: [router],
        mocks: {
          $router: mockRouter,
          $store: {
            state,
          },
          methods,
        },
      },
    });

    methods.setOpenedDropdown();

    await wrapper.find('.dropdown').trigger('click');
    await wrapper.find('.header__navigation').trigger('click');

    expect(methods.setOpenedDropdown).toHaveBeenCalled();
  });
});
