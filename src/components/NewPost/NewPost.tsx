import { FC } from 'react'
import { Avatar, Box, Button, Flex, HStack, Input } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
const NewPost: FC = () => {
  return (
    <Box bg={'brand.grey1'} p={'48px'} borderRadius={'10px'}>
      <HStack mb={'10px'}>
        <Avatar src="https://bit.ly/broken-link" />
        <Input variant={'flushed'} w={'full'} />
      </HStack>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingLeft={'50px'}
      >
        <FontAwesomeIcon
          icon={faMicrophone}
          color={'#157EFF'}
          height={'24px'}
          width={'18px'}
        />
        <Button variant={'disabled'}>New Post</Button>
      </Flex>
    </Box>
  )
}

export default NewPost
