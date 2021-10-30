import React from "react";
import { Header, InputSearch, Logo, Container, Title, HeaderList} from './styles'
import Text from '../components/Text/Text'
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
           
            <HeaderList>
            <Text photo={'FOTO'}/>
            <Text name={'NOME'}/>
            <Text office={'CARGO'}/>
            <Text admissionDate={'DATA DE ADMISSÃO'}/>
            <Text phone={'TELEFONE'}/>
            </HeaderList>

        </>
    )
}

export default Home