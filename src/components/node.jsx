import React, { Component, useState } from "react";

// export class Node extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       children: []
//     };
//   }
//   modifyChildren = children => {
//     this.setState({ children }, () =>
//       console.info(this.state.children, children)
//     );
//   };
//   AddChild = () => {
//     console.log("add");
//     this.modifyChildren([...this.state.children, Math.random()]);
//   };
//   RemoveChild = () =>
//     this.modifyChildren(
//       this.state.children.filter((i, j) => j != this.state.children.length - 1)
//     );
//   render() {
//     const { number } = this.props;
//     return (
//       <div style={{ border: "1px solid", padding: "5px", margin: "5px" }}>
//         <p>{number ? number : "root"}</p>
//         <button onClick={this.AddChild}>Add</button>
//         <button onClick={this.RemoveChild}>Sub</button>
//         {this.state.children.map(i => (
//           <Node number={i} />
//         ))}
//       </div>
//     );
//   }
// }
export const Node = ({ number }) => {
  const [children, modifyChildren] = useState([]);
  const AddChild = () => modifyChildren([...children, Math.random()]);
  const RemoveChild = () =>
    modifyChildren(children.filter((i, j) => j != children.length - 1));
  return (
    <div style={{ border: "1px solid", padding: "5px", margin: "5px" }}>
      <p>{number ? number : "root"}</p>
      <button onClick={AddChild}>Add</button>
      <button onClick={RemoveChild}>Sub</button>
      {children.map(i => (
        <Node number={i} />
      ))}
    </div>
  );
};
