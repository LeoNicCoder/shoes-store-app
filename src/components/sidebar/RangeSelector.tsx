import React, {useState} from 'react';

type Props = {
    initial_value: number;
    step: number;
    min: number;
    max: number;
    tag: string;
};

const RangeSelector: React.FC<Props> = ({initial_value, step, min, max, tag}) => {

    const [value, setValue] = useState<number>(initial_value);
    //const [lineWidth, setLineWidth] = useState<number>(50);

    const showValue = function(event: React.FormEvent<HTMLInputElement>): void  {
        setValue(parseInt(event.currentTarget.value));
    }

    var lineWidth:string = (value * 100 / max) + '%';
    
    return(
        <div className="">
            <p className="text-sm text-gray-1 block">{tag}</p>
            <label className="text-sm text-gray-1 block" htmlFor="range">$0 - ${value}</label>
            <div className="relative">
                <div className="line-t w-full line-ct-pt">
                    <div className="line-p bg-gray-4">
                        <div className="bg-primary line" style={{width: lineWidth}}></div>
                    </div>
                </div>
                <div className="border-2 left-0 top-0 absolute z-10 border-primary 
                rounded-full bg-white h-4 w-4"></div>
                <input className="w-full top-0 bg-transparent absolute z-20 cursor-pointer appearance-none focus:outline-none" min={min} max={max} step={step} 
                type="range" value={value} name="range" id="range" onInput={showValue}/>
            </div>
        </div>
    )
}

export default RangeSelector;