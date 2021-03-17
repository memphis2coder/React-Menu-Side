import React, { useRef, useEffect } from 'react'
import './menu.css';
import { gsap } from "gsap";

function Menu({ state }) {

    let menu = useRef(null);

    useEffect(() => {
        // if its closed
        if (state.clicked === false) {
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            })
            gsap.to(menu, {
                duration: 0.8,
                width: 0,
                ease: "power3.inOut"
            })
            console.log("none")
        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            gsap.to(menu, {
                css: {display: "flex"}
            });
            gsap.to(menu,{
                duration: 0,
                width: "50%",
            });
            gsap.from(menu, {
                width: 0,
                duration: 1,
                ease: "power3.inOut"
            })
            console.log("flex")
        }
    },[state])


    return (
        <div ref={el => (menu = el)} className="menu">
            <div className="container">
                <div className="menu-inner">
                    <nav>
                        <ul>
                            <li>
                                <span>Home</span>
                            </li>
                            <li>
                                <span>Team</span>
                            </li>
                            <li>
                                <span>About</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Menu;
