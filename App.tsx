import React from 'react';
import { ThemeProvider } from 'styled-components'

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import theme from './src/global/styles/theme';
import DashBoard from './src/screens/DashBoard'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  return (

    !fontsLoaded ? <AppLoading /> :
      <ThemeProvider theme={theme}>
        <DashBoard />
      </ThemeProvider>

  )
}
