import React, { PropsWithChildren } from 'react';

const WindowHeader = (props: PropsWithChildren) => (
    <h2 className='text-3xl text-sky-500 font-bold'>{props.children}</h2>
);

export default WindowHeader;
