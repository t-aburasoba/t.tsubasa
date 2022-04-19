import '../styles/globals.css'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react"
import theme from "../theme/thme";

function MyApp({Component, pageProps}) {
    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}

export default MyApp
