import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, Container} from "@chakra-ui/react";
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";
import {Products} from "../components/Products";

export default function Portfolios() {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width. initial-scale=1'/>
                <title>T.Tsubasa Homepage</title>
            </Head>
            <NavBar/>
            <Container maxW='container.md' my={10}>
                <Products />
            </Container>
            <Footer />
        </Box>
    )
}
