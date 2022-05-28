import React from 'react'
import {Text} from 'react-native'

import { NavBackground, NavHeader, NavTabs, NavTabsHeader, ThemeToggle } from './_styles'
import { ThemeContext } from '../context/ThemeContext'

class Navbar extends React.Component {
    render() {
        
        return (
            <ThemeContext.Consumer >
                {(context) => {
                    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = context
                    // if isDarkTheme is true return dark state / else light
                    const theme = isDarkTheme ? darkTheme : lightTheme
                    return (
                        <NavBackground style={theme}>
                            <NavHeader style={theme}>Company Inc.</NavHeader>
                            <NavTabs>
                                <NavTabsHeader>Home</NavTabsHeader>
                                <NavTabsHeader>Contact</NavTabsHeader>
                                <ThemeToggle onPress={changeTheme}>
                                    <Text>{theme.text}</Text>
                                </ThemeToggle>
                            </NavTabs>
                        </NavBackground>
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
 }

 export default Navbar