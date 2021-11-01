import React, { useEffect } from "react";
import { ItemListContainer, ImageItemList, TextItemName, TextItem, TextItemJob } from "./styles";
import axios from 'axios'
import { EmployeesContext } from "../../provider/employees";


const ItemList = () => {

    const { employees, setEmployees } = React.useContext(EmployeesContext)
    const { input } = React.useContext(EmployeesContext)
   

    useEffect(() => {
        axios.get('http://localhost:3000/employess').then((response) => {
            setEmployees(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert(error.message)
        })
    }
        , [])

     const filteredEmployees = employees.filter((employee)=>{
         return employee.name.toLowerCase().includes(input.toLowerCase())
     })



    const show = filteredEmployees.map((item) => {
        return (
            <ItemListContainer key={item.id}>
                <ImageItemList src={item.image} />
                <TextItemName>{item.name}</TextItemName>
                <TextItemJob>{item.job}</TextItemJob>
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