import React from 'react'

const CardLayout = ({ children, className = "h-full w-full" }) => {
    return (
        <div className={`${className} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}>
            {children}
        </div>
    )
}

export default CardLayout