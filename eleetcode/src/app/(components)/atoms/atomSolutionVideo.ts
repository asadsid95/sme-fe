import { atom } from "recoil";

type atomSolutionVideo = {
    isOpen: boolean,
    videoId: string
}

const initialState = {
    isOpen: false,
    videoId: ""
}

export const atomSolutionVideo = atom({
    key: 'atomSolutionVideo',
    default: initialState
})