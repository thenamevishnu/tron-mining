import { siteConfig } from "../../Constants/SiteConfig"

const Footer = () => {
    return (
        <div className="px-2 md:px-10 text-white text-opacity-50 bg-[#111] mt-10 md:mx-10 pb-2 rounded-xl mx-2">
            <div className="flex justify-center pt-10 border-b-2 p-5">
                <i className="fab text-3xl fa-telegram text-white"/>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-5">
                <div className="text-center w-full mb-3 sm:mb-0">
                    Privacy Policy
                </div>
                <div className="text-center w-full">
                    Terms and conditions
                </div>
            </div>
            <div className="mt-5 rounded-xl bg-opacity-60 p-3 bg-primary flex justify-center items-center">
                All Right Reserved By {siteConfig.NAME}
            </div>
        </div>
    )
}

export default Footer
