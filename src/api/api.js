import React, { Component } from 'react';

const baseurl = 'https://vefforritun-verk-bak.herokuapp.com/';

async function getProducts() {
  const url = new URL('products', baseurl);

  const response = await fetch(url);
  const data = await response.json();  
 
  return data;
}


export {
  getProducts,
};