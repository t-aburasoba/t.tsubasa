import {Box, Grid, GridItem, Text} from "@chakra-ui/react";
import {PortfolioCard} from "./PortfolioCard";

const products = [
    {
        'title': "Toileatter",
        'imageHref': '/toileatter.png',
        'desc': "You can share and rate toilets of Japanese main stations",
        'link': 'https://toileatter.herokuapp.com/login',
        'types': ['PHP(Laravel)', 'JavaScript(Vue)', 'Heroku']
    },
    {
        'title': "Potfy.me",
        'imageHref': '/potfy.png',
        'desc': "You can share your portfolios and your personality.",
        'link': 'https://gate-potfy.herokuapp.com/ ',
        'types': ['PHP(Laravel)', 'JavaScript(Vue)', 'Heroku']
    },
    {
        'title': "Self Intro site",
        'imageHref': '/introduction.png',
        'desc': "My Introduction site. (This web site)",
        'link': 'https://tech.aburasoba.org/',
        'types': ['JavaScript(React)', 'Vercel']
    },
]

export const Products = (props) => {
  return (
      <Box width='100%' my={10}>
          <Text fontSize='lg' fontWeight='bold' textDecoration='underline'>
              Portfolios
          </Text>
          <Grid templateColumns={{ base:'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6} mt={5}>
              {products.map((product) => (
                  <GridItem
                      w='100%'
                      key={product.title}
                  >
                      <PortfolioCard
                          portfolio={product}
                      />
                  </GridItem>
              ))}
          </Grid>
      </Box>
  )
}