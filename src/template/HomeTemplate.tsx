'use client';
import 'animate.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';
import BoiThanhProject from '@/components/BoiThanhProject/BoiThanhProject';
import Available from '@/components/Available/Available';
import Branch from '@/components/Branch/Branch';
import Footer from '@/components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from '@/redux/configStore';
import Entertainment from '@/components/Entertainment/Entertainment';



type Props = {}

const HomeTemplate = (props: Props) => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <main>
                    <Carousel />
                    <BoiThanhProject />
                    <Available />
                    <Branch />
                    <Entertainment />
                </main>
                <Footer />
            </Provider>
        </>
    )
}

export default HomeTemplate