const poem = {
  lines: ["I write, erase, rewrite", "Erase again, and then", "A poopy blooms"],
};

import React from "react";

const RenderinList2 = () => {
  const { lines } = poem;

  const output: any[] = [];

  return (
    <>
      {lines.map((line: string, i: number) => {
        output.push(<hr key={i}></hr>);
        output.push(<p>{line}</p>);
        return <div>{output}</div>;
      })}
    </>
  );

  // return (
  //   <>
  //     {/* <div className="flex flex-col">
  //       {lines.map((line: string) => {
  //         return (
  //           <div className="">
  //             {line}
  //             <hr />
  //           </div>
  //         );
  //       })}
  //     </div> */}

  // return (
  //   <div className="flex flex-col">
  //     {lines.map((line: string, i: number) => {
  //       return (
  //         <div key={i}>
  //           {i > 0 && <hr />}
  //           {line}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};

export default RenderinList2;
