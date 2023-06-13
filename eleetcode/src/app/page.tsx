'use client'

import Home from "./Home";
import { RecoilRoot, useRecoilValue } from 'recoil'

export default function home() {

    return (

        <RecoilRoot>
            <Home />
        </RecoilRoot>
    )
}