'use client'

import Image from "next/image"
import React from "react";
interface AvatarProps{
    user?: string;
}
const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    return(
        <div className="
            flex 
            flex-col
            items-center
            justify-center
            space-y-4
        ">
                <Image 
                    alt="Avatar"
                    src={user || '/images/usuario.png'}
                    width={70} 
                    height={70}
                />
                
                <div className="text-white">¡Bienvenido!</div>
                
                    
        </div>
    );
}

export default Avatar;