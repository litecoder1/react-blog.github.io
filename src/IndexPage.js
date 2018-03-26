import React, { Fragment } from 'react'
import { Layout } from './components/Layout'
import { Link } from 'react-router-dom'
import { FetchTable } from './Fetch'

function dateFormatted(date) {
    return new Date(date).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const IndexPage = () => {
    const queryParams={
        sort:[{field:'createdTime',direction:'desc'}]
    }
    return (
        <Fragment>
            <Layout>
                <div id="main" className="eight columns">
                    <FetchTable table='posts' {...queryParams}>
                        {({ loading, error, data }) => (
                            <Fragment>
                                {loading && <div>Loading...</div>}
                                {error && <div>Error</div>}
                                {data && data.records.map(({ id, fields, createdTime }) => (
                                    <article className="entry">
                                        <header className="entry-header">
                                            <h2 className="entry-title">
                                                <Link to={`/article/${id}/${fields.title}`}>{fields.title}</Link>
                                            </h2>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>{dateFormatted(createdTime)}</li>
                                                    <span className="meta-sep">•</span>
                                                    <li>{fields.author}</li>
                                                </ul>
                                            </div>
                                        </header>
                                        <div className="entry-content">
                                            <p>{fields.content}</p>
                                        </div>
                                        <div className='entry-more-btn'>
                                            <Link to={`/article/${id}/${fields.title}`}>Read more</Link>
                                        </div>
                                    </article>
                                ))}
                            </Fragment>
                        )}
                    </FetchTable>
                    {/* end entry */}
                </div>
                {/* end main */}
            </Layout>
        </Fragment>
    )
}

export default IndexPage