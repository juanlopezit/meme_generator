import {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLine1 = function(event){
    setLine1(event.target.value)
  }

  const onChangeLine2 = function(event){
    setLine2(event.target.value)
  }

  const onChangeImage = function(event){
    setImage(event.target.value)
  }

  const onClickExport = function(){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL('image/png');
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <h1> Meme Generator !!! </h1>
      <select onChange={onChangeImage}>
        <option value="">---</option>
        <option value="fire.jpg">House on fire</option>
        <option value="futurama.jpg">Futurama</option>
        <option value="aliens.jpg">Aliens</option>
        <option value="raptor.jpeg">Philosoraptor</option>
        <option value="smartguy.jpg">Smart Guy</option>
        <option value="boromir.jpg">Boromir</option>
        <option value="funny-guy.jpg">Funny Guy</option>
      </select> <br/>
      <div className="lines">
        <input onChange={onChangeLine1} type="text" placeholder="Line 1"/> <br/>
        <input onChange={onChangeLine2} type="text" placeholder="Line 2"/> <br/>
        <button onClick={onClickExport}>Download your meme</button>
      </div>

      <div className="meme" id="meme">
        <span>{line1}</span> <br/>
        <span>{line2}</span>
        <img src={'/images/' + image} alt="" />
      </div>

    </div>
  );
}

export default App;

