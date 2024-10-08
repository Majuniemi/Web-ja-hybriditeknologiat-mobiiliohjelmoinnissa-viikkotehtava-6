import { useState, useEffect } from 'react'

const url = 'https://corporatebs-generator.sameerkumar.website'

const useApiData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        getApiData()
    }, [])

    const getApiData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            if (response.ok) {
                const json = await response.json()
                setData(json)
                setError(null)
            } else {
                setError('Haku epäonnistui')
                setData(null)
            }
        } catch (error) {
            setError('Virhe: ' + error.message)
            setData(null)
        }
        setLoading(false)
    }
    return { data, loading, error, getApiData }
}

export default useApiData
