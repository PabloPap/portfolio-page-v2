import React, { useState } from 'react';

// type Burger = {
//   open: boolean;
// };

const Burger = (props) => {
  // const [open, setOpen] = useState(false);
  const { open, onChangeOpenNav } = props;

  return (
    <div className="burger" onClick={() => onChangeOpenNav(open)}>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  );
};

export default Burger;
