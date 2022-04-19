import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Container} from "@chakra-ui/react";
import {NavBar} from "../components/NavBar";
import {Typing} from "../components/Typing";
import {Information} from "../components/Information";
import {Bio} from "../components/Bio";
import {Connect} from "../components/Connect";
import {Portfolios} from "../components/Portfolios";
import {Footer} from "../components/Footer";

export default function Page() {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width. initial-scale=1'/>
                <title>T.Tsubasa Homepage</title>
            </Head>
            <NavBar/>
            <Container maxW='container.md' my={10}>
                <Typing />
                <Information />
                <Bio />
                <Connect />
                <Portfolios />
            </Container>
            <Footer />
        </Box>
    )
}
