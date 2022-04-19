import {Box, Center, Heading, Image, Link, Stack, Text, useColorModeValue} from "@chakra-ui/react";

export const PortfolioCard = (props) => {
    const {portfolio} = props
    return(
        <Center py={12}>
            <Link href={portfolio.link} _focus={{ boxShadow: 'none' }} isExternal>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${portfolio.imageHref})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={portfolio.imageHref}
                            alt=''
                        />
                    </Box>
                    <Stack pt={5} align={'center'}>
                        <Text fontSize={'sm'} textTransform={'uppercase'}>
                            {portfolio.type}
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            {portfolio.title}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text>
                                {portfolio.desc}
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Link>
        </Center>
    )
}