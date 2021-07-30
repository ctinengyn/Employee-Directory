import React from "react";
// import { Table } from "reactstrap";
import Moment from "react-moment";

function EmployeeTable(props) {
  return (
    <table className="EmployeeTables">
      <thead>
        <tr>
          <th></th>
          <th onClick={props.sortEmployee}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date of Birth</th>
        </tr>
      </thead>

      <tbody className="">
        {props.results.map(results => (

          <tr className="table" key = {results.login.uuid}>

            <td>
              <img className="" src={results.picture.medium} alt="" />
            </td>

            <td>
              {results.name.first + " " + results.name.last}
            </td>

            <td>
              {results.cell}
            </td>

            <td className="email">
              <a href={results.email}>{results.email}</a>
            </td>

            <td>
              <Moment format="MM/DD/YYYY">
                {results.dob.date}
              </Moment>
            </td>

            </tr>

        ))}

        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
