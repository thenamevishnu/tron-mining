import { useState } from "react"
import { siteConfig } from "../../Constants/SiteConfig"

const Faq = () => {

    const [faqIndex, setFaqIndex] = useState(-1)

    return (
        <div className="px-2 md:px-10">
            <div className="flex justify-center mb-5">
                <span className="bg-red-800 px-5 p-1 w-auto text-white rounded-xl">FAQ (Frequently Asked Questions)</span>
            </div>
            <div className="flex flex-col gap-2">
                {
                    siteConfig.faq.map((item,index) => {
                        return(
                            <div key={index} >
                                <div className={`relative p-3 cursor-pointer rounded-xl ${faqIndex===index ? `bg-red-800 text-white` : `bg-white`} transition-all duration-500 ease-linear`} onClick={() => faqIndex===index ? setFaqIndex(-1) : setFaqIndex(index)}>
                                    <span>{item.q}</span>
                                    <i className={`fa text-xl ${faqIndex===index ? `fa-minus` : `fa-plus`} absolute top-1/2 right-5 translate-y-[-50%]`} />
                                </div>
                                <div className={`${faqIndex===index ? `p-3` : `h-0 p-0`} rounded-xl transition-all duration-300 ease-linear w-full bg-white overflow-hidden`}>
                                    {item.ans}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Faq
