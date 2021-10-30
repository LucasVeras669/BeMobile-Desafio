import React from "react";
import {P, TextContainer} from "./styles";


const Text = ({photo, name, office, admissionDate, phone}) => {
    return (
        <TextContainer>
         <P>{photo}</P>
         <P>{name}</P>
         <P>{office}</P>
         <P>{admissionDate}</P>
         <P>{phone}</P>
        </TextContainer>
    )
}

export default Text