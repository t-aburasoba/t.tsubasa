import {Container, Flex} from "@chakra-ui/react";

export const NavBarContainer = ({children, ...props}) => {
    return (
        <Container maxW='container.md'>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                py={5}
                {...props}
            >
                {children}
            </Flex>
        </Container>
    )
}