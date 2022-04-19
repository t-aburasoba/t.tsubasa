import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {Box, Text} from "@chakra-ui/react";

export const Typing = () => {
    const {text} = useTypewriter({
        words: ['Hello !', "I'm T.tsubasa.", 'Software engineer in Japan, like PHP(Laravel), JavaScript(React)', 'I like to go abroad and coding.'],
        loop: 10,
    })
    return(
        <Box>
            <Text fontSize={{ base:'4xl', md: '5xl'}}>
                {text}
                <Cursor />
            </Text>
        </Box>
    )
}