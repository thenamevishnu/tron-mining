import { BrowserRouter, Routes as Routers, Route } from "react-router-dom"
import LandingPage from "../Pages/LandingPage"
import Authorization from "../Utils/Auth"

const Routes = () => {
    return (
        <BrowserRouter>
            <Routers>
                <Route exact path="/">
                    <Route path="" element={ <Authorization landing><LandingPage /></Authorization> } />
                </Route>
            </Routers>
        </BrowserRouter>
    )
}

export default Routes