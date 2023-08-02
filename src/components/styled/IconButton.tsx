import React, { PropsWithChildren } from 'react';

export interface IconButtonProps {
    onClick: () => void;
    className?: string;
}

const IconButton = (props: PropsWithChildren<IconButtonProps>) => (
    <button
        onClick={props.onClick}
        className='
          rounded 
        text-white 
          px-4 
          py-2 
          text-sm 
          font-semibold 
          shadow-sm border 
        hover:border-slate-500 
          w-[95px] 
          h-[105px]
          flex flex-col justify-center align-middle
          m-2
        '>
        {props.children}
    </button>
);

export default IconButton;
