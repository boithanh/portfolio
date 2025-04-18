import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const CTA = (props: Props) => {
    const [isRoll, setIsRoll] = useState(false);
    const [isLighting, setIsLighting] = useState(false);
    return (
        <section className={`cta${isRoll ? ' roller' : ''}`} onMouseEnter={() => { setIsRoll(!isRoll); setIsLighting(!isLighting) }} onMouseLeave={() => { setIsRoll(false); setIsLighting(false) }} >
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <div className="cta-content mx-auto text-left">
                            <Link href={"/contact"} className="btn btn-light p-sm-3">Contact Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`overlay${isLighting ? " lighting" : ""}`}></div>
        </section>
    )
}

export default CTA