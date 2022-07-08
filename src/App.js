
import './App.css';
import ChartBar1 from './homeworks/ChartBar1/ChartBar1';
import UI1 from './homeworks/UI1/UI1';
import UI2 from './homeworks/UI2/UI2';
import UI3 from './homeworks/UI3/UI3';


function App() {
  

  return (
    <>
    <div>
      <UI1></UI1>
      <UI2></UI2>
      <UI3></UI3>
      <ChartBar1 text='BANDWIDTH' color1='c0392b' color2='e74c3c' percentage={20}></ChartBar1>
      <ChartBar1 text='STORAGE' color1='2e86de' color2='54a0ff' percentage={50}></ChartBar1>
      <ChartBar1 text='USERS' color1='27ae60' color2='2ecc71' percentage={70}></ChartBar1>
      <ChartBar1 text='VISITORS' color1='f39c12' color2='f1c40f' percentage={30}></ChartBar1>
      <ChartBar1 text='EMAILS' color1='8e44ad' color2='9b59b6' percentage={45}></ChartBar1>
      <ChartBar1 text='BASIC' color1='f368e0' color2='ff9ff3' percentage={80}></ChartBar1>
      <ChartBar1 text='OTHERS' color1='341f97' color2='5f27cd' percentage={37}></ChartBar1>
    </div>
    </>
  );
}

export default App;
