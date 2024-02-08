import React from 'react';
import Burger from './Burger';

interface NavState {
    burgerOpened: boolean,
}

class Nav extends React.Component<{}, NavState>
{
    constructor(props: any)
    {
        super(props);
        this.state = {
            burgerOpened: false
        };
        this.toggleBurgerOpened = this.toggleBurgerOpened.bind(this);
    }

    toggleBurgerOpened() {
        this.setState((prevState) => ({
            burgerOpened: !prevState.burgerOpened
        }));
    }

    render()
    {
        return (
            <>
                <nav className="navigation">
                    <div className="navigation_list">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/about">À propos</a></li>
                        </ul>
                    </div>
                    <div className="navigation_burger" onClick={this.toggleBurgerOpened}>
                        <Burger opened={this.state.burgerOpened}/>
                    </div>
                </nav>
                <style>{`
                    .navigation
                    {
                        display: flex;
                        width: 100%;
                        height: 50px;
                        margin-bottom: 5px;
                        flex-direction: row-reverse;
                        justify-content: space-between;
                    }

                    .navigation_list
                    {
                        align-self: center;
                        margin: 10px;
                    }

                    .navigation_list ul
                    {
                        margin: 0;
                        display: flex;
                        flex-wrap: wrap;
                        float: right;
                        height: 100%;
                    }

                    .navigation_list ul li
                    {
                        height: 100%;
                        list-style-type: none;
                        padding-left: 20px;
                    }

                    .navigation_list ul li a
                    {
                        color: black;
                        text-decoration: none !important;
                        font-weight: bold;
                    }

                    .navigation_burger
                    {
                        display: none
                    }

                    @media (max-width: 767px)
                    {
                        .navigation_burger
                        {
                            display: block;
                            padding-top: 10px;
                            margin-left: 10px;
                            z-index: 10;
                        }


                        .navigation ul
                        {
                            display: ${this.state.burgerOpened ? 'flex' : 'none'};
                        }
                    }
                `}</style>
            </>
        )
    }
}

export default Nav;
