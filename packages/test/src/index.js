const defaultValue = {
  name: '大炮',
  address: '成都'
};
const App = (props = defaultValue) => {
  const { name, address } = props;
  const info = `test包：姓名1：${name} 地址1：${address}`;

  console.log(info);
  return info;
};

export default App;
