import Link from "next/link";
import LoginButton from "./LoginButton";



const Header = () => {

    const links = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Job Tracker", link: "/jobtracker" },
        { name: "Profile", link: "/profile"}
    ];

    return (
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-1">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                <span className="text-3xl text-zinc-900 mr-1 pt-2 ml-">
                    Logo
                </span>
            </div>
            <ul className="md:flex md:items-center space-x-8">
                {links.map((link, index) => (
                    <li key={index} className="md:ml-8 text-xl">
                        <a href={link.link} className="text-lg font-normal text-zinc-900">
                            {link.name}
                        </a>
                    </li>
                ))}
                <LoginButton/>
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