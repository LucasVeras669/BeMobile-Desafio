import React from "react";
import {P1, P2, TextContainer} from "./styles";


const Text = ({photo, name, office, admissionDate, phone}) => {
    return (
        <TextContainer>
         <P1>{photo}</P1>
         <P2>{name}</P2>
         <P2>{office}</P2>
         <P2>{admissionDate}</P2>
         <P2>{phone}</P2>
        </TextContainer>
    )
}

export default Text