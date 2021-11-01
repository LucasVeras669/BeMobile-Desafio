import React, { useState } from "react";


export const EmployeesContext = React.createContext()

export const EmployeesProvider = (props) => {

    const [employees, setEmployees] = useState([])
    const [input, setInput] = useState('')

    return (
        <EmployeesContext.Provider value={{ employees, setEmployees, input, setInput }}>
            {props.children}
        </EmployeesContext.Provider>
    )

}