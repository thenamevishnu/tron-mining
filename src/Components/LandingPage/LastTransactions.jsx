import { siteConfig } from "../../Constants/SiteConfig"

const LastTransactions = () => {
    return (
        <div className="px-2 md:px-10 mt-10">
            <div className="flex justify-center mb-5">
                <span className="bg-red-800 px-5 p-1 w-auto text-white rounded-xl">Last Transactions</span>
            </div>
            <div className="shadow shadow-gray-400 rounded-xl p-3 mb-5">
                <div className="flex justify-between mb-5">
                    <div className="font-semibold w-1/3 text-center">Wallet</div>
                    <div className="font-semibold w-1/3 text-center">Amount (TRX)</div>
                    <div className="font-semibold w-1/3 text-center">Time</div>
                </div>
                {
                    siteConfig.lastTransactions.map((item) => {
                        return (
                            <div className={`flex justify-between px-2 rounded-full ${item.id%2 && `bg-red-800 bg-opacity-20`}`} key={item.id}> 
                                <div className="p-2 w-1/3 text-center overflow-hidden text-nowrap flex items-center"><img src="./trx-blue.png" className="w-5 mr-2" alt="blue trx icon"/> {item.wallet}</div>
                                <div className="p-2 w-1/3 text-center overflow-hidden text-nowrap">{item.amount} TRX</div>
                                <div className="p-2 w-1/3 text-center overflow-hidden text-nowrap">{item.time}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LastTransactions
