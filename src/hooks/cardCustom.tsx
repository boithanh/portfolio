'use client';
import { Button } from 'bootstrap';
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
    projectImg: string,
    projectLink?: string,
    projectTitle: string,
    projectSubTitle: string,
    projectContent: string,
    projectSource?: string
    maxLength: number
}



const CardCustom = ({ projectImg, projectLink, projectTitle, projectSubTitle, projectContent, projectSource, maxLength }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const isTruncated = projectContent.length > maxLength;
    const displayText = isTruncated && !expanded ? projectContent.slice(0, maxLength) + (isTruncated ? '...' : '') : projectContent

    function titleCheck(pr = projectTitle, sub = projectSubTitle) {
        if (pr.includes("Capstone")) {
            return <h2>Cap<span>stone</span></h2>
        } else if (pr.includes("Exercise") && sub.includes("Only HTML")) {
            return <h2>First &nbsp;<span>Lesson</span></h2>
        } else if (pr.includes("'s")) {
            return <h2>Expansion &nbsp;<span>Project</span></h2>
        }
        else {
            return <h2>Exer<span>cise</span></h2>
        }
    }
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="project_item mb-5 animate__animated animate__zoomIn">
                <div className="grid">
                    <figure className="effect-winston" style={{ width: '100%', aspectRatio: '350 / 256' }}>
                        <Image src={projectImg} placeholder="blur" quality={100} sizes="(max-width: 430px) 90vw,
       (max-width: 768px) 50vw,
       (max-width: 1280px) 33vw,
       (max-width: 1920px) 25vw,
       33vw" blurDataURL={projectImg} alt='err' fill />
                        <figcaption>
                            {titleCheck()}
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
                    {
                        isTruncated ? (
                            <>
                                <p>{displayText}
                                    <button
                                        className={`badge bg-success ${expanded ? "d-none" : "d-inline-block"}`}
                                        onClick={() => setExpanded(!expanded)}
                                    >
                                        {expanded ? 'Thu gọn' : 'Xem thêm'}
                                    </button>
                                </p>
                            </>) : (
                            <p>{displayText}</p>
                        )
                    }
                    <div className='d-flex justify-content-center position-absolute'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCustom