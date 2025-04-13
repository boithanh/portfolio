import React from 'react'

type Props = {}

const Extra = (props: Props) => {
    return (
        <section className='extra'>
            <div className='container'>
                <div className="row align-items-center">
                    <div className='overlay'></div>
                    <div className="col-sm-12 col-xl-4 z-1">
                        <div className="title">
                            <h2>My Extra Project</h2>
                            <p className='mb-4'>This is a collection of spontaneous mini-projects sparked by random moments of inspiration. Whenever an idea hits me—often in the middle of doing something else—I bring it to life through visuals that dance in my head and turn them into real interfaces</p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://tien-ich-nho.vercel.app/" className='btn btn-outline-light w-100' target="_blank" rel="noopener noreferrer">Xem ngay</a>
                        </div>
                    </div>
                    <div className='col-sm-12 col-xl-8 z-1'>
                        <div className='img-content'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Extra