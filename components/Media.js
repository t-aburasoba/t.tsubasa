import {PortfolioCard} from "./PortfolioCard";
import {Box, Grid, GridItem, Text} from "@chakra-ui/react";

const media = [
    {
        'title': "Aburasobalog",
        'imageHref': '/aburasobalog.png',
        'desc': "My Blog site",
        'link': 'https://aburasoba.org',
        'types': ['Blog']
    },
    {
        'title': "Chill Programming",
        'imageHref': '/chillpro.png',
        'desc': "My YouTube channel",
        'link': 'https://www.youtube.com/channel/UCa3G1koay4eYW9SUJR4r9GA',
        'types': ['Video']
    },
]

export const Media = () => {
    return (
        <Box width='100%' my={10}>
            <Text fontSize='lg' fontWeight='bold' textDecoration='underline'>
                Owned Media
            </Text>
            <Grid templateColumns={{ base:'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6} mt={5}>
                {media.map((medium) => (
                    <GridItem
                        w='100%'
                        key={medium.title}
                    >
                        <PortfolioCard
                            portfolio={medium}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}