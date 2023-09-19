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
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faComment } from '@fortawesome/free-regular-svg-icons/faComment'
// import Image from 'next/image';

const Post: FC = () => {
  const { onOpen } = useDisclosure()
  return (
    <Box bg={'brand.grey1'} p={'48px'} borderRadius={'10px'} mt={'40px'}>
      <Flex flexDirection={'column'}>
        {/*<Image  alt={}  />*/}
        <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
          <HStack>
            <Avatar src="https://bit.ly/broken-link" />
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
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Flex mt={'20px'}>
          <Button h={'34px'} w={'89px'}>
            {' '}
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button h={'34px'} w={'89px'} ml={'10px'} onClick={onOpen}>
            <FontAwesomeIcon icon={faComment} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Post
