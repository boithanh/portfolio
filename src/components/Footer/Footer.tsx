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
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/boithanh01694/">
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/banh.boi.thanh/">
                                <i className="fa-brands fa-instagram" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@bbthanh061049">
                                <i className="fa-brands fa-tiktok" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thanhbb-dev">
                                <i className="fa-brands fa-linkedin" />
                            </a>
                        </div>
                        <div className="footer_bottom pt-4">
                            <p>© 2025 <Link href={"/"} className='text-white text-decoration-none'>Bành Bối Thạnh. </Link>  All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer