import React, { useState } from 'react';

const Burger = (props: any) => {
  // const [open, setOpen] = useState(false);
  const { open, onHandleToggleClasses, onChangeOpenNav } = props;

  return (
    <div className="burger" onClick={() => onChangeOpenNav(open)}>
      <div className={`burger__container ` + onHandleToggleClasses()}>
        <span className="burger__container--line"></span>
        <span className="burger__container--line"></span>
        <span className="burger__container--line"></span>
      </div>
    </div>
    // <div class="burger burger-squeeze">
    //   <div class="burger-lines"></div>
    //   </div>
  );
};

export default Burger;
