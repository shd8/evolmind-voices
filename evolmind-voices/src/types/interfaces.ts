interface Voice {
    id: string,
    name: string,
    icon: string,
    tags: Array<string>
}

interface Category {
    category: string,
    tag: string,
}

interface State {
    voices: Array<Voice>,
    favorites: Array<Voice>,
    currentCategory: string,
    inputString: string,
    randomVoice: Voice
}

export { Voice, State, Category };
