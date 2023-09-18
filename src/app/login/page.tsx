'use client'
import { Box, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import LoginForm from '@/components/LoginForm/LoginForm'

const page = () => {
  return (
    <Box w={['full', 'md']} p={['8', '10']} mt={['20', '10vh']} mx={'auto'}>
      <VStack spacing={4} align={'flex-start'} w={'full'}>
        <VStack spacing={1} align={['flex-start', 'center']} w={'full'} mb={3}>
          <Image width={79} height={94} src={Logo} alt={'logo'} />
          <LoginForm />
        </VStack>
      </VStack>
    </Box>
  )
}

export default page
