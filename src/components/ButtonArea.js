import React from 'react'
import Form from "react-bootstrap/Form";

export const ButtonArea = () => {
  return (
    <div>
      <Form.Control type="number" placeholder="enter number" />
      <Form.Select aria-label="Default select example">
        <option>Select the operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </Form.Select>
      <Form.Control type="number" placeholder="enter number" />
    </div>
  );
}
