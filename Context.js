import React, { useState, useEffect } from 'react'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [popData, setPopData] = useState([])

  useEffect(() => {
    getPopData()
  }, [])
  const getPopData = async () => {
    try {
      const response = await fetch(
        'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      const resData = await response.json()
      setPopData(resData.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Context.Provider
      value={{
        getPopData,
        popData,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
