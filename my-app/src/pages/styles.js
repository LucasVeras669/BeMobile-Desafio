
import styled from "styled-components";

export const Header = styled.div`
width: 100%;
height: 60px;
background-color: #1C1C1C;
display: flex;
align-items: center;
`
export const Logo = styled.img`
width: 120px;
height: 35.16px;
margin-left: 32px;
`

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 10px;
`
export const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const Title = styled.h4`
font-family: Roboto;
font-style: normal;
font-weight: bolder;
font-size: 24px;
line-height: 28px;
margin-left: 32px;
`
export const InputSearch = styled.input`
width: 282px;
height: 40px;
margin-right: 32px;
margin-left: 32px;
background: #FFFFFF;
border: 1px solid #CDCDCD;
border-radius: 4px;
padding-left: 10px;
position: relative;
::placeholder{
    color: #9E9E9E;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}
`
export const IconSearch = styled.img`
position: absolute;
right: 55px;
`
export const ListContainer = styled.div`
width: 95%;
margin: 10px auto;
`
export const HeaderList = styled.div`
width: 100%;
height: 49px;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
border-radius: 4px 4px 0px 0px;
background-color: #5984C0;
display: flex;
box-sizing: border-box;

`