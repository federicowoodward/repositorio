"use client";

import React from "react";
import styled from "styled-components";

interface InputContactProps {
  renderText: string;
  type: string;
  hw: {
    width: string;
    height: string;
  };
}

const InputContact: React.FC<InputContactProps> = ({
  renderText,
  type,
  hw,
}) => {
  return (
    <StyledWrapper>
      <input
        placeholder={renderText}
        className="input-style"
        type={type}
        style={{ width: hw.width, height: hw.height }}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-style {
    padding: 10px 0 10px 15px;
    border: 2px solid #ccc;
    border-radius: 30px;
    font-size: 18px;
    outline: none;
     font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  .input-style::placeholder {
    font-size: 20px;
  }

  .input-style:focus {
    border-color: var(--shadow);
    box-shadow: 0 0 0 0.2rem var(--shadow);
  }
`;

export default InputContact;
