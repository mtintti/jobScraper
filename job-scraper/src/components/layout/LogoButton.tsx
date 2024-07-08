import Link from "next/link";
import React, { useState } from "react";

const LogoButton = () => {
    const [showSvg, setSvg] = useState(false);

    return (
        <Link href={"http://localhost:3000/home"}>
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-1">
            <div className="grid grid-cols-2 gap-5">
                {/* Wind SVG */}
                <div className={`transition-transform duration-500 ease-in-out group-hover:translate-x-2 ${showSvg ? 'translate-x-2' : 'opacity-0'}`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                    </svg>
                </div>
                {/* Car SVG */}
                <div className="flex items-center flex flex-col items-start">
                    <span 
                        aria-hidden="true" 
                        className={`transition-transform duration-500 ease-in-out group-hover:translate-x-2 ${showSvg ? 'translate-x-2' : 'translate-x-0'}`}
                        onMouseEnter={() => setSvg(true)}
                        onMouseLeave={() => setSvg(false)}
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default LogoButton;
