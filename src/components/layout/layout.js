import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import './layout.css'

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Layout