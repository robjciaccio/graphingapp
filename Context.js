import React, { useState, useEffect } from 'react'

const Context = React.createContext()

const ContextProvider = ({ children }) => {
  const [popData, setPopData] = useState([])
  const [stateData, setStateData] = useState([])

  useEffect(() => {
    getPopData()
    getStateData()
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

  const getStateData = async () => {
    try {
      const response = await fetch(
        'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      const resData = await response.json()
      setStateData(
        resData.data.sort((a, b) => {
          return b.Population - a.Population
        })
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Context.Provider
      value={{
        getPopData,
        popData,
        getStateData,
        stateData,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
