import {Container, Flex} from "@chakra-ui/react";

export const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            py={5}
            bg="white"
            color='black'
            {...props}
        >
            <Container maxW='container.md'>
                {children}
            </Container>
        </Flex>
    )
}