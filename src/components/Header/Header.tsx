'use client'

import { Box, Text, Flex } from '@chakra-ui/react'

interface Props {
  onShowSidebar: () => void
  showSidebarButton?: boolean
}

const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex
      bg="brand.white"
      p={4}
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
