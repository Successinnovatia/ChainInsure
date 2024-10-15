import React from 'react'
import Image from 'next/image'
import { LayoutDashboard, CircleStop, House, MapPin, Phone} from 'lucide-react'


const navLinks = [
    {
        icon:<LayoutDashboard/>, text:'Dashboard', section:'dashboard'
    },
    {
        icon: <CircleStop />,
        text: 'Insurance', 
        section:'insurance',
    },
    {
        icon:<CircleStop/>,
        text:'Vault',
        section:'vault',
    },
    {
        icon:<CircleStop/>,
        text:'Staking',
        section:'staking',
    },
    {
        icon:<House />,
        text:'Home',
        section:'home'
    },
    
]

export function DashboardSidebar({onButtonClick}:{onButtonClick:(section:string) => void}) {
    
  return (
    <aside className="w-64 h-screen bg-[#0C0E1A] text-white flex flex-col justify-between p-6 space-y-2 font-sans">
        
            {/*Logo */}
            <div className="mb-6 w-full flex items-center justify-center mt-2">
                <Image src='/images/logo-white.svg' alt='logo' width={100} height={50}/>
            </div>

            {/*nav */}

            <nav>
                {navLinks.map((item, index)=>{
                    return (
                        <button key={index} onClick={()=>onButtonClick(item.section)}className='pl-6 mb-4'>
                            <ul>
                            <li className="flex     items-center space-x-4">
                            {item.icon}
                            <span>{item.text}</span>
                            </li>
                            </ul>
                        </button>
                    )
                })}
            </nav>

            {/* Contact Information */}
            <div className="p-6">

                <p className="text-sm">Contact Us</p>
                <p className="text-sm mt-2 flex items-center"><MapPin className='w-4 h-4 mr-2'/>Location ipsum</p>
                <p className="text-sm mt-1 flex items-center whitespace-nowrap"><Phone className='w-4 h-4 mr-2'/> Phone number ipsum</p>
            </div>

        
    </aside>
  )
}
