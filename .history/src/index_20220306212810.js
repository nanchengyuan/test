import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dong from './Dong'
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );


// JSX嵌入表达式
// name相当于一个变量使用
// const name = 'LUOSHAODONG'
// const element = <h1>Hello ,{name}</h1>
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


// 使用funct进行定义，使用1+1形式进行拼接
// 再次进行定义，变量
// 再次进行标题头进行显示
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'LUO',
//   lastName: 'SHAODONG'
// };
// const element = (
//   <h1>
//     Hello ,{formatName(user)}!
//   </h1>
// )
// ReactDOM.render(
//   getGreeting(user),
//   document.getElementById('root')
// );

// //将JSX使用到if或for当中
// function getGreeting(parma) {
//   if (parma) {
//     return <h1>Hello,{formatName(parma)}!</h1>;
//   }
//   else {
//     return <h1>Hello, world</h1>;
//   }
// };


//JSX中指定属性
//可以通过使用引号，来将属性值指定为字符串字面量
// const element = <a href="https://recat.org">link</a>;
//也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
// const element = <img src={user.avatarUrl}></img>

//在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
// 警告：
//因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
//例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。


//使用JSX指定子元素
//假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样：
// const element = <img src={user.avatarUrl}/>;
//JSX 标签里能够包含很多子元素:
// const element = (
//   <div>
//     <h1>Hello</h1>
//     <h2>Good to see you!</h2>
//   </div>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );


//JSX 防止注入攻击
//安全地在 JSX 当中插入用户输入内容：
//const title = response.potentiallyMaliciousInput;
//直接使用是最安全的：
//const element = <h1>{title}</h1>
//React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。
//所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。



//JSX 表示对象
//Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
//第一种实例：
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
//第二种：
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello World!'
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

//React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
//这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。



//元素渲染
//元素是构成 React 应用的最小砖块.
//元素描述了你在屏幕上想看到的内容。
// const element = <h1>Hello,world!</h1>
//与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。
//注意：
//你可能会将元素与另一个被熟知的概念——“组件”混淆起来。我们会在下一个章节介绍组件。组件是由元素构成的。我们强烈建议你不要觉得繁琐而跳过本章节，应当深入阅读这一章节。

//定时器
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);



//组件 & Props
//函数组件与 class 组件
//定义组件最简单的方式就是编写 JavaScript 函数：
// function Welcome(props) {
//   return <h1>Hello,{props.name}</h1>
// };
//该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
//同时还可以使用 ES6 的 class 来定义组件：
//class(组件)
// class Welcome extends React.Component {
//   render() {
//     return <h1 className={this.props.className}>Hello, {this.props.name}</h1>
//   }
// };
//上述两个组件在 React 里是等效的。


//渲染组件
// const name = 'LUOSHAODONG'
// ReactDOM.render(
//  <Welcome name={'1'} className={'greeting'} />,
//  document.getElementById('root') 
// );


//React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
//这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。


//元素渲染
//元素是构成 React 应用的最小砖块.
//元素描述了你在屏幕上想看到的内容。
// const element = <h1>Hello,world!</h1>
//与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。
//注意：
//你可能会将元素与另一个被熟知的概念——“组件”混淆起来。我们会在下一个章节介绍组件。组件是由元素构成的。我们强烈建议你不要觉得繁琐而跳过本章节，应当深入阅读这一章节。

//定时器
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);



//组件 & Props
//函数组件与 class 组件
//定义组件最简单的方式就是编写 JavaScript 函数：
// function Welcome(props) {
//   return <h1>Hello,{props.name}</h1>
// };
//该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
//同时还可以使用 ES6 的 class 来定义组件：
// class Welcome extends React.Component {
//   render() {
//     return <h1 className={this.props.className}>Hello, {this.props.name}</h1>
//   }
// };
//上述两个组件在 React 里是等效的。


//渲染组件
//之前，我们遇到的 React 元素都只是 DOM 标签：
//const element = <div />;
//不过，React 元素也可以是用户自定义的组件：
//const element = <Welcome name="Sara" />;
//当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）
//以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

//例如，这段代码会在页面上渲染 “Hello, Sara”：
//function=定义函数
//Welcome=函数名
//props=参数
//调用name的值
// function Welcome(props) {
//  return <h1>Hello ,{props.name}</h1>;
// };
// const element = <Welcome name="SHAODONG"/>;
// ReactDOM.render(
//   element,
//   document.getElementById("root")
// );
//注意： 组件名称必须以大写字母开头。
//React 会将以小写字母开头的组件视为原生 DOM 标签。
//例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

//组合组件
//组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。
//按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。
// function Welcome(props) {
//  return <h1>Hello ,{props.name}</h1>;
// };
// function Dpp() {
//   return (
//     <div>
//       <Welcome name="a"/>
//       <Welcome name="b"/>
//       <Welcome name="c"/>
//     </div>
//   );
// };
// ReactDOM.render (
//   <Dpp />,
//   document.getElementById("root")
// );

//提取组件
//author(对象)
//text(字符串)
//date(日期)
//作为 props
// function formatDate(date) {
//   return date.toLocaleDateString();
// };
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// };

//将组件拆分为更小的组件。
//首先,提取 Avatar 组件：
// function Avatar(props) {
//   return (
//     <img className="Avter"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// };
//Avatar 不需知道它在 Comment 组件内部是如何渲染的。因此，
//我们给它的 props 起了一个更通用的名字：user，而不是 author。
//针对 Comment 做些微小调整:
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-data">
//         {formatData(props.data)}
//       </div>
//     </div>
//   );
// };

//提取 UserInfo 组件，该组件在用户名旁渲染 Avatar 组件:
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// };
//进一步简化 Comment 组件：
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-data">
//         {formatData(props.data)}
//       </div>
//     </div>
//   );
// };

// const comment = {
//   date: new Date(),
//   text:'I hope you enjoy learning React!',
//   author:{
//     name:"Hello world!",
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };
// ReactDOM.render(
//   <Comment 
//   date={comment.date}
//   text={comment.text}
//   author={comment.author}/>,
//   document.getElementById("root")
// );

//Props 的只读性
//组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。来看下这个 sum 函数：
// function sum(a,b) {
//   return a + b;
// };
// class Sum extends React.Component{
//   render(){
//     return (<p>{sum(1,2)}</p>)
//   }
// };
// ReactDOM.render (
//   <Dong />,
//   document.getElementById('root')
// );
//这样的函数被称为“纯函数”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。

//相反，下面这个函数则不是纯函数，因为它更改了自己的入参：
// function withdraw(account,amount) {
//   account.total -= amount;
// };



//State & 生命周期
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello ,world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// };
// setInterval(tick, 10000);
//在本章节中，我们将学习如何封装真正可复用的 Clock 组件。它将设置自己的计时器并每秒更新一次。
//可以从封装时钟的外观开始：
function Clock(props) {
    return (
        <div>
            <h1>Hello,world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}
function tick() {
    ReactDOM.render (
        <Clock date = {new Date()} />,
        document.getElementById('root')
    )
};
setInterval(tick,1000)