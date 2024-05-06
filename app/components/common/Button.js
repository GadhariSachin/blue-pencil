"use client"

import React from 'react'

/*
  Button Variants - dark/outlined
*/ 

function Button({ classes = "btn-dark", onClickHandler = () => {}, children }) {
  return (
    <button className={classes} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button