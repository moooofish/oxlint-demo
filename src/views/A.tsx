import React, { type ReactElement, useEffect } from "react";

const Example = (): ReactElement => {
  useEffect(() => {}, []);

  return <div>111</div>;
};

export default Example;

const student = {
  name: "qin",
  age: 89,
  address: "wuhan",
};

console.log(student);

interface YU {
  name: string;
  age: number;
  address: string;
}

const xiao: YU = {
  name: "xiao",
};
