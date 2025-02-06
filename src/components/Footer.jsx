import { Instagram, Facebook, Mail, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <div className=" flex flex-col justify-between p-6 gap-6 text-white bg-black mt-auto">
            <div className="flex justify-center gap-8">
                <a href="https://www.instagram.com/" className="hover:scale-110 transition duration-300">
                    <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/" className="hover:scale-110 transition duration-300">
                    <Facebook size={24} />
                </a>
                <a href="https://outlook.office.com/mail/" className="hover:scale-110 transition duration-300">
                    <Mail size={24} />
                </a>
                <a href="https://twitter.com" className="hover:scale-110 transition duration-300">
                    <Twitter size={24} />
                </a>
            </div>
            <h1 className="text-center text-sm text-gray-400 mt-4">&copy; 2022 Your Website. All Rights Reserved.</h1>
        </div>
    );
}