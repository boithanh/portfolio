import React from 'react'

type Props = {}

const CardCustom = (props: Props) => {
    return (
        <div className='container'>
            <div className="grid">
                <figure className="effect-kira">
                    <img src="/images/g4.jpg" alt="img17" />
                    <figcaption>
                        <h2>Dark <span>Kira</span></h2>
                        <p>
                            <a href="#"><i className="fa fa-fw fa-home" /></a>
                            <a href="#"><i className="fa fa-fw fa-download" /></a>
                            <a href="#"><i className="fa fa-fw fa-heart" /></a>
                            <a href="#"><i className="fa fa-fw fa-share" /></a>
                        </p>
                    </figcaption>
                </figure>
            </div>

        </div>
    )
}

export default CardCustom