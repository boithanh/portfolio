'use client';
import React, { Children } from 'react'
import { Provider } from 'react-redux'
import { store } from './configStore'

type Props = {
    children: React.ReactNode
}

const SupportProvider = ({ children }: Props) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default SupportProvider