
import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl font-bold">Job Tracker.</h1>
                    <p className="py-4">
                        Whether you are applying for internships or full-time position Job Tracker provides you with the tools you need to stay on top of your job search. All your job hunting essentials conveniently in one place.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaGithubSquare size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between">
                    <div>
                        <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Support</h6>
                        <ul>
                            <li className="py-2 text-sm">Pricing</li>
                            <li className="py-2 text-sm">Docs</li>
                            <li className="py-2 text-sm">Guidelines</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium text-gray-400">Legal</h6>
                        <ul>
                            <li className="py-2 text-sm">Claim</li>
                            <li className="py-2 text-sm">Policy</li>
                            <li className="py-2 text-sm">Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
