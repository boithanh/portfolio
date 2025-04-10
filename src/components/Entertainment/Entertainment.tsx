import React from 'react'

const Entertainment = (): React.ReactNode => {
    return (
        <section className='entertainment'>
            <div className='enter-inner'>
                <div className='title'>
                    <h2 className='text-end mb-4 px-3'>Relax a bit <br /> before watching the next one.</h2>
                </div>
                <div className=" col-12 col-xl-6 mx-auto">
                    <div>
                        <iframe width="100%" height={450} allowFullScreen={true} src="https://nebezb.com/floppybird/" className='user-select-none'></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Entertainment