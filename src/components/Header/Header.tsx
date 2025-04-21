'use client'
import { loadBootstrap } from '@/utils/loadBoostrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
}

const Header = (props: Props) => {
    const pathname = usePathname();
    const checkHeader = pathname === "/"
    const arrNavLink = ["/", "/About", "/Projects", "/Contact"]

    React.useEffect(() => {
        loadBootstrap();
    }, [])
    return (
        <header className={`top-0 start-0 position-absolute ${!checkHeader && "bg-change"}`} style={{ "zIndex": 2, "width": "100%" }}>
            <nav className="navbar navbar-expand-lg navbar-dark py-3">
                <div className="container">
                    <Link className="navbar-brand text-white d-flex align-items-center sm:d-block" href="/">
                        <i className="fa fa-dice-d20 text-success mx-2" />
                        <span className={`${!checkHeader && "text-black"}`}>Portfolio</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            {arrNavLink.map((item, index) => {
                                return (
                                    <li key={index} className={`nav-item ${pathname === item.toLowerCase() ? "active" : ""}`}>
                                        <Link href={item.toLowerCase()} className={`nav-link mx-2 mb-1 position-relative`} aria-current={"page"}>{item.replace("/", "") || "Home"}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header