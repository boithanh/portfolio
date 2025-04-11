'use client';
import Link from 'next/link'
import React from 'react'
import animationPageNotFound from './../../assets/animation/pageNotFoundAnimation.json'
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {}

const PageNotFound = (props: Props) => {
    const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-xl-6 mx-auto">
                    <div className="text-center">
                        <Lottie
                            animationData={animationPageNotFound}
                            loop={true}
                            style={{ width: "100%", minHeight: "200px", margin: "20px auto 0 auto" }}
                        />
                        <Link
                            href={"/"}
                            className="btn btn-primary text-white translate-middle-y"
                        >
                            Quay về trang chủ
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PageNotFound