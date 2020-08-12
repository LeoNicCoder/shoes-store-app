import React from 'react';
import LogoImage from '../../assets/Logo.png';

const Logo: React.FC = () => {

    return(
        <a href="./">
            <img src={LogoImage} alt="logo-image"/>
        </a>
    )
}

export default Logo;