'use client'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Box, Heading, HStack, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'

const Sidebar: FC = () => {
  return (
    <Box
      minH="100vh"
      width={'285px'}
      borderRight={'1px'}
      pt={'32px'}
      pl={'80px'}
    >
      <VStack alignItems={'left'}>
        <Image width={32} height={32} src={Logo} alt={'logo'} />
        <HStack pt={'48px'}>
          <FontAwesomeIcon
            icon={faHome}
            color={'#157EFF'}
            height={'24px'}
            width={'24px'}
          />
          <Heading fontSize={'xl'} color={'brand.blue'}>
            Home
          </Heading>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Sidebar
