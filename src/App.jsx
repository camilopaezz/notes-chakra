import React, { useReducer } from 'react'

import {
  VStack,
  Heading,
  IconButton,
  useColorMode,
  Box
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { nanoid } from 'nanoid'

import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function reducer (state = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return state.concat(action.payload)

    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.payload.id)

    default:
      return state
  }
}

function App () {
  const [notes, dispatch] = useReducer(
    reducer,
    JSON.parse(window.localStorage.getItem('notes-db')) || []
  )
  const { colorMode, toggleColorMode } = useColorMode()

  const removeNote = (id) =>
    dispatch({
      type: 'REMOVE_NOTE',
      payload: {
        id
      }
    })

  const addNote = (body) =>
    dispatch({
      type: 'ADD_NOTE',
      payload: {
        body,
        id: nanoid()
      }
    })

  return (
    <VStack p={4}>
      <IconButton
        isRound
        size='lg'
        alignSelf='flex-end'
        onClick={() => toggleColorMode()}
        icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      />
      <Box>
        <Heading
          fontWeight='extrabold'
          size='2xl'
          mb='8'
          bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
          bgClip='text'
        >
          ToDo Application
        </Heading>
      </Box>
      <TodoList removeNote={removeNote} toDos={notes} />
      <AddTodo addNote={addNote} />
    </VStack>
  )
}

export default App
