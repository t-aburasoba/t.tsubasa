import {PortfolioCard} from "./PortfolioCard";
import {Box, Grid, GridItem, Text} from "@chakra-ui/react";

const portfolios = [
    {
        'title': "Aburasobalog",
        'imageHref': '/aburasobalog.png',
        'desc': "My Blog site",
        'link': 'https://aburasoba.org',
        'type': 'Blog'
    },
    {
        'title': "Chill Programming",
        'imageHref': '/chillpro.png',
        'desc': "My YouTube channel",
        'link': 'https://www.youtube.com/channel/UCa3G1koay4eYW9SUJR4r9GA',
        'type': 'Video'
    },
]

export const Portfolios = () => {
    return (
        <Box width='100%' my={10}>
            <Text fontSize='lg' fontWeight='bold' textDecoration='underline'>
                Portfolios
            </Text>
            <Grid templateColumns={{ base:'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6} mt={5}>
                {portfolios.map((portfolio) => (
                    <GridItem
                        w='100%'
                        key={portfolio.title}
                    >
                        <PortfolioCard
                            portfolio={portfolio}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}