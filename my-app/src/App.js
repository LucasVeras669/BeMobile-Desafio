import React from "react";
import Home from "./pages/Home";
import { EmployeesProvider } from './provider/employees'




function App() {

  return (
    <EmployeesProvider>
      <Home />
    </EmployeesProvider>
  );
}

export default App;
