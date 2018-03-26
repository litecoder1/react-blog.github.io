import React, { Fragment } from 'react'
import { FetchRow } from '../Fetch'
import { Link } from 'react-router-dom'

const ArticleTagsItem = ({ id, fields }) => (
    <Fragment>
        <Link to={`/tags/${id}/${fields.name}`}>{fields.name}</Link> {', '}
    </Fragment>
)

const ArticleTagsWithFetch = ({ id }) => (
    <FetchRow table='tags' rowId={id}>
        {({ loading, error, data }) => (
            <Fragment>
                {loading && <div>Lading...</div>}
                {error && <div>Error</div>}
                {data && <ArticleTagsItem {...data} />}
            </Fragment>
        )}
    </FetchRow>
)

export const ArticleTags = ({ ids }) => (
    <Fragment>
        {ids.map(id => <ArticleTagsWithFetch key={id} id={id} />)}
    </Fragment>
)