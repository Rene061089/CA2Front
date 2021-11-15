import React from "react";
import { Table } from "react-bootstrap";
import '../styles/Table.css'

const Instructions = (props) => {
  return (
    <div>
      <Table className="TableStyle" striped>
        <thead>
          <tr>
            <th style={{ color: "white", backgroundColor: "black", textAlign: 'center' }}>Steps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ol>
                {props.instructions.map((ins, index) => (
                  <li key={index}>{ins.text}</li>
                ))}
              </ol>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Instructions;
