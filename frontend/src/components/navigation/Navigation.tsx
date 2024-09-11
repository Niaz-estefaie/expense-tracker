import styled from "styled-components";
import avatar from '../../assets/images/avatar.png';

function Navigation() {
    return (
        <NavStyled>
            <div className="user-container">
                <img src={avatar} alt="Avatar" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your money</p>
                </div>
            </div>
            <ul className="menu-items"></ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`

`;

export default Navigation;