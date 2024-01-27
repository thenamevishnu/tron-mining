import Landing from "../Components/LandingPage/Landing"

const LandingPage = () => {
    return (
        <div className="bg-[url('./hero-bg.png')] bg-no-repeat bg-cover bg-fixed bg-right">
            <div className="bg-[#ecf3fb] bg-opacity-95">
                <Landing />
            </div>
        </div>
    )
}

export default LandingPage
