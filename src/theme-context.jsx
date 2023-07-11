import { createContext, useContext, useState } from 'react'

const Context = createContext()

const useThemeDefaultContext = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme((current) => {
        return current === 'light' ? 'dark' : 'light'
    })
    return { theme, setTheme, toggleTheme }
}

export const ThemeContext = ({ children }) => (
    <Context.Provider value={useThemeDefaultContext()}>
        {children}
    </Context.Provider>
)

export const useThemeContext = () => useContext(Context)

export const ThemeStylesheetSwitch = () => {
    const { theme } = useThemeContext()

    return (
        <link rel="stylesheet" type="text/css"
              href={process.env.PUBLIC_URL + theme === 'light' ? 'light.css' : 'dark.css'}/>
    );
}
