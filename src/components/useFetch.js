import React from 'react'
import { useState, useEffect } from 'react'

export const API_URL = "https://www.themealdb.com/api/json/v1/1/"


export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) {
            setLoading(false)
        }
        const fetchData = async (data) => {
            try {
                setLoading(true);
                setError(null)
                const response = await fetch(url)
                if (!response) {
                    throw new Error(`Error : ${response.status}`)
                }
                const json = await response.json()
                setData(json)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error }
}
