import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const fetchRecipe = async () => {
      try{
        const response = await axios.get('/recipe.json')
        setRecipe(response.data)
      }catch(error){
        console.error(error)
      }
    }

    fetchRecipe()
  }, [])

  return (
    <GlobalContext.Provider value={{
      ingredients: recipe.ingredients
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

GlobalContextProvider.propTypes = { children: PropTypes.node }

export { GlobalContext, GlobalContextProvider }