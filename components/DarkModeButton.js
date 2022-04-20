import {useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const DarkModeButton = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
      <>
          {
              colorMode === 'light'
                  ?
                  <MoonIcon boxSize={25} onClick={toggleColorMode} />
                  :
                  <SunIcon boxSize={25} onClick={toggleColorMode} />
          }
      </>
  )
}