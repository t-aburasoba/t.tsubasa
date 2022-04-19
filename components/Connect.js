import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {AiOutlineGithub, AiOutlineTwitter} from 'react-icons/ai';
import { IconContext } from 'react-icons'


export const Connect = () => {
  return(
      <Box w='100%' my={5}>
          <Text fontSize='lg' fontWeight='bold' textDecoration='underline'>
              Connect with me
          </Text>
          <Flex mt={3}>
              <Box mr={3}>
                  <Link href='#' _focus={{ boxShadow: 'none' }}>
                      <IconContext.Provider value={{ color: '#1DA1F2', size: '50px' }}>
                          <AiOutlineTwitter />
                      </IconContext.Provider>
                  </Link>
              </Box>
              <Box>
                  <Link href='#' _focus={{ boxShadow: 'none' }}>
                      <IconContext.Provider value={{ color: '#333', size: '50px' }}>
                          <AiOutlineGithub />
                      </IconContext.Provider>
                  </Link>
              </Box>
          </Flex>
      </Box>
  )
}