import Link from "next/link";

const Header = () => {
    const links = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Job Tracker", link: "/jobtracker" },
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
            </ul>
        </div>
    );
}

export default Header;


/*  <img src="/path-to-logo.png" alt="Logo" /> */

// Shadow top
/*  <div className="shadow-md w-full fixed top-0 left-0"> */