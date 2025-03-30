import React from 'react'

type Props = {}

const Available = (props: Props) => {
    return (
        <section className="cyber_available">
            <div className="container position-relative">
                <div className="cyber_avai_title title">
                    <h2>I'm Available For Hire</h2>
                    <p className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Nulla mollis
                        dapibus
                        <br />
                        nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
                    </p>
                </div>
                {/* content  */}
                <div className="cyber_avai_content">
                    {/* 2 thuộc tính cho row thêm vào để cho ai ko su dụng hê thống grid boostrap maf tu lafm lay out grid */}
                    <div className="row">
                        {/* item  */}
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                            <div className="cyber_avai_item title">
                                <i className="fa-solid fa-paintbrush" />
                                <h3>Design</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                    Nulla mollis
                                    dapibus nunc</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 title mb-5">
                            <div className="cyber_avai_item">
                                <i className="fa fa-shekel-sign" />
                                <h3>Marketing</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                    Nulla mollis
                                    dapibus nunc</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 title mb-5">
                            <div className="cyber_avai_item">
                                <i className="fa fa-camera" />
                                <h3>Photography</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                    Nulla mollis
                                    dapibus nunc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Available