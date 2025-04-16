'use client';
import Image from 'next/image'
import React from 'react'

type Props = {
    projectImg: string,
    projectLink?: string,
    projectTitle: string,
    projectSubTitle: string,
    projectContent: string,
    projectSource?: string
}



const CardCustom = ({ projectImg, projectLink, projectTitle, projectSubTitle, projectContent, projectSource }: Props) => {
    console.log(projectTitle.includes("Capstone"));

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="project_item mb-5 animate__animated animate__zoomIn">
                <div className="grid">
                    <figure className="effect-winston">
                        <Image src={projectImg} width={350} height={256} priority alt='err' />
                        <figcaption>
                            <h2 className={`badge ${projectTitle.includes("Capstone") ? "text-bg-danger" : "text-bg-dark"} `}>{projectTitle.includes("Capstone") ? "Capstone" : "Exercise"}</h2>
                            <p>
                                {projectLink && <a href={projectLink} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-cloud" /></a>}
                                {projectSource && <a href={projectSource} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" /></a>}
                                <a href={"/contact"} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-heart" /></a>
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