import { siteConfig } from "../../Constants/SiteConfig"

const LastTransactions = () => {
    return (
        <div className="px-2 text-white md:px-10 mt-10">
            <div className="flex justify-center mb-5">
                <span className="bg-primary px-5 p-1 w-auto text-white rounded-xl">Last Transactions</span>
            </div>
            <div className="shadow shadow-black rounded-xl p-3 mb-5 bg-[#111] bg-opacity-50">
                <div className="flex justify-between mb-5">
                    <div className="font-semibold w-1/3 text-center">Wallet</div>
                    <div className="font-semibold w-1/3 text-center">Amount (TRX)</div>
                    <div className="font-semibold w-1/3 text-center">Time</div>
                </div>
                {
                    siteConfig.lastTransactions.map((item) => {
                        return (
                            <div className={`flex justify-between px-2 rounded-xl ${item.id%2 && `bg-primary bg-opacity-60`}`} key={item.id}> 
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
