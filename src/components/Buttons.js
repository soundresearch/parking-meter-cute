import React from "react";
import { useSound } from 'use-sound';
import increaseTimeSound from '../assets/sounds/robotalk6_10.wav';
import decreaseTimeSound from '../assets/sounds/robotalk7_5.wav';
import cancelSound from '../assets/sounds/robotalk3_6.wav';
import okaySound from '../assets/sounds/robotalk7_10.wav';

const Buttons = ({ time, setTime, setMessage, setWalletMessage, cardInserted, setCardInserted }) => {
  const [playIncreaseTimeSound] = useSound(increaseTimeSound);
  const [playDecreaseTimeSound] = useSound(decreaseTimeSound);
  const [playCancelSound] = useSound(cancelSound);
  const [playOkaySound] = useSound(okaySound);

  const increaseTime = () => {
      playIncreaseTimeSound();
      if (!cardInserted) {
        setMessage('Insert Credit Card');
        setTimeout(() => {
          setMessage('$2.00/hr 8 hours Max');
        }, 2000);
      } else {
        if (time < 480) { // Time less than 8 hours
          setTime(prevTime => prevTime + 15);
        }
      }
    };
  
    const decreaseTime = () => {
      playDecreaseTimeSound();
      if (!cardInserted) {
        setMessage('Insert Credit Card');
        setTimeout(() => {
          setMessage('$2.00/hr 8 hours Max');
        }, 2000);
      } else {
        if (time > 0) {
          setTime(prevTime => prevTime - 15);
        }
      }
    };

    const cancel = () => {
      setCardInserted(false);
      setTime(0);
      setMessage('Transaction Cancelled');
      setTimeout(() => {
        setMessage('$2.00/hr 8 hours Max');
      }, 2000);
      setWalletMessage('');
      playCancelSound();
    };

    const okay = () => {
      playOkaySound();
      if (!cardInserted) {
        setMessage('Insert Coins or Card');
        setTimeout(() => {
          setMessage('$2.00/hr 8 hours Max');
        }, 2000);
      } else {
        if (time > 0) {
          setMessage('Payment Confirmed');
          setCardInserted(false);
          setWalletMessage('');
          setTimeout(() => {
            setMessage('$2.00/hr 8 hours Max');
          }, 2000);
        } else {
          setMessage('Please Add Time');
          setTimeout(() => {
            setMessage('$2.00/hr 8 hours Max');
          }, 2000);
        }
      }
    };

    return (
      <div className="button-container">
        <div className="button-wrapper h-flex">
          <div className="v-flex">
            Time
            <div className="h-flex">
              <button className="time button" onClick={increaseTime}>+</button>
              <button className="time button" onClick={decreaseTime}>−</button>
            </div>
          </div>
          <div className="v-flex">
            Cancel
            <button className="cancel button" onClick={cancel}></button>
          </div>
          <div className="v-flex">
            Ok
            <button className="ok button" onClick={okay}></button>
          </div>
        </div>
        Insert coins or credit card to start
      </div>
    )
}

export default Buttons;