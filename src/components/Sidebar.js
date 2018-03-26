import React from 'react'
import { FetchTable } from '../Fetch'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const Sidebar = () => {

    const queryParams = {
        sort: [{ field: "createdTime", direction: "asc" }],
        maxRecords: 3
    }

    return (
        <div id="sidebar" className="four columns">
            <div className="widget widget_search">
                <h3>Search</h3>
                <form action="">
                    <Search />
                </form>
            </div>
            <div className="widget widget_text group">
                <h3>Widget Text.</h3>
                <p>Lorem ipsum Ullamco commodo laboris sit dolore commodo aliquip incididunt fugiat esse dolor aute fugiat minim eiusmod
                  do velit labore fugiat officia ad sit culpa labore in consectetur sint cillum sint consectetur voluptate adipisicing
    Duis irure magna ut sit amet reprehenderit.</p>
            </div>
            <div className="widget widget_tags">
                <h3>Post Tags</h3>
                <FetchTable table='tags'>
                    {({ loading, error, data }) => (
                        <div className='tagcloud group'>
                            {loading && <div>Loading...</div>}
                            {error && <div>Error</div>}
                            {data && data.records.map(({ id, fields }) => (
                                <Link key={id} to={`/tags/${id}/${fields.name}`}>{fields.name}</Link>
                            ))}
                        </div>
                    )}
                </FetchTable>
            </div>
            <div className="widget widget_popular">
                <h3>Related Post</h3>
                <FetchTable table='posts' {...queryParams}>
                    {({ loading, error, data }) => (
                        <ul className="link-list">
                            {loading && <div>Loading...</div>}
                            {error && <div>Error</div>}
                            {data && data.records.map(({ id, fields }) => (
                                <li key={id}>
                                    <Link to={`/article/${id}/${fields.title}`}>{fields.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </FetchTable>
            </div>
        </div>
    )
}