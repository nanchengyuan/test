import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dong from './Dong'
import { getElementError, render } from '@testing-library/react';
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
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello,world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
// function tick() {
//     ReactDOM.render (
//         <Clock date = {new Date()}/>,
//         document.getElementById('root')
//     )
// };
// setInterval(tick,1000);

//然而，它忽略了一个关键的技术细节：Clock 组件需要设置一个计时器，并且需要每秒更新 UI。
//理想情况下，我们希望只编写一次代码，便可以让 Clock 组件自我更新：
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );

//State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
//将函数组件转换成 class 组件
//通过以下五步将 Clock 的函数组件转成 class 组件：
//1.创建一个同名的 ES6 class，并且继承于 React.Component。
//2.添加一个空的 render() 方法。
//3.将函数体移动到 render() 方法之中。
//4.在 render() 方法中使用 this.props 替换 props。
//5.删除剩余的空函数声明。
// class Clock extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h1>Hello,world!</h1>
//                 <h2>It is {this.props.data.toLocaleTimeString()}</h2>
//             </div>
//         ); 
//     }
// };
//现在 Clock 组件被定义为 class，而不是函数。
//每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 <Clock /> ，就仅有一个 Clock 组件的 class 实例被创建使用。
//这就使得我们可以使用如 state 或生命周期方法等很多其他特性。

//向 class 组件中添加局部的 state
//我们通过以下三步将 date 从 props 移动到 state 中：
//1.把 render() 方法中的 this.props.date 替换成 this.state.date ：
// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// };

//2.添加一个 class 构造函数，然后在该函数中为 this.state 赋初值：
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

//通过以下方式将 props 传递到父类的构造函数中：
// constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
// }
//Class 组件应该始终使用 props 参数来调用父类的构造函数。

//3.移除 <Clock /> 元素中的 date 属性：
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );

//将计时器相关的代码添加到组件中。
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );

//接下来，会设置 Clock 的计时器并每秒更新它。


//将生命周期方法添加到 Class 中
//当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。
//同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”。
//可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() }
//     }

//     componentDidMount() {
//     }

//     componentWillUnmount() {
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// };
//这些方法叫做“生命周期方法”。

//componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：
// componentDidMount() {
//     this.timerID = setInterval(
//         () => this.tick(),
//         1000
//     );
// }
//接下来把计时器的 ID 保存在 this 之中（this.timerID）。
//尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。

//会在 componentWillUnmount() 生命周期方法中清除计时器：
// componentDidMount() {
//     clearInterval(this.timerID);
// }
//最后，会实现一个叫 tick() 的方法，Clock 组件每秒都会调用它。

//使用 this.setState() 来时刻更新组件 state：
// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({
//         date: new Date()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
//快速概括一下发生了什么和这些方法的调用顺序：
//1.当 <Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。
//因为 Clock 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。
//2.之后 React 会调用组件的 render() 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 Clock 渲染的输出。
//3.当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。
//4.浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，
//然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此一来就会渲染输出更新过的时间。React 也会相应的更新 DOM。
//5.一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。


//正确地使用 State
//关于 setState() 你应该了解三件事：

//1.不要直接修改 State
//例如，此代码不会重新渲染组件：
//Wrong
// this.state.comment = 'Hello';

//而是应该使用 setState():
// Correct
// this.setState({comment: 'Hello'});
//构造函数是唯一可以给 this.state 赋值的地方。

//State 的更新可能是异步的
//出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
//出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
//例如，此代码可能会无法更新计数器：
//// Wrong
// this.setState({
//     counter: this.state.counter + this.props.increment,
//   });
//要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
// Correct
// this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));

//上面使用了箭头函数，不过使用普通的函数也同样可以：
// Correct
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });

//State 的更新会被合并
//当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。
//例如，你的 state 包含几个独立的变量：
// constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }

//然后你可以分别调用 setState() 来单独地更新它们：
// componentDidMount() {
//     fetchPosts().then(response => {
//       this.setState({
//         posts: response.posts
//       });
//     });

//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     });
//   }
//这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。

//数据是向下流动的
//不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。
//这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

//组件可以选择把它的 state 作为 props 向下传递到它的子组件中：
//{<FormattedDate date={this.state.date} /> }

//FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state，或是 Clock 的 props，还是手动输入的：
// function FormattedDate(props) {
//     return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
//   }

//这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

//如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

//为了证明每个组件都是真正独立的，我们可以创建一个渲染三个 Clock 的 App 组件：
// function App() {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     );
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );

//每个 Clock 组件都会单独设置它自己的计时器并且更新它。
//在React应用中，组件是有状态组件还是无状态组件属于组件实现的细节，它可能会随着时间的推移而改变。你可以在有状态的组件中使用无状态的组件，反之亦然。

