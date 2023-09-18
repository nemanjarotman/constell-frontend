import { FC } from 'react'
import { Avatar, Box, VStack, Text, Flex, HStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const Post: FC = () => {
  return (
    <Box bg={'brand.grey1'} p={'48px'} borderRadius={'10px'} mt={'40px'}>
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
    </Box>
  )
}

export default Post
