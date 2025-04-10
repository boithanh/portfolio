import React from 'react'

const Entertainment = (): React.ReactNode => {
    return (
        <section className='entertainment'>
            <div className='container-fluid mx-0 enter-inner'>
                <div className="row">
                    <div className='title'>
                        <h2 className='text-end mb-4 px-2'>Relax a bit <br /> before watching the next one.</h2>
                    </div>
                    <div className=" col-12 col-xl-6 mx-auto">
                        <div>
                            <iframe width="100%" height={450} src="https://nebezb.com/floppybird/"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Entertainment