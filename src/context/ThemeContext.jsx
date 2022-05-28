import React, {createContext, Component} from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            color: 'purple',
            backgroundColor: 'snow',
            text: 'Dark'
        },
        darkTheme: {
            color: 'plum',
            backgroundColor: 'purple',
            text: 'Light'
        }
    }

    changeTheme = () => {
        // toggle theme to opposite when called
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
 }


export default ThemeContextProvider