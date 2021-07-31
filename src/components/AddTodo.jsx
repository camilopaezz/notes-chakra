import React, { useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function AddTodo ({ addNote }) {
  const [note, setNote] = useState('')
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!note) {
      toast({
        title: 'Cannot add a empty note',
        duration: 5000,
        status: 'error',
        isClosable: true
      })

      return undefined
    }

    addNote(note)
    setNote('')

    toast({
      title: 'Added successfully',
      isClosable: true,
      duration: 2000,
      status: 'success'
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder='Learn nodejs...'
        />
        <Button colorScheme='pink' fontWeight='light' px='8' type='submit'>
          Add Note
        </Button>
      </HStack>
    </form>
  )
}

AddTodo.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default AddTodo
