import React, { Suspense } from 'react'
const PageNotFound = React.lazy(() => import("@/components/PageNotFound/PageNotFound"))

type Props = {}

const NotFound = (props: Props) => {
    return <div>
        <Suspense><PageNotFound /></Suspense>
    </div>
}

export default NotFound;