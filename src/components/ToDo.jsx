import React from 'react'
import {Text} from 'react-native'

import { TodoBackground, TodoItem, LoginView } from './_styles'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

class ToDoList extends React.Component {
    render() {
        return (
            <AuthContext.Consumer >
                {(authContext) => {
                    return (
                        <ThemeContext.Consumer >
                            {(themeContext) => {
                                const { isLoggedIn, changeAuthStatus }  = authContext
                                const { isDarkTheme, darkTheme, lightTheme } = themeContext
                                // if isDarkTheme is true return dark state / else light
                                const theme = isDarkTheme ? darkTheme : lightTheme
                                if (isLoggedIn) {
                                return (
                                    <TodoBackground style={theme}>
                                        <TodoItem>One thing to do</TodoItem>
                                        <TodoItem>Another thing to do</TodoItem>
                                        <TodoItem>And one more thing</TodoItem>
                                        <TodoItem onPress={changeAuthStatus}>
                                            <Text>Logout</Text>
                                        </TodoItem>
                                    </TodoBackground>
                                )}
                                return (
                                    <LoginView>
                                        <TodoItem onPress={changeAuthStatus}>
                                            <Text>Login</Text>
                                        </TodoItem>
                                    </LoginView>
                                )
                            }}
                        </ThemeContext.Consumer>   
                    )
                }}
            </AuthContext.Consumer>
        )
    }
}

export default ToDoList