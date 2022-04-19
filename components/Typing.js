import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {Box, Text} from "@chakra-ui/react";

export const Typing = () => {
    const {text} = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 3,
    })
    return(
        <Box>
            <Text fontSize='5xl'>
                {text}
                <Cursor />
            </Text>
        </Box>
    )
}