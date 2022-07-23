
import './App.css';
import ListAccordionItem from './homeworks/ss3/AccordionItem/ListAccordionItem';
import Likebutton from './homeworks/ss3/Likebutton/Likebutton';
import Likebutton2 from './homeworks/ss3/Likebutton/Likebutton2';
// import StateClass from './components/state/state';
// import Tabs from './homewo rks/ss3/Tabs/Tabs';
// import ChartBar1 from './homeworks/ChartBar1/ChartBar1';
// import UI1 from './homeworks/UI1/UI1';
// import UI2 from './homeworks/UI2/UI2';
// import UI3 from './homeworks/UI3/UI3';
import axios from "axios";
import UseEffect from './components/UseEffect/UseEffect';
import Ratebutton from './homeworks/ss3/Ratebutton/Ratebutton';
import ImageViewer from './homeworks/ss3/ImageViewer/ImageViewer';
import MusicPlayer from './homeworks/ss3/MusicPlayer/MusicPlayer';
import Audio1 from './homeworks/ss3/MusicPlayer/Audio1';
import ReactHookForm from './components/ReactHookForm/ReactHookForm';
import Router from './components/Router/Router';
axios.defaults.baseURL = 'https://62d16ee7dccad0cf176779b1.mockapi.io/'



function App() {
  

  return (
    <>
    <div>
      {/* <UI1></UI1>
      <UI2></UI2>
      <UI3></UI3>
      <ChartBar1 text='BANDWIDTH' color1='c0392b' color2='e74c3c' percentage={20}></ChartBar1>
      <ChartBar1 text='STORAGE' color1='2e86de' color2='54a0ff' percentage={50}></ChartBar1>
      <ChartBar1 text='USERS' color1='27ae60' color2='2ecc71' percentage={70}></ChartBar1>
      <ChartBar1 text='VISITORS' color1='f39c12' color2='f1c40f' percentage={30}></ChartBar1>
      <ChartBar1 text='EMAILS' color1='8e44ad' color2='9b59b6' percentage={45}></ChartBar1>
      <ChartBar1 text='BASIC' color1='f368e0' color2='ff9ff3' percentage={80}></ChartBar1>
      <ChartBar1 text='OTHERS' color1='341f97' color2='5f27cd' percentage={37}></ChartBar1> */}
      {/* <StateClass></StateClass> */}
      {/* /* <Tabs></Tabs> */}
    {/* <Ratebutton/>
      <Likebutton></Likebutton>
      <Likebutton2></Likebutton2> */}
      {/* <ListAccordionItem></ListAccordionItem> */}
      {/* <UseEffect/> */}
      {/* <ImageView/er/> */}
      {/* <MusicPlayer/> */}
      {/* <Audio1></Audio1> */}
      {/* <ReactHookForm/> */}
      <Router/>
    </div>
    </>
  );
}

export default App;
