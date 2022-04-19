import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai';
import { IconContext } from 'react-icons'


export const Connect = () => {
  return(
      <Box w='100%' my={10}>
          <Text fontSize='lg' fontWeight='bold' textDecoration='underline'>
              Connect with me
          </Text>
          <Flex mt={3}>
              <Box mr={3} _hover={{ opacity: 0.8}}>
                  <Link
                      href='https://twitter.com/aburasobablog'
                      _focus={{ boxShadow: 'none' }}
                      isExternal
                  >
                      <IconContext.Provider value={{ color: '#1DA1F2', size: '50px' }}>
                          <AiOutlineTwitter />
                      </IconContext.Provider>
                  </Link>
              </Box>
              <Box _hover={{ opacity: 0.8}}>
                  <Link href='https://github.com/t-aburasoba' _focus={{ boxShadow: 'none' }} isExternal>
                      <IconContext.Provider value={{ color: '#333', size: '50px' }}>
                          <AiOutlineGithub />
                      </IconContext.Provider>
                  </Link>
              </Box>
          </Flex>
      </Box>
  )
}