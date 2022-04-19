import {Box, Center, Image, Text} from "@chakra-ui/react";

export const Information = () => {
  return (
      <Box w='100%' my={10}>
          <Center h='100%'>
              <Image
                  borderRadius='full'
                  boxSize='150px'
                  src='icon.jpg'
                  alt='Tsubasa Tanabe'
              />
          </Center>
          <Center h='100%' mt={5}>
              <Text fontSize='3xl' fontWeight='bold'>
                  Tsubasa Tanabe
              </Text>
          </Center>
          <Center h='100%'>
              <Text fontSize='lg'>
                  Software Engineer
              </Text>
          </Center>
      </Box>
  )
}