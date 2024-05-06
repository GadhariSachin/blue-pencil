"use client"

import React from 'react'

/*
  Button Variants - dark/outlined
*/ 

function Button({ variant = "btn-dark", classes="", onClickHandler = () => {}, children }) {
  return (
    <button className={`${variant} ${classes}`} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button