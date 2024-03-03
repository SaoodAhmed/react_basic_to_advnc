"use client"

import React, { useState } from "react";
import Panel from "./panel";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1>Almaty, Kazakhstan</h1>
      <Panel
        title={"About"}
        isActive={activeIndex === 0}
        children={
          " With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
        }
        onShow={() => setActiveIndex(0)}
      />
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
};

export default Accordian;
