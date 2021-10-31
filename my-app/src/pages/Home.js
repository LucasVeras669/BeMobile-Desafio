import React from "react";
import { Header, InputSearch, Logo, Container, Title, HeaderList, ListContainer  } from './styles'
import Text from '../components/TextList/Text'
import ItemList from '../components/ItemList/ItemList'
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

            <ListContainer>

                <HeaderList>
                    <Text photo={'FOTO'} />
                    <Text name={'NOME'} />
                    <Text office={'CARGO'} />
                    <Text admissionDate={'DATA DE ADMISSÃO'} />
                    <Text phone={'TELEFONE'} />
                </HeaderList>

                <ItemList/>
                <ItemList/>

            </ListContainer>



        </>
    )
}

export default Home