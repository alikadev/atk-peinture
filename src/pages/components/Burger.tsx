import React from 'react';

interface BurgerProps {
    opened: boolean,
}

class Burger extends React.Component<BurgerProps,{}>
{
    render()
    {
        return (
            <>
                <div className="burger">
                    <div className="burger_line burger_line1" />
                    <div className="burger_line burger_line2" />
                    <div className="burger_line burger_line3" />
                </div>

                <style>{`
                    .burger
                    {
                        width: 2rem;
                        height: 2rem;
                        display: flex;
                        justify-content: space-around;
                        flex-flow: column nowrap;
                        z-index: 10;
                    }

                    .burger_line
                    {
                        width: 2rem;
                        height: 0.25rem;
                        border-radius: 10px;
                        background-color: black;
                        transform-origin: 1px;
                        transition: all 0.3s linear;
                    }

                    .burger_line1
                    {
                        transform: ${this.props.opened ? 'rotate(45deg)' : 'rotate(0)'}
                    }

                    .burger_line2
                    {
                        opacity: ${this.props.opened ? '0' : '100%'};
                    }

                    .burger_line3
                    {
                        transform: ${this.props.opened ? 'rotate(-45deg)' : 'rotate(0)'}
                    }
                `}</style>
            </>
        )
    }
}

export default Burger;
