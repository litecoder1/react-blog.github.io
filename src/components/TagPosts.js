import React, { Fragment } from 'react'
import { FetchRow } from '../Fetch'
import { Link } from 'react-router-dom'


function dateFormatted(date){
    return new Date(date).toLocaleDateString('en-US',{
        timeZone:'UTC',
        year:'numeric',
        month:'long',
        day:'numeric'
    })
}


const TagPostsItem = ({ id, fields , createdTime }) => (
    <article className="entry">
        <header className="entry-header">
            <h2 className="entry-title">
                <Link to={`/article/${id}/${fields.title}`}>{fields.title}</Link>
            </h2>
            <div className="entry-meta">
                <ul>
                    <li>{dateFormatted(createdTime)}</li>
                    <span className="meta-sep">•</span>
                    {/* <li>
                    <a href="" rel="category tag">Ghost</a>
                </li> */}
                    {/* <span className="meta-sep">•</span> */}
                    <li>{fields.author}</li>
                </ul>
            </div>
        </header>
        <div className="entry-content">
            <p>{fields.content}</p>
        </div>
    </article>
)

const TagPostsWithFetch = ({ id }) => (
    <FetchRow table='posts' rowId={id}>
        {({ loading, error, data }) => (
            <Fragment>
                {loading && <div>Lading...</div>}
                {error && <div>Error</div>}
                {data && <TagPostsItem {...data} />}
            </Fragment>
        )}
    </FetchRow>
)

export const TagPosts = ({ ids }) => (
    <Fragment>
        {ids.map(id => <TagPostsWithFetch id={id} />)}
    </Fragment>
)