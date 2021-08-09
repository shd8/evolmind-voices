import state from '@/store/state';

test('State call', () => {
  expect(state).toEqual({
    currentCategory: '',
    favorites: [],
    inputString: '',
    randomVoice: {},
    voices: [],
  });
});
