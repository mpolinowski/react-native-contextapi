import React from 'react'

import { RootView } from './src/components/_styles'
import ThemeContextProvider from './src/context/ThemeContext'
import AuthContextProvider from './src/context/AuthContext'
import Navbar from './src/components/Navbar'
import TodoList from './src/components/ToDo'

const App = () => {
  return (
    <RootView>
      <ThemeContextProvider>
        <Navbar />
        <AuthContextProvider>
          <TodoList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </RootView>
  );
}

export default App