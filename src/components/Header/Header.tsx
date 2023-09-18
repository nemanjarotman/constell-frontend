'use client'
import { FC } from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'

const Header: FC = () => {
  return (
    <Flex
      p={4}
      h={'80px'}
      width={'full'}
      color="white"
      justifyContent="flex-start"
      alignItems={'flex-start'}
      borderBottom={'1px solid black'}
    >
      <Text color={'brand.black'} fontSize="xl">
        Home
      </Text>
      <Box flex="1" />
    </Flex>
  )
}

export default Header
