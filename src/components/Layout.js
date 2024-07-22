import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
    const location=useLocation();
    const menuItems = [
        {
            title: 'Home',
            path: '/',
            icon: 'ri-home-heart-line',
        },
        {
            title: 'About',
            path: '/About',
            icon: 'ri-information-2-fill',
        },
        {
            title: 'Clients',
            path: '/Clients',
            icon: 'ri-group-line',
        },
        {
            title: 'Contact',
            path: '/Contact',
            icon: 'ri-contacts-fill',
        },


    ]
    return (
        <div>
            {/* content */}
            <div className="pb-44 overflow-x-hidden">
                {children}
            </div>

            {/* footer */}
            <div className="fixed bottom-10 left-0 right-0">
                <div className='flex w-full justify-center'>
                    {menuItems.map((item, index) => (
                        <div className='flex flex-col justify-end items-center '>
                        {location.pathname === item.path && (<div className='flex flex-col items-center'>
                            <div className='h-5 w-10 bg-Primary rounded-t-full'>


                            </div>
                            <div className='h-5 w-20 bg-Primary rounded-t-full text-center'>
                            <i className={`${item.icon} text-xl text-white `}></i>

                            </div>
                        
                        </div>)}
                        <div
                            className= {`px-20 bg-Primary py-3 ${index===0 && "rounded-l"} ${index===menuItems.length-1 && "rounded-r"} flex items-center justify-center space-x-2`}>
                            {location.pathname!== item.path && <i className={`${item.icon} text-Secondary text-xl`} ></i>}
                            <Link to={`${item.path}`} className='text-Secondary text-xl'>{item.title}</Link>
                        </div>
                        </div>

                    ))}
                </div>

            </div>
            </div >
    )
}
