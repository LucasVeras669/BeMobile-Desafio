import React, { useState, useEffect } from "react";
import { ItemListContainer, ImageItemList, TextItemName, TextItem, } from "./styles";
import axios from 'axios'


const ItemList = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/employess').then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            alert(error.message)
        })
    }
        , [])


    const show = employees.map((item) => {
        return (
            <ItemListContainer key={item.id}>
                <ImageItemList src={item.image}/>
                <TextItemName>{item.name}</TextItemName>
                <TextItem>{item.job}</TextItem>
                <TextItem>{item.admission_date}</TextItem>
                <TextItem>{item.phone}</TextItem>
            </ItemListContainer>

        )

    })


    return (
      <>
      {show}
      </>

    )
}

export default ItemList