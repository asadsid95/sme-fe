import { atom } from "recoil";

// Creates atom to manage state of signup/login/forgotPassword modals 

type atomModal = {
    isOpen: Boolean,
    window: 'signup' | 'login' | 'forgotPassword'
}

const initialState: atomModal = {
    isOpen: false,
    window: 'signup'
}

export const modalState = atom({
    key: 'userModal',
    default: initialState
})