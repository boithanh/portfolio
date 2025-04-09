import { RootState } from '@/redux/configStore'
import { changeTab } from '@/redux/slices/projectSlice'
import React, { ReactNode, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

type Props = {}

const BoiThanhProject = (props: Props) => {
    const { items, currentTab } = useSelector((state: RootState) => state.projectSlice);
    const dispatch = useDispatch();
    function renderTab(it = items) {
        return items.map((item, index) => {
            let { tabProject } = item;
            return (
                <li className="nav-item" role="presentation" key={index}>
                    <button className={`nav-link border border-black mx-2 ${index === 0 ? "active" : ""}`} id={`pills-${checkVar(tabProject)}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${checkVar(tabProject)}`} type="button" role="tab" aria-controls={`pills-${checkVar(tabProject)}`} aria-selected="true" onClick={() => {
                        dispatch(changeTab(tabProject))
                    }}>{tabProject}</button>
                </li>
            )
        })
    }

    function renderItem(it = items) {
        return it.map((item) => {
            let { tabProject, project } = item;

            return (
                <div
                    key={tabProject}
                    className={`tab-pane fade ${tabProject === currentTab ? "active show" : ""}`}
                    id={`pills-${checkVar(tabProject)}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${checkVar(tabProject)}-tab`}
                >
                    <div className="row justify-content-center align-content-center">
                        {project.map((data, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="project_item animate__animated animate__zoomIn mb-5">
                                    <img src={data?.projectImg} alt="err" />
                                    <div className="project_item_text">
                                        <h4>{data?.projectTitle}</h4>
                                        <h6>{data?.projectSubTitle}</h6>
                                        <p>{data?.projectContent}</p>
                                        <div className='d-flex justify-content-center'>
                                            <a href={data?.projectLink} rel="noopener noreferrer" className='btn btn-primary mx-1'>View page</a>
                                            <a href="" target="_blank" rel="noopener noreferrer" className='btn btn-outline-dark mx-1'>View source</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        });
    }


    function checkVar(a: string) {
        if (a === "HTML + CSS") {
            return "home"
        } else if (a === "Javascript") {
            return "contact"
        } else if (a === "ReactJS") {
            return "about"
        } else {
            return "service"
        }
    }
    return (
        <section className="cyber_project py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="cyber_project_title title mb-3">
                        <h2>I Love What I Do
                        </h2>
                        <p>Every project I build is a journey of learning, solving real problems, and creating clean, usable design. Here are some of my favorite works so far.</p>
                    </div>
                </div>
                <div className="cyber_project_content">
                    <div className="row">
                        <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab" role="tablist">
                            {
                                renderTab()
                            }

                        </ul>
                        <div className="tab-content mb-5" id="pills-tabContent">
                            {
                                renderItem()
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BoiThanhProject