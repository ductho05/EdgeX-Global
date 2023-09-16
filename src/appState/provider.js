"use client"
import React, { useMemo, useReducer } from 'react'
import Context from './context'
import reducer, { initialState } from './reducer'

const UseProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const valueState = useMemo(() => {
        return ([state, dispatch])
    }, [state, dispatch])

    return (
        <Context.Provider value={valueState}>
            {children}
        </Context.Provider>
    )
}

export default UseProvider