import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

export const AppNav = () => {

    return (
        <Nav>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/newflights">New Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights">Current Flights</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/deleteflight">Delete Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/updateflight">Update Flight</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}