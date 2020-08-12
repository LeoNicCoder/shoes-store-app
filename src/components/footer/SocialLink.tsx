import React from 'react';

type Props = {
    url: string;
}

const SocialLink: React.FC<Props> = ({url, children}) => {

    return (
        <a className="bg-white w-8 h-8 flex justify-center items-center rounded-full 
        no-underline text-base text-black shadow-ct" href={url}>
            {children}
        </a>
    )
}

export default SocialLink;