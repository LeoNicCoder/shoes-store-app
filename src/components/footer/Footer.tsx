import React from 'react';
import SocialLink from './SocialLink';
import {FaFacebookF} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import Logo from '../shared/Logo';




const Footer: React.FC = () => {

    return(
        <footer className="bg-secondary mt-2 px-6 py-12">

            <div className="flex justify-center mb-10">
                <Logo />
            </div>

            <div className="flex justify-center mb-12">
                <div className="flex justify-between w-2/4" >
                    <a href="./" className="text-base font-medium no-underline text-blue-1">Terms of Service</a>
                    <a href="./" className="text-base font-medium no-underline text-blue-1">Privacy Policy</a>
                    <a href="./" className="text-base font-medium no-underline text-blue-1">Security</a>
                    <a href="./" className="text-base font-medium no-underline text-blue-1">Sitemap</a>
                </div>
            </div>

            <div className="flex w-full">

                <div className="w-1/3" >
                    <p className="text-sm text-blue-1" >English -</p>
                </div>

                <div className="w-1/3 flex justify-center">

                    <div className="flex justify-between w-2/3">
                        <SocialLink url="./">
                            <FaFacebookF />
                        </SocialLink>

                        <SocialLink url="./">
                            <FaTwitter className="text-sm" />
                        </SocialLink>

                        <SocialLink url="./">
                            <FaInstagram className="text-sm" />
                        </SocialLink>
                    </div>
                </div>


                <div className="flex justify-end w-1/3">
                
                    <p className="text-sm text-blue-1" >© 2020 Sport Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;