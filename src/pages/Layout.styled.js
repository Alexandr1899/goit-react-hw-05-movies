import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderList = styled.ul`
    display: flex;
    list-style: none;
    padding: 10px;
    box-shadow: 0 3px 2px lightgrey;
}
`
export const HeaderItem = styled.li`
    margin-right: 10px;
`
export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    &.active{
    color: red;
}
    :focus:not(.active), :hover:not(.active) {
    color:blue;
}
`