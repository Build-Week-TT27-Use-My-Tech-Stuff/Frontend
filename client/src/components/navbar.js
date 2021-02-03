import React from 'react';
const Navbar = () => {
    const printWork = () =>{
        console.log('click is working in item-card')
    }
  return (
    <div className ='navbar' onClick = {printWork}>
      <header className = 'header-renter-board'>
        <h1>Rent my Tech</h1>
        <h2>Welcome User</h2>
      </header>
    </div>
  );
};
export default Navbar;