import { RootState } from '@/redux/configStore';
import { Image } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const Available = (props: Props) => {
    const { title, content, available } = useSelector((state: RootState) => state.availableSlice);
    return (
        <section className="cyber_available mb-5">
            <div className="container position-relative">
                <div className="cyber_avai_title title">
                    <h2>{title}</h2>
                    <p className="py-3">{content}</p>
                </div>
                {/* content  */}
                <div className="cyber_avai_content">
                    <div className="row">
                        {
                            available.map((item, index) => {
                                let { icon, subTitle, subContent, devIcon } = item
                                return (
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5" key={index}>
                                        <div className="cyber_avai_item title">
                                            <i className={icon} />
                                            <h3>{subTitle}</h3>
                                            {
                                                devIcon?.map((item, index) => {
                                                    return (
                                                        <>
                                                            <Image
                                                                width={25}
                                                                height={25}
                                                                key={index} src={`/icons/${item}`} alt="err"
                                                                className='pb-1' />
                                                            <span> , </span>
                                                        </>
                                                    )
                                                })
                                            }
                                            <p>{subContent}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>=
        </section>
    )
}


export default Available