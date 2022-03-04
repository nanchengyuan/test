import React from "react";

// export default class Dong extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Pos />
//             </div>)
//     }
// };

//输入值实时显示输入数据
// class Pos extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {shuru : ""}
//     };
//     render() {
//         return <div >
//             <input onChange={(e)=>{
//                 this.setState({shuru:e.target.value})
//             }} />
//             <button >确定</button>
//             <h1>输入值：{this.state.shuru}</h1>
//         </div>
//     }
// } ;

//setState 动作取值
//state 定义的值
// class Pos extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { shuru: "", a: "" }
//     };
//     render() {
//         return (
//             <div >
//                 <input onChange={(e) => {
//                     this.setState({ shuru: e.target.value })
//                 }}
//                     id="1" />
//                 <button onClick={(e) => {
//                     this.setState({ a: this.state.a+this.state.shuru})
//                         document.getElementById("1").value = ""
//                 }}>
//                     确定
//                 </button>
//                 <p>{this.state.a}</p>
//             </div>
//         )
//     };
// };

//两种写法，都是函数的写法
// function aaa(e){

// }
// var aaa=(e)=>{

// }

//如果你没有使用 class fields 语法，你可以在回调中使用箭头函数：
class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // 此语法确保 `handleClick` 内的 `this` 已被绑定。
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }
