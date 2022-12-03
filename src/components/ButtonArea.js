import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const ButtonArea = () => {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const onNumAChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setNumA(value);
  };
  const onNumBChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setNumB(value);
  };
  
  return (
    <div>
      <Form.Control
        type="number"
        placeholder="enter number"
        onChange={onNumAChange}
      />
      <Form.Select aria-label="Default select example">
        <option>Select the operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </Form.Select>
      <Form.Control
        type="number"
        placeholder="enter number"
        onChange={onNumBChange}
      />
    </div>
  );
};
