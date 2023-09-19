'use client'

import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import NewPost from '@/components/NewPost/NewPost'
import Post from '@/components/Post/Post'
import withAuth from '@/components/AuthWrapper/AuthWrapper'
import { useGetPosts } from '@/hooks/useGetPosts'
import usePostStore from '@/store/postStore'

const page = () => {
  const { data, error, isFetching } = useGetPosts()
  console.log('DATA', data)
  const store = usePostStore()
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

export default withAuth(page)
