import { Fragment } from "react"
import Header from "../Header/Header"
import { siteConfig } from "../../Constants/SiteConfig"
import LastTransactions from "./LastTransactions"
import Footer from "./Footer"
import Faq from "./Faq"

const Landing = () => {
    return (
        <Fragment>
            <Header />
            <div className="w-screen flex md:justify-between flex-col md:flex-row px-2 md:px-10 mt-14 h-96 md:items-center">
                <div className="text-center w-full mt-10 md:mt-0">
                    <h1 className="text-2xl font-bold mb-3">Welcome To {siteConfig.NAME}</h1>
                    <p className="md:text-start text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet, soluta reiciendis velit praesentium asperiores excepturi eligendi est? Doloremque dicta voluptatum explicabo unde iure error commodi facilis repudiandae ab facere.</p>
                </div>
                <div className="w-full flex justify-center mt-10 md:mt-0">
                    <div className="flex flex-nowrap w-full md:w-11/12 rounded-xl shadow shadow-gray-400">
                        <input type="text" placeholder="You tron wallet address" className="rounded-s-xl w-full p-3 outline-none px-3"/>
                        <button className="bg-red-800 text-white p-2 rounded-xl px-4">⛏</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6 px-2 md:px-10">
                {
                    siteConfig.RULES.map((item, index) => {
                        return (
                            <div className="bg-white p-3 rounded-xl hover:shadow-lg cursor-pointer hover:shadow-gray-500 transition-all duration-200 ease-linear" key={index} >
                                <div className="bg-red-800 w-10 h-10 flex justify-center items-center text-white rounded-full">
                                    <i className={`${item.icon}`}/>
                                </div>
                                <div className="mt-2">
                                    {item.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <LastTransactions />
            <Faq />
            <Footer />
        </Fragment>
    )
}

export default Landing
