import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { HeaderList,  HeaderItem, HeaderLink} from "./Layout.styled"


export const Layout = () => {
    return <div>
        <HeaderList>
            <HeaderItem><HeaderLink to="/" end>Home</HeaderLink></HeaderItem>
            <HeaderItem><HeaderLink to="/movies">Movies</HeaderLink></HeaderItem>
        </HeaderList>
        <Suspense fallback={null}><Outlet /></Suspense>
    </div>
}