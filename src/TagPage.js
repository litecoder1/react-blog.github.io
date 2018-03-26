import React, { Fragment } from 'react'
import { Layout } from './components/Layout'
import { FetchRow } from './Fetch'
import { TagPosts } from './components/TagPosts'

const TagPageContent = ({ id, fields }) => (
    <Layout>
        <div className='tag-title'>Filter by Tag:<span>{fields.name}</span></div>
        <div id="main" className="eight columns">
            <Fragment>
                {fields.post ? <TagPosts ids={fields.post} /> : <p>No post</p>}
            </Fragment>
        </div>
    </Layout>
)

const TagPage = ({ tagId }) => (
    <Fragment>
        <FetchRow table='tags' rowId={tagId}>
            {({ loading, error, data }) => (
                <Fragment>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error</div>}
                    {data &&
                        <TagPageContent {...data} />
                    }
                </Fragment>
            )}
        </FetchRow>
    </Fragment>
)

export default TagPage