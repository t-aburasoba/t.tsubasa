import {NavBarContainer} from "./NavBarContainer";
import {Logo} from "./Logo";
import {Button, HStack, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const NavBar = (props) => {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <NavBarContainer {...props}>
            <HStack justify='space-between'>
                <Logo
                    w="150px"
                />
                {
                    colorMode === 'light'
                        ?
                    <MoonIcon boxSize={25} onClick={toggleColorMode} />
                        :
                    <SunIcon boxSize={25} onClick={toggleColorMode} />
                }
            </HStack>
        </NavBarContainer>
    );
};