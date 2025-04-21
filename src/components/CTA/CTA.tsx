import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const CTA = (props: Props) => {
    return (
        <section className='cta'>
            <div className='cta-diamond'></div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <div className="cta-content mx-auto text-left">
                            <Link href={"/contact"} className="btn btn-outline-light p-sm-3">Contact Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA