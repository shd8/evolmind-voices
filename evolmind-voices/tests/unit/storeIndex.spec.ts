import store from '@/store/index';

test('State call', () => {
  expect(store.state.inputString).toBe('');
});
