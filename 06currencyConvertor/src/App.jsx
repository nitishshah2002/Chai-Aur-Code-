import { useState,useEffect } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import "./index.css"
import './App.css'

function App() {
  
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("USD")
  const [to,setTo]=useState("INR")
  const [converdAmount,setConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(converdAmount)
  }
  const convert = () => {
  if (currencyInfo[to]) {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));

  }
  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);
};

  return (
   <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
   style={{backgroundImage:`url('https://www.keycurrency.co.uk/wp-content/uploads/2022/06/shutterstock_535344640-scaled-e1654787790968-2048x973.jpg')`}}
   >
    <div
    className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm
      bg-white/30">
        <form
        onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }} 
        action="">
          <div className="w-full mb-1">
            <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
            onClick={swap}
            type="button"
            className="absolute left-1/2-translate-x-1/2-translate-y1/2 border-white rounded-md
            bg-blue-600 text-white px-2 py-0.5"
            >Swap</button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
            label="To"
             amount={converdAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={to}
            amountDisable
            />
          </div>
          <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
   </div>
  )
}

export default App
