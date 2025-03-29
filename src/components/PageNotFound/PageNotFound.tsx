'use client';
import React from 'react'
import Link from 'next/link';
type Props = {}


const PageNotFound = (props: Props) => {
    <div className="text-center flex flex-col items-center h-screen justify-center">
        <Link
            href={"/"}
            className="px-6 py-3 bg-[#E31C8D] hover:bg-[#211C5B] border-2 border-black delay-75 rounded-xl text-white"
        >
            Bấm vào để quay về trang chủ
        </Link>
    </div>
}

export default PageNotFound