import { Fragment, useState } from "react"

const Header = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    return (
        <Fragment>
            <div className="p-3 w-screen fixed z-10 top-0 bg-[#222]">
                <div className="w-full shadow shadow-black text-white h-14 bg-primary rounded-full flex justify-between md:justify-center items-center md:px-10 px-2">
                    <div className="flex md:hidden items-center mr-10">
                        <img alt="header" src="./bg-trx-animation.png" className="w-14" />TRON
                    </div>
                    <div>
                        <ul className="md:flex hidden md:gap-5 items-center">
                            <li className="flex items-center mr-10"><img alt="header" src="./bg-trx-animation.png" className="w-14"/>TRON</li>
                            <li className="hover:bg-white hover:text-black rounded-full p-1 px-2 transition-all duration-300 cursor-pointer">Dashboard</li>
                            <li className="hover:bg-white hover:text-black rounded-full p-1 px-2 transition-all duration-300 cursor-pointer">Deposit</li>
                            <li className="hover:bg-white hover:text-black rounded-full p-1 px-2 transition-all duration-300 cursor-pointer">Withdraw</li>
                            <li className="hover:bg-white hover:text-black rounded-full p-1 px-2 transition-all duration-300 cursor-pointer">Referral</li>
                            <li className="hover:bg-white hover:text-black rounded-full p-1 px-2 transition-all duration-300 cursor-pointer">Logout</li>
                        </ul>
                        <div className="flex md:hidden cursor-pointer" onClick={()=>setMenuClicked((previousValue) => !previousValue)}>
                            <i className={`fa ${menuClicked ? `rotate-180 fa-close` : `fa-bars`} duration-300 transition-all text-2xl`} />
                        </div>
                    </div>
                </div>
                <section className={`absolute block md:hidden w-full ease-linear mt-3 duration-300 transition-all px-3 top-1 ${menuClicked ? `right-0` : `right-[-50rem]`}`}>
                    <ul className="bg-white shadow shadow-gray-400 p-2 rounded-xl ">
                        <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center mr-10">
                            <img alt="header" src="./bg-trx-animation.png" className="w-14" />TRON
                        </div>
                        <div className="flex md:hidden cursor-pointer" onClick={()=>setMenuClicked((previousValue) => !previousValue)}>
                            <i className={`fa ${menuClicked ? `rotate-180 fa-close` : `fa-bars`} duration-300 transition-all text-2xl`} />
                        </div>
                        </div>
                        <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-60 hover:text-white">Dashboard</li>
                        <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-60 hover:text-white">Deposit</li>
                        <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-60 hover:text-white">Withdraw</li>
                        <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-60 hover:text-white">Referral</li>
                        <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-primary hover:bg-opacity-60 hover:text-white">Logout</li>
                    </ul>
                </section>
            </div>
        </Fragment>
    )
}

export default Header
