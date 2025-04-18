import React from 'react'

type Props = {}

const CTA = (props: Props) => {
    return (
        <section className='cta'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">
                        <div className="cta-content mx-auto text-left">
                            <button className='btn btn-light p-sm-3'>Contact Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA