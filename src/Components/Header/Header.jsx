import { Fragment, useState } from "react"

const Header = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    return (
        <Fragment>
            <div className="w-screen shadow z-10 shadow-black text-white h-14 bg-red-800 fixed top-0 flex justify-between items-center md:px-10 px-2">
                <div>
                    TRON
                </div>
                <div>
                    <ul className="md:flex hidden">
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
            <section className={`absolute block md:hidden w-full bg-white shadow shadow-gray-400 ease-linear p-2 rounded-xl duration-300 transition-all ${menuClicked ? `top-14` : `top-[-10rem]`}`}>
                <ul>
                    <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-red-800 hover:bg-opacity-60 hover:text-white">Dashboard</li>
                    <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-red-800 hover:bg-opacity-60 hover:text-white">Deposit</li>
                    <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-red-800 hover:bg-opacity-60 hover:text-white">Withdraw</li>
                    <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-red-800 hover:bg-opacity-60 hover:text-white">Referral</li>
                    <li className="p-1 px-2 transition-all duration-300 rounded-xl cursor-pointer hover:bg-red-800 hover:bg-opacity-60 hover:text-white">Logout</li>
                </ul>
            </section>
        </Fragment>
    )
}

export default Header
