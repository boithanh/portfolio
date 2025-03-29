import React from 'react'
import animationPageNotFound from './../../assets/animation/pageNotFoundAnimation.json'
import dynamic from 'next/dynamic'

type Props = {}

const PageNotFoundAnimation = (props: Props) => {
    const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
    return (
        <Lottie
            animationData={animationPageNotFound}
            loop={true}
            style={{ width: "400px", height: "400px", margin: "30px" }}
        />
    )
}

export default PageNotFoundAnimation