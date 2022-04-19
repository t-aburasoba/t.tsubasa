import {Box, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {ArrowRightIcon} from "@chakra-ui/icons";

export const Bio = () => {
    return (
        <Box w='100%' my={10}>
            <Text fontSize='lg' fontWeight='bold' textDecoration='underline'>
                Bio
            </Text>
            <List spacing={3} mt={3}>
                <ListItem>
                    <ListIcon as={ArrowRightIcon} color='green.500'/>
                    1995 Born in Chiba
                </ListItem>
                <ListItem>
                    <ListIcon as={ArrowRightIcon} color='green.500'/>
                    2018 Graduated from the Faculty of Economics, Keio University
                </ListItem>
                <ListItem>
                    <ListIcon as={ArrowRightIcon} color='green.500'/>
                    2018 The Shoko Chukin Bank, Ltd.
                </ListItem>
                <ListItem>
                    <ListIcon as={ArrowRightIcon} color='green.500'/>
                    2019 GAOGAO PTE. LTD.
                </ListItem>
            </List>
        </Box>
    )
}