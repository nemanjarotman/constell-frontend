import { FC } from 'react'
import {
  Avatar,
  Box,
  VStack,
  Text,
  Flex,
  HStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
// import Image from 'next/image';

const Post: FC = () => {
  const { onOpen } = useDisclosure()
  return (
    <Box bg={'brand.grey1'} p={'48px'} borderRadius={'10px'} mt={'40px'}>
      <Flex flexDirection={'column'}>
        {/*<Image  alt={}  />*/}
        <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
          <HStack>
            <Avatar src="https://bit.ly/sage-adebayo" />
            <VStack>
              <Text>@username</Text>
              <Text>Full Name</Text>
            </VStack>
          </HStack>
          <HStack>
            <FontAwesomeIcon
              icon={faCalendar}
              color={'#A6A6A6'}
              height={'24px'}
              width={'18px'}
            />
            <Text>24.7.1994</Text>
          </HStack>
        </Flex>
        <Text>SOME TEXT</Text>
        <Flex>
          <Button h={'34px'} w={'89px'}>
            22
          </Button>
          <Button h={'34px'} w={'89px'} ml={'10px'} onClick={onOpen}>
            22
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Post
