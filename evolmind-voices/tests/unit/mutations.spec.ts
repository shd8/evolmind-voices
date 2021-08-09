import mutations from '@/store/mutations';
import { State } from '@/types/interfaces';
import state from '../mockedState';

let mockedState: State;

describe('Given a mutation', () => {
  beforeEach(() => {
    mockedState = state;
  });
  test('Clear filter', () => {
    mutations.clearFilters(mockedState);

    expect(mockedState.currentCategory).toBe('');
  });

  test('Clear random voice', () => {
    mutations.clearRandomVoice(mockedState);

    expect(mockedState.randomVoice).toEqual({});
  });

  test('Generate random voice', () => {
    mutations.generateRandomVoice(mockedState);

    expect(mockedState.randomVoice).not.toEqual({});
  });

  test('Sort voices by alphabet', () => {
    mutations.sortByAlphabet(mockedState);

    expect(mockedState.voices).toEqual([
      {
        icon: 'VoicesVoiceIcon03.png',
        id: 'speechifier-ovation',
        name: 'Speechifier ovation',
        tags: [
          'devices',
        ],
      },
      {
        icon: 'VoicesVoiceIcon01.png',
        id: 'speechifier-protest',
        name: 'Speechifier protest',
        tags: [
          'devices',
        ],
      },
      {
        icon: 'VoicesVoiceIcon02.png',
        id: 'spirit',
        name: 'Spirit',
        tags: [
          'horror',
        ],
      },
    ]);
  });

  test('Sort voices by reverted alphabet', () => {
    mutations.sortByAlphabetReverse(mockedState);

    expect(mockedState.voices).toEqual([
      {
        icon: 'VoicesVoiceIcon02.png',
        id: 'spirit',
        name: 'Spirit',
        tags: [
          'horror',
        ],
      },
      {
        icon: 'VoicesVoiceIcon01.png',
        id: 'speechifier-protest',
        name: 'Speechifier protest',
        tags: [
          'devices',
        ],
      },
      {
        icon: 'VoicesVoiceIcon03.png',
        id: 'speechifier-ovation',
        name: 'Speechifier ovation',
        tags: [
          'devices',
        ],
      },

    ]);
  });

  test('Update favorites, add a favorite', () => {
    const payload = {
      id: 'zombie',
      name: 'Zombie',
      icon: 'VoicesVoiceIcon03.png',
      tags: [
        'horror',
      ],
    };
    mutations.updateFavorites(mockedState, payload);

    expect(mockedState.favorites).toEqual([
      {
        id: 'spirit',
        name: 'Spirit',
        icon: 'VoicesVoiceIcon02.png',
        tags: ['horror'],
      },
      {
        id: 'speechifier-protest',
        name: 'Speechifier protest',
        icon: 'VoicesVoiceIcon01.png',
        tags: ['devices'],
      },
      {
        id: 'zombie',
        name: 'Zombie',
        icon: 'VoicesVoiceIcon03.png',
        tags: ['horror'],
      },
    ]);
  });

  test('Update filter string', () => {
    mutations.updateFilterString(mockedState, 'horror');

    expect(mockedState.inputString).toBe('horror');
  });

  test('Update voices', () => {
    const payload = [{
      id: 'zombie',
      name: 'Zombie',
      icon: 'VoicesVoiceIcon03.png',
      tags: [
        'horror',
      ],
    }];
    mutations.updateVoices(mockedState, payload);

    expect(mockedState.voices).toEqual([
      {
        icon: 'VoicesVoiceIcon03.png',
        id: 'zombie',
        name: 'Zombie',
        tags: [
          'horror',
        ],
      },
    ]);
  });

  test('Update category tag', () => {
    mutations.updateCategoryTag(mockedState, 'horror');

    expect(mockedState.currentCategory).toBe('horror');
  });
});
