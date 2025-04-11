import React from 'react'

type Props = {
    projectImg: string,
    projectLink?: string,
    projectTitle: string,
    projectSubTitle: string,
    projectContent: string,
    projectSource?: string
}



const CardCustom = ({ projectImg, projectLink, projectTitle, projectSubTitle, projectContent }: Props) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="project_item mb-5" data-aos='flip-left'>
                <div className="grid">
                    <figure className="effect-winston">
                        <img src={projectImg} alt="err" />
                        <figcaption>
                            <p>
                                <a href={projectLink}><i className="fa-solid fa-cloud" /></a>
                                <a href={"/"}><i className="fa-brands fa-github" /></a>
                                <a href={"/"}><i className="fa-solid fa-heart" /></a>
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="project_item_text">
                    <h4>{projectTitle}</h4>
                    <h6>{projectSubTitle}</h6>
                    <p>{projectContent}</p>
                    <div className='d-flex justify-content-center position-absolute'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCustom