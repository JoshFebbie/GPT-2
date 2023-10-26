import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user_2.jpg';
import gptImgLogo from './assets/gpticon2.png';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">FajGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listItems" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listItems" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listItems" />Upgrade to PRO</div>

        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet accusamus omnis aliquid minus numquam iure pariatur repudiandae iste facere autem?</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet accusamus omnis aliquid minus numquam iure pariatur repudiandae iste facere autem?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet accusamus omnis aliquid minus numquam iure pariatur repudiandae iste facere autem?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet accusamus omnis aliquid minus numquam iure pariatur repudiandae iste facere autem?</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className='inp'>
            <input type="text" placeholder='Send a message'/> <button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
            <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
