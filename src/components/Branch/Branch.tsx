import React from 'react'

type Props = {}

const Branch = (props: Props) => {
    return (
        <section className="branch">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                        <div className="branch_title title">
                            <h2>Our Achievement <br />and Award</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-7 position-relative">
                        <div className="branch_content">
                            <p>Luctus porta semper aptent morbi. Vestibulum lectus tempus augue dictumst enim commodo
                                facilisis. Mus laoreet scelerisque habitant urna dui sem diam. Purus dis nam eget.
                                Scelerisque
                                placerat lectus lorem etiam. Elementum integer phasellus lectus.</p>
                            <div className="branch_img">
                                <div className="row">
                                    <div className="col">
                                        <img src="/images/award-1.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-2.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-3.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-4.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-5.png" alt="award" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Branch