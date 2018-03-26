import React, { Fragment } from 'react'
import { Layout } from './components/Layout'
// import { Comments } from './components/Comments'
import { FetchRow, FetchTable } from './Fetch'
import { ArticleTags } from './components/ArticleTags'
import {Link} from 'react-router-dom'


function dateFormatted(date) {
    return new Date(date).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const PrevPostButton = ({ id, fields }) => {
    return (
        <li className="prev"><Link to={`/article/${id}/${fields.title}`}><strong>Previous Article</strong>{fields.title}</Link></li>
    )
}

const NextPostButton = ({ id, fields }) => {
    return (
        <li className="next"><Link to={`/article/${id}/${fields.title}`}><strong>Next Article</strong>{fields.title}</Link></li>
    )
}

const getPrevPageQuery = createdTime =>({
    table:'posts',
    filterByFormula:`{createdTime}>'${createdTime}'`,
    maxReords:1,
    sort:[{field:'createdTime',direction:'asc'}]
})
const getNextPageQuery = createdTime =>({
    table:'posts',
    filterByFormula:`{createdTime}<'${createdTime}'`,
    maxReords:1,
    sort:[{field:'createdTime',direction:'desc'}]
})

const ArticlePage = ({ postId }) => {

    return (
        <Layout>
            <div id="main" className="eight columns">
                <FetchRow table='posts' rowId={postId}>
                    {({ loading, error, data }) => (
                        <Fragment>
                            {loading && <div>Loading...</div>}
                            {error && <div>Error</div>}
                            {data &&
                                <article className="entry">
                                    <header className="entry-header">
                                        <h2 className="entry-title">
                                            {data.fields.title}
                                        </h2>
                                        <div className="entry-meta">
                                            <ul>
                                                <li>{dateFormatted(data.createdTime)}</li>
                                                <span className="meta-sep">•</span>
                                                <li>{data.fields.author}</li>
                                            </ul>
                                        </div>
                                    </header>
                                    <div className="entry-content-media">
                                        <div className="post-thumb">
                                            {data.fields.img && <img src={data.fields.img[0].url} alt='alt' />}
                                        </div>
                                    </div>
                                    <div className="entry-content">
                                        <p>{data.fields.content}</p>
                                    </div>
                                    <p className="tags">
                                        <span>Tagged in </span>:
                                        {data.fields.tags ? <ArticleTags ids={data.fields.tags} /> : ''}
                                    </p>
                                    <ul className='post-nav group'>
                                        <FetchTable {...getPrevPageQuery(data.fields.createdTime)}>
                                            {({ loading, error, data }) => (
                                                <Fragment>
                                                    {loading && <div>Loading...</div>}
                                                    {error && <div>Error</div>}
                                                    {data && data.records[0] && <PrevPostButton  {...data.records[0]} />}
                                                </Fragment>
                                            )}
                                        </FetchTable>
                                        <FetchTable {...getNextPageQuery(data.fields.createdTime)}>
                                            {({ loading, error, data }) => (
                                                <Fragment>
                                                    {loading && <div>Loading...</div>}
                                                    {error && <div>Error</div>}
                                                    {data && data.records[0] && <NextPostButton {...data.records[0]} />}
                                                </Fragment>
                                            )}
                                        </FetchTable>
                                    </ul>
                                </article>
                            }
                        </Fragment>
                    )}
                </FetchRow>
                {/* Comments
      ================================================== */}
                {/* <Comments /> */}
            </div> {/* main End */}
        </Layout>
    )
}

export default ArticlePage