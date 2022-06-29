import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useMasterConfig } from "./useMasterConfig";

export default function MasterConfig() {
  const { master, masterOptions, onMasterOptionsChange } = useMasterConfig();

  return (
    <>
      <h1>Master Config</h1>

      <Form.Select
        aria-label="Select master"
        onChange={onMasterOptionsChange}
        value={master}
      >
        <option key="" value="" disabled>
          Select master
        </option>
        {!!masterOptions &&
          masterOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </Form.Select>

      <br />

      {!!master && master === "agama" ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Agama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {["Islam", "Kristen", "Katolik", "Hindu", "Buddha"].map(
              (item, index) => (
                <tr key={item}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      ) : (
        <></>
      )}
    </>
  );
}
