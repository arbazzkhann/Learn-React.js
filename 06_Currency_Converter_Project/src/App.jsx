import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

...FARHAN

export default function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);


  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg')`,
            // backgroundImage: `url('https://lh3.googleusercontent.com/pw/ABLVV84AfttHIPQJywGFuQEKk8oth06VoHF9I2oqFefH4keKv1DQZQNLZs-sntuftZUAdz791FXn5tApsmDEsVQyrZ66_9gc9SBmmAsIStdChvh1vZIIM6e290SfQgk4f4kxP45XrrAjvoQKZfKz03EjB4rxUlwC6vr07nO44rSP9Os5Q3HfFA8KffsjGgXx687BHF4g-3uF4rlE_KhxeTVvgfd5HWuI6abY-eS9eMK2rX3BksmVqDr88ddMsGIyj_A4gBv23JTr2MulkJJKQK0z-IAsT0sCdP_Qb2fGcMek2EuOP3YK04SUItoqHFbzDajczJcgk5NJK2t4TvdoQvzpcSbvCQ5Lxzhg3yTSOXvorDH63IGO-1Pl6ROVCkZ9w8BeCJXXRJCxtjv7K9bd3UnIKptkf8pVIBz5vJGfB97U6CMIL2Fulcu3PYm7jeBgBZ6AvlsKaYtxFV0CU61a5mTbTOYuWBsuqZdAnBWWmUgGa55QRBv2RryJgedSXGzrU1zOLmQAiaNVVZxKQqiQR7mPYmHLs1kHW5woq_WsCEDB8O7vYz0JHlpLn_L8f03Cf8RcfVOuySDWS45lAnHTTvMgn_Bd3Ua4F9gET6DeOBcJveXgBHpkqiFeZs_6iyua7OCNYVw9tzQe34cbGZ259eLIe5jmAP7lHaa0dalWpPHDYTSJHWI9aZS7_lYjNZaH0qbxYpFFhPjgRKow6BF_XpdGeKkJxG4gtEtVa3gAvMoASATpiFh7cBSllNlQBZrfVz2pK-Iw1Y8katQv6qh7o-88aDV6y_v8vYC_ejg6EVUs_lQ3ibt9nRy8zgYgDe51x8GZpiijnsDWiY4FDaXIXdpagYh2CVMzumR47TPCxtGQiajDsQiTQoUu_3Nbeo3U1b8vcA=w1543-h868-s-no-gm?authuser=0')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmounyChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                           label="To"
                           amount={convertedAmount}
                           currencyOptions={options}
                           onCurrencyChange={(currency) => setTo(currency)}
                           selectCurrency={from}
                           amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} To {to.toUpperCase()}  
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}