import React from "react";
import { ItemListContainer, ImageItemList, TextItemName, TextItem } from "./styles";


const ItemList = () => {
    return (
        <ItemListContainer>
            <ImageItemList/>
            <TextItemName>Rodrigo Motta</TextItemName>
            <TextItem>Front-end</TextItem>
            <TextItem>00/00/0000</TextItem>
            <TextItem>+55 (55) 55555-555</TextItem>
        </ItemListContainer>
     
    )
}

export default ItemList