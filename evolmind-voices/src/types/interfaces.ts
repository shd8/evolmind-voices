interface Voice {
    id: string,
    name: string,
    icon: string,
    tags: Array<string>
}

interface State {
    voices: Array<Voice>,
    favorites: Array<Voice>,
    filteredVoices: Array<Voice>,
    filteredFavorites: Array<Voice>
}

export { Voice, State };
