import React from "react";
import { Header, InputSearch, Logo, Container, Title } from './styles'
import LogoImage from '../assets/logo.png'


const Home = () => {
    return (
        <>
            <Header>
                <Logo src={LogoImage} />
            </Header>

            <Container>
                <Title>Funcionários</Title>
                <InputSearch placeholder='Pesquisar' />
            </Container>

        </>
    )
}

export default Home