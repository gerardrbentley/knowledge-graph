import React from 'react'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header'

const AllTagsTemplate = ({ data, pageContext }) => {
    console.log(pageContext)
    const { tags, posts } = pageContext
    return (
        <div>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}>
                <div>
                    <ul>
                        {tags.map((tagName, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`${tagName}`}>
                                        {tagName}
                                    </Link>

                                    <span style={{ paddingLeft: '2rem' }}>{posts[tagName].length}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AllTagsTemplate