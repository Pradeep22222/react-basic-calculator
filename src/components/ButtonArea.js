import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const ButtonArea = ({updateResult}) => {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [select, setSelect] = useState("");
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
  const onSelect = (e) => {
    e.preventDefault();
    
    const { value } = e.target;
    setSelect(value);
  };
  const total = () => {
    
    if (select === "+") {
      return numA + numB
    }
     if (select === "-") {
       return numA - numB;
    }
     if (select === "*") {
       return numA * numB;
    }
     if (select === "/") {
       return numA / numB;
     }
  }
  
  return (
    <div>
      <form action="" onSubmit={()=>{updateResult(total)}}>
        <Form.Control
          type="number"
          placeholder="enter number"
          onChange={onNumAChange}
        />
        <Form.Select aria-label="Default select example" onChange={onSelect}>
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
        <button type="submit">=</button>
      </form>
    </div>
  );
};
