const App = (props) => {
  const { name, address } = props || {};
  const info = `编辑器包下面： 姓名：${name} 地址：${address} , 欢迎您！👏 `;

  console.log(info);
  return info;
};

export default App;
