import React from "react";
import Jumbo from "./components/Jumbo/Jumbo";
import Wrapper from "./components/Wrapper/index";
import Employee from "./components/Employee List Item/listitem";
import employees from "./employees.json";

class App extends React.Component {
  state = {
    employees,
  };

  render() {
    return (
      <Wrapper>
        <Jumbo>
          <h1>Employee Directory</h1>
          <h2>Find a list of employees below</h2>
        </Jumbo>
        {/* Insert heading for different categories of information below */}
        {this.state.employees.map((employee) => (
          <Employee
            id={employee.id}
            lastName={employee.lastName}
            firstName={employee.firstName}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
