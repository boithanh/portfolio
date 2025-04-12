'use client';
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Provider, useSelector } from 'react-redux'
import { RootState, store } from '@/redux/configStore'
import BoiThanhProject from '../BoiThanhProject/BoiThanhProject';
import Carousel from '../Carousel/Carousel';

type Props = {}

const AllProject = (props: Props) => {
    // const { items, currentTab } = useSelector((state: RootState) => state.projectSlice);
    // const arrProject = items.map((item) => item);
    // console.log(arrProject);

    return (
        <Provider store={store}>
            <Header />
            <Carousel />
            <BoiThanhProject />
            <Footer />
        </Provider>
    )
}

export default AllProject