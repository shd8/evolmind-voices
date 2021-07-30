interface Voice {
    id: string,
    name: string,
    icon: string,
    tags: Array<string>
}

interface State {
    voices: Array<Voice>
}

export { Voice, State };
