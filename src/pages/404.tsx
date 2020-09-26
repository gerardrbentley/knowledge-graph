import * as React from 'react'

import Layout from '../components/Layout'

const NotFoundPage: React.FunctionComponent = () => {
    return (
        <Layout>
            <h1>Not Found</h1>
            <p>Sorry, the link you followed can't be found</p>
        </Layout>
    )
}

export default NotFoundPage