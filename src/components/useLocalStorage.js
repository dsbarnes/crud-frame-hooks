import React, { useState, useEffect } from 'react'

const useLocalStorage = ( key ) => {
    const [storageKey, setStorageKey] = useState(
        localStorage.getItem(key) || ''
    )
    useEffect( () => {
        localStorage.setItem(key, storageKey) 
    }, [storageKey])

    return [storageKey, setStorageKey]
}

export default useLocalStorage

