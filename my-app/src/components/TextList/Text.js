import React from "react";
import { P1, P2, P3, P4, P5, TextContainer } from "./styles";


const Text = ({ photo, name, office, admissionDate, phone }) => {
    return (
        <TextContainer>
            <P1>{photo}</P1>
            <P2>{name}</P2>
            <P3>{office}</P3>
            <P4>{admissionDate}</P4>
            <P5>{phone}</P5>
        </TextContainer>
    )
}

export default Text