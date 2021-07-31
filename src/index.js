import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './App.jsx'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark' />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
