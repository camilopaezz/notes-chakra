import React, { useEffect } from 'react'
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  useToast
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

function TodoList ({ toDos, removeNote }) {
  const toast = useToast()

  const handleDelete = (id) => {
    removeNote(id)
    toast({
      isClosable: true,
      title: 'Deleted successfully',
      status: 'success',
      duration: 2000
    })
  }

  useEffect(() => {
    window.localStorage.setItem('notes-db', JSON.stringify(toDos))
  }, [toDos])

  if (toDos.length === 0) {
    return (
      <Badge p='4' borderRadius='lg' colorScheme='green'>
        No notes!!
      </Badge>
    )
  }

  return (
    <VStack
      alignItems='stretch'
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='1px'
      padding={4}
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
    >
      {toDos.map(({ id, body }) => (
        <HStack rounded='md' key={id}>
          <Text>{body}</Text>
          <Spacer />
          <IconButton
            onClick={() => handleDelete(id)}
            isRound
            icon={<FaTrash />}
          />
        </HStack>
      ))}
    </VStack>
  )
}

TodoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired
}

export default TodoList
