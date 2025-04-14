'use client';
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/configStore'
import CardCustom from '@/hooks/cardCustom'


const AllProject = () => {
    const { items } = useSelector((state: RootState) => state.projectSlice);
    return (
        <section className='all-project my-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-12">
                        <div className="title mb-5 text-center">
                            <h2>All my Project</h2>
                        </div>
                    </div>
                    {
                        items.flatMap((item) => {
                            return (
                                item.project.map((data) => {
                                    return (
                                        <CardCustom key={data.projectTitle} projectImg={data.projectImg} projectContent={data.projectContent} projectTitle={data.projectTitle} projectSubTitle={data.projectSubTitle} projectLink={data.projectLink} projectSource={data?.projectSource} />
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default AllProject