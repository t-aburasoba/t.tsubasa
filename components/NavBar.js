import {NavBarContainer} from "./NavBarContainer";
import {Logo} from "./Logo";
import {Box, Flex, Stack, Text, useDisclosure} from "@chakra-ui/react";
import {DarkModeButton} from "./DarkModeButton";
import {HamburgerIcon} from "@chakra-ui/icons";
import Link from 'next/link'

export const NavBar = (props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <NavBarContainer {...props}>
            <Flex align="center" mr={5}>
                <Link href='/'>
                    <a>
                        <Logo
                            w="150px"
                        />
                    </a>
                </Link>
            </Flex>
            <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
                <HamburgerIcon />
            </Box>
            <Box
                display={isOpen ? 'block' : 'none'}
            >
                <DarkModeButton/>
            </Box>
            <Stack
                direction={{base: "column", md: "row"}}
                display={{base: isOpen ? "block" : "none", md: "flex"}}
                width={{base: "full", md: "auto"}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}
            >
                <Link href='/portfolios'>
                    <a>
                        <Text>Portfolios</Text>
                    </a>
                </Link>
            </Stack>
            <Box
                display={isOpen ? 'none' : 'block'}
            >
                <DarkModeButton/>
            </Box>
        </NavBarContainer>
    );
};