import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { modalState } from "../atoms/atomSignLogPass"

function useCloseModal() {
    // const mainDiv = document.getElementById('signup')
    // mainDiv.style.display = 'None'

    // -------------

    // Must close on click of 'X' or Esc key
    // get atom state to set isOpen 'false' and window to reset to sign-up modal. This is a function with no arg.

    // use of useEffect to call the function when esc is pressed

    const setModalState = useSetRecoilState(modalState)

    const modalClose = () => {
        setModalState((prev) => ({ ...prev, isOpen: false, window: 'login' }))
    }

    useEffect(() => {

        const escHandle = (e) => {
            if (e.key === "Escape")
                console.log('hello')
            modalClose()
        }


        window.addEventListener('keydown', escHandle)

        return (() => window.removeEventListener('keydown', escHandle))

    })

    // Calling this to allow clicking on 'X' closes modal, however useEffect is to used to close modal via 'Esc' press 
    return modalClose

}

export default useCloseModal