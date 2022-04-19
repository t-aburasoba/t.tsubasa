import {Flex, Text} from "@chakra-ui/react";

export const Footer = () => {
  return (
      <Flex width="100%" justifyContent="center" wrap="wrap">
        <Text width="50%" textAlign="center" color="gray.600" fontSize="sm">
            &copy; 2022 Tsubasa Tanabe. All rights reserved.
        </Text>
      </Flex>
  )
}