import React from "react";

type PanelPropType = {
  title: string;
  isActive: boolean;
  children: string | any;
  onShow: () => any;
};

const Panel = ({ title, isActive, children, onShow }: PanelPropType) => {
  return (
    <div>
      <h2>{title}</h2>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>show</button>}
    </div>
  );
};

export default Panel;
