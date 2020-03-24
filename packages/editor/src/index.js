
const defaultValue = {
    name: '大炮',
    address:'成都'
}
const App = (props =defaultValue ) => {
    const { name, address } = props;
    const info = `编辑器包下面： 姓名：${name} 地址：${address} 123132 `;

    console.log(info);
    return info
};

export default App;
