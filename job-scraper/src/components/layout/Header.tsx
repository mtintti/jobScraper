import LoginButton from "./LoginButton";
import LogoButton from "./LogoButton";



const Header = () => {

    const links = [
        
        { name: "About", link: "/about" },
        { name: "Job Tracker", link: "/jobtracker" },
        { name: "Profile", link: "/profile" }
    ];

    return (
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-1">
            <div className="grid grid-cols-2 gap-5">
                <LogoButton/>
            </div>
            <ul className="md:flex md:items-center space-x-8">
                {links.map((link, index) => (
                    <li key={index} className="md:ml-8 text-xl">
                        <a href={link.link} className="text-lg font-normal text-zinc-900">
                            {link.name}
                        </a>
                    </li>
                ))}
                <LoginButton />
            </ul>
        </div>
    );
}

export default Header;


/*  <img src="/path-to-logo.png" alt="Logo" /> */

// Shadow top
/*  <div className="shadow-md w-full fixed top-0 left-0"> */

/*  <li className="md:ml-8 text-xl">
                    <span onClick={LoginClick} className="text-lg font-normal text-zinc-900 cursor-pointer">
                        Login
                    </span>
                </li> */



                /*<div className="grid grid-cols-2 gap-5">
                <div className="flex items-center flex flex-col items-start">
                    <span aria-hidden="true" className="transition-all duration-500 ease-in-out group-hover/cta:translate-x-1">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clip-rule="evenodd" />
                        </svg>
                        
                    </span>
                </div>
            </div>*/