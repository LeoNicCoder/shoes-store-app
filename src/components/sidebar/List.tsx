import React from 'react';

type Props = {
    label: string;
    name: string;
    options: Array<string>;
    //callback: any;
}

const List: React.FC<Props> = ({label, name, options}) => {

    const showData = function (event: React.FormEvent<HTMLSelectElement>): void {

        console.log(event.currentTarget.value);
    }

    return(
        <div className="bg-white mb-6 px-5 py-2 rounded-li shadow-sm">
            <label className="text-li text-gray-2 block" htmlFor={name}>{label}</label>
            <div className="flex relative items-center h-5">
                <select className="appearance-none text-sm border-none outline-none ml-0 bg-transparent text-gray-1 
                arrow-select cursor-pointer w-full z-10 absolute" 
                name={name} id={name} onChange={showData}>

                    {
                    options.map(opt => (
                    <option value={opt}>{opt}</option>
                    ))
                    
                    }

                </select>
                <div className="arrow-down ml-auto"></div>
            </div>
        </div>
    )
}

export default List;