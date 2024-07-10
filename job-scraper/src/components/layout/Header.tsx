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

