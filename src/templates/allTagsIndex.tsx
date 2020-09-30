import React, { FunctionComponent } from 'react'

import Layout from '../components/Layout'
import { MarkdownRemark } from '../types';
import SEO from '../components/SEO';
import { TagLink } from '../components/TagLink';

interface AllTagsProps {
    pageContext: {
        postsByTag: {
            [key: string]: Array<MarkdownRemark>
        }
        tags: Array<string>
    }
}

const AllTagsTemplate: FunctionComponent<AllTagsProps> = ({ pageContext }) => {
    console.log(pageContext)
    const { tags, postsByTag } = pageContext
    return (
        <Layout>
            <SEO title="Topic Tags" />
            <div style={{
                width: '75%',
                margin: '0 auto',
                display: 'flex',
                flexFlow: "row wrap",
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                    {tags.map((tagName) => {
                        return (
                                <TagLink tagName={tagName} number={postsByTag[tagName].length}></TagLink>
                        )
                    })}
            </div>
        </Layout>
    )
}

export default AllTagsTemplate