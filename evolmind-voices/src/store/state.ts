import { Voice } from '@/types/interfaces';

const state = {
  voices: [] as Array<Voice>,
  favorites: [] as Array<Voice>,
  currentCategory: '',
  inputString: '',
};

export default state;
