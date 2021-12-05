import React, {createContext, useState} from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(false)

    const toggleTheme = () => { setTheme(!theme) }

    if (theme) document.body.classList.add('dark-theme')
    else document.body.classList.remove('dark-theme')

    return(
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider