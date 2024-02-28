"use client";

import { useState } from "react";

type PanelType = {
  title: string;
  onShow: any;
  children: any;
  isActive: any;
};

const SharingState = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => {
          setActiveIndex(1);
        }}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples",
        the wild <i lang="la">Malus sieversii</i> 
      </Panel>
    </>
  );
};

function Panel({ title, onShow, isActive, children }: PanelType) {
  return (
    <div className=" border border-gray-600 p-4">
      <h2>{title}</h2>

      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}

export default SharingState;
