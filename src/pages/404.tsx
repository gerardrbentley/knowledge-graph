import * as React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage: React.FunctionComponent = () => {
    return (
        <Layout>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>Sorry, the link you followed can't be found</p>
        </Layout>
    )
}

export default NotFoundPage