import React, { useState, useEffect } from 'react';
import ParkingMeter from "./components/ParkingMeter";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import card_img from "./assets/card.png";
import { useDrag, useDrop } from 'react-dnd';
import { useSound } from 'use-sound';
import cardDropSound from './assets/sounds/robotalk0_11.wav';
import TaskDropDown from './components/TaskDropDown';

function App() {
  const [time, setTime] = useState(0);
  const [message, setMessage] = useState('$2.00/hr 8 hours Max');
  const [coinInserted, setCoinInserted] = useState(false);
  const [cardInserted, setCardInserted] = useState(false);
  const [walletMessage, setWalletMessage] = useState('');
  const [playCardDropSound] = useSound(cardDropSound);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: () => {
      setCardPayment();
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  const setCardPayment = () => {
    setCardInserted(true);
    setTime(0);
    setWalletMessage('Please complete the rest of your transaction on the parking meter screen.');
  }

  useEffect(() => {
    if (!isDragging && cardInserted) {
      playCardDropSound();
    }
  }, [isDragging, cardInserted, playCardDropSound]);

  return (
    <div>
      <TaskDropDown />
      <div ref={drop} className="drag-area" style={{ 
        border: canDrop && isOver ? "5px dashed red" : isDragging ? "5px dashed black" : "none"
      }}></div>
      <div className="wallet-wrapper">
        <u>WALLET</u>(Drag and drop credit card into slot to begin)
        <div className="payment-wrapper">
          <div>
            {!cardInserted && (
              <div style={{ opacity: isDragging ? 0.5 : 1}}>
                <img ref={drag} className="card-img" src={card_img} alt="Credit Card" />
              </div>
            )}
          </div>
          {walletMessage}
        </div>
      </div>
      <div className="screen-wrapper">
        <Screen time={time} message={message} />
      </div>
      <div>
        <Buttons time={time} setTime={setTime} setMessage={setMessage} setWalletMessage={setWalletMessage} coinInserted={coinInserted} setCoinInserted={setCoinInserted} cardInserted={cardInserted} setCardInserted={setCardInserted} />
      </div>
      <ParkingMeter cardInserted={cardInserted} />
      <div class="credit">
      sounds by <a target="_blank" href="https://www.twittering.com/twittering/html/about.html">pdx drescher</a>.
      </div>
    </div>
  );
}

export default App;