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
}

export { Voice, State, Category };
