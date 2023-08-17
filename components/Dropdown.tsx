import React, { useState } from "react";

type Props = {};

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);

  function DropdownItem() {}

  return (
    <>
      <div>Dropdown</div>
    </>
  );
};

export default Dropdown;
