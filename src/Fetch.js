import React from 'react'
import Fetch from 'react-fetch-component'

const BASE_URL = process.env.REACT_APP_AIRTABLE_BASE
const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
const GLOBAL_OPTIONS = { headers: { Authorization: `Bearer ${API_KEY}` } }

function buildParams(prefix, obj, addFn) {
    var name
    if (Array.isArray(obj)) {
        // Serialize array item.
        obj.forEach(function (value, index) {
            if (/\[\]$/.test(prefix)) {
                // Treat each array item as a scalar.
                addFn(prefix, value)
            } else {
                // Item is non-scalar (array or object), encode its numeric index.
                buildParams(
                    prefix +
                    '[' +
                    (typeof value === 'object' && value !== null && value !== undefined
                        ? index
                        : '') +
                    ']',
                    value,
                    addFn
                )
            }
        })
    } else if (typeof obj === 'object') {
        // Serialize object item.
        for (name in obj) {
            buildParams(prefix + '[' + name + ']', obj[name], addFn)
        }
    } else {
        // Serialize scalar item.
        addFn(prefix, obj)
    }
}

function objectToQueryParamString(obj) {
    var parts = []
    var addFn = function (key, value) {
        value = value === null || value === undefined ? '' : value
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }

    Object.keys(obj).forEach(function (key) {
        var value = obj[key]
        buildParams(key, value, addFn)
    })

    return parts.join('&').replace(/%20/g, '+')
}

function buildUrl({ table, rowId, ...params }) {
    const path = table + (rowId ? `/${rowId}` : '')
    const paramsStr = objectToQueryParamString(params)
    const query = paramsStr ? `?${paramsStr}` : ''
    return `${BASE_URL}/${path}${query}`
}

export const FetchTable = ({
    children,
    manual,
    cache,
    options = {},
    ...params
}) => (
        <Fetch
            url={buildUrl(params)}
            manual={manual}
            cache={cache}
            options={{ ...GLOBAL_OPTIONS, ...options }}
        >
            {children}
        </Fetch>
    )
export const FetchRow = ({ table, rowId, options, children }) => (
    <Fetch
        url={`${BASE_URL}/${table}/${rowId}`}
        options={{ ...GLOBAL_OPTIONS, ...options }}
    >
        {children}
    </Fetch>
)
