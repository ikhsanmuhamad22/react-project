import { useState } from 'react';
import HeadersInvesment from '../../components/invesmentApp/HeadersInvesment';
import InputSectionInvesment from '../../components/invesmentApp/InputSectionInvesment';
import ResultInvesment from '../../components/invesmentApp/ResultInvesment';
import Style from './InvesmentApp.module.css';

export default function InvesmentApp() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  const handleChange = (inputIdentify, newValue) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentify]: +newValue,
      };
    });
  };

  return (
    <div id={Style.body}>
      <HeadersInvesment style={Style} />
      <InputSectionInvesment
        onChange={handleChange}
        userInput={userInput}
        style={Style}
      />
      {validInput ? (
        <ResultInvesment userInput={userInput} style={Style} />
      ) : (
        <p className={Style.center}>Plese enter duration greater than zero</p>
      )}
    </div>
  );
}
