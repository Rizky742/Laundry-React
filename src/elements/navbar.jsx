import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
function navbar() {
    const title = "LAUNDRY />"
    let links = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/service" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
    ]
    return (
        <Fade>
        <div className="container mx-auto">
            <div className="w-full">
                <div className="md:flex items-center justify-between bg-white py-4">
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-reem text-blue1'>
                        {title}
                    </div>
                    <ul className='md:flex md:items-center font-medium md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0'>
                        {
                            links.map((link) => (
                                <li key={link.name} className='md:ml-9 md:my-0 my-7'>
                                    <Link to={link.link}><span className='hover:text-blue1'>{link.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default navbar