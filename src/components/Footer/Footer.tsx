import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-xl-12">
                        <div className="footer_top pb-4">
                            <Link href="https://www.facebook.com/boithanh01694/"><i className="fa-brands fa-facebook-f" /></Link>
                            <Link href="/"><i className="fa-brands fa-twitter" /></Link>
                            <Link href="/"><i className="fa-brands fa-instagram" /></Link>
                            <Link href="/"><i className="fa-brands fa-google-plus-g" /></Link>
                            <Link href="https://www.linkedin.com/in/thanhbb-dev"><i className="fa-brands fa-linkedin" /></Link>
                        </div>
                        <div className="footer_bottom pt-4">
                            <p>© 2021 CyberPortfolio. All rights reserved | Designed by CyberSoft</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer