import React from "react";
import { Header, InputSearch, Logo, Title, HeaderList, ListContainer, IconSearch, InputContainer, Container } from './styles'
import Text from '../components/TextList/Text'
import ItemList from '../components/ItemList/ItemList'
import LogoImage from '../assets/logo.png'
import Magnifier from '../assets/Vector.png'
import { EmployeesContext } from "../provider/employees";


const Home = () => {

    const { input, setInput } = React.useContext(EmployeesContext)

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }


    return (
        <>
            <Header>
                <Logo src={LogoImage} />
            </Header>

            <Container>
                <Title>Funcionários</Title>
                <InputContainer>
                    <InputSearch
                        value={input}
                        onChange={onChangeInput}
                        placeholder='Pesquisar' />
                    <IconSearch src={Magnifier} />
                </InputContainer>
            </Container>

            <ListContainer>

                <HeaderList>
                    <Text photo={'FOTO'} />
                    <Text name={'NOME'} />
                    <Text office={'CARGO'} />
                    <Text admissionDate={'DATA DE ADMISSÃO'} />
                    <Text phone={'TELEFONE'} />
                </HeaderList>

                <ItemList />

            </ListContainer>



        </>
    )
}

export default Home