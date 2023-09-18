'use client'
import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import NewPost from '@/components/NewPost/NewPost'
import Post from '@/components/Post/Post'

const page = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex direction={'column'} w={'full'}>
        <Header />
        <Box p={'48px'}>
          <NewPost />
          <Post />
        </Box>
      </Flex>
      <Box width={'285px'} minHeight={'100vh'} borderLeft={'1px'} />
    </Flex>
  )
}

export default page
