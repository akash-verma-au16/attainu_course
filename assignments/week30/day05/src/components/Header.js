import React from 'react'

const Header = () => {
    return (
        <div className='box'>
            <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1981&q=80"
                style={{ height: '50vh', width: '100%' }}
                alt=""
            />
            <div className='text d-flex flex-column'>
                <h1 className="text-light text-center">Develop Experiences</h1>
                <h4 className="text-light text-center">UI framework and app development tools which 1.9 million developers use.</h4>
            </div>
        </div>
    )
}

export default Header
