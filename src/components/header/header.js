import React, {useState} from 'react'
import Menu from '../menu/menu';
import './header.css';

function Header() {

    const [state, setState] = useState({
        initial: null,
        clicked: false,
        menuName: "Menu"
    });

    // function to handle menu button text
    const handleMenu = () => {
        if (state.initial === false) { // the original state when app opens
            setState({
                initial: null,
                clicked: false,
                menuName: "Menu"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            })
        }
    };
    return (
        <div>
            <header>
                <div className="container">
                    <div className="inner-header">
                        <div className="logo">
                            <span>logo</span>
                        </div>
                        <div className="menu-btn">
                            <button onClick={handleMenu}>{state.menuName}</button>
                        </div>
                    </div>
                </div>
            </header>
            <Menu state={state}/>
        </div>
    )
}

export default Header;
