import getters from '@/store/getters';
import mockedState from '../mockedState';

describe('Given a getter', () => {
  test('Get current category name', () => {
    const result = getters.currentCategoryName(mockedState);

    expect(result).toEqual('Horror');
  });

  test('Get if is an id is in favorites', () => {
    const result = getters.isInFavorites(mockedState)('spirit');

    expect(result).toBe(true);
  });

  test('Get filtered voices', () => {
    const result = getters.filteredVoices(mockedState);

    expect(result).toEqual([{
      icon: 'VoicesVoiceIcon02.png',
      id: 'spirit',
      name: 'Spirit',
      tags: [
        'horror',
      ],
    }]);
  });

  test('Get filtered favorites', () => {
    const result = getters.filteredFavorites(mockedState);

    expect(result).toEqual([{
      icon: 'VoicesVoiceIcon02.png',
      id: 'spirit',
      name: 'Spirit',
      tags: [
        'horror',
      ],
    }]);
  });
});
