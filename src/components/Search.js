import React from 'react'
import Downshift from 'downshift'
import { FetchTable } from '../Fetch'
import { Link } from 'react-router-dom'

export const Search = () => {
    return (
        <Downshift
            render={({
                getInputProps,
                getItemProps,
                isOpen,
                inputValue
            }) => (
                    <div>
                        <input {...getInputProps({ placeholder: 'Search' })} type="text" className="text-search" />
                        {inputValue !== '' ?
                            (
                                <div>
                                    {isOpen ? (
                                        <FetchTable table='posts' filterByFormula={`FIND('${inputValue.toLowerCase()}',LOWER({title}))=1`}>
                                            {({ loading, error, data }) => (
                                                <div className='search-result'>
                                                    {loading && <div>Loading...</div>}
                                                    {error && <div>Error</div>}
                                                    {data && data.records.map(({ id, fields }) => (
                                                        <Link to={`/article/${id}/${fields.title}`}>{fields.title}</Link>
                                                    ))}
                                                </div>
                                            )}
                                        </FetchTable>
                                    ) : null}
                                </div>
                            ) : ''}
                    </div>
                )}
        />
    )
}