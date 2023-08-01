import React, { PropsWithChildren } from 'react';

export interface WindowBaseProps {
    id: string;
}

const WindowBase = (props: PropsWithChildren<WindowBaseProps>) => {
    const resizeTarget = (ev: Event) => {
        let event = ev as MouseEvent;
        const target = document.getElementById('test')!;
        target.style.width = `${target.offsetWidth + event.movementX}px`;
        target.style.height = `${target.offsetHeight + event.movementY}px`;
    };

    const moveTarget = (ev: Event) => {
        let event = ev as MouseEvent;
        const target = document.getElementById('test')!;
        target.style.left = `${target.offsetLeft + event.movementX}px`;
        target.style.top = `${target.offsetTop + event.movementY}px`;
    };

    const startMovement = (ev: React.MouseEvent): void => {
        document.addEventListener('mousemove', moveTarget, false);
        document.addEventListener(
            'mouseup',
            () => document.removeEventListener('mousemove', moveTarget),
            { once: true }
        );
    };

    const startResize = (ev: React.MouseEvent) => {
        document.addEventListener('mousemove', resizeTarget);
        document.addEventListener(
            'mouseup',
            () => document.removeEventListener('mousemove', resizeTarget),
            { once: true }
        );
    };

    return (
        <div
            style={{
                top: 200,
                left: 300,
                width: 300,
                height: 200,
            }}
            className='shadow-lg rounded border bg-orange-50 border-slate-300 absolute overflow-hidden'
            id='test'
            draggable='false'>
            <div
                className='box-border h-6 w-full bg-slate-300'
                draggable='false'
                onMouseDown={startMovement}></div>

            <div className='container'>{props.children}</div>
            <div
                className='absolute right-0 bottom-0 w-0 h-0 border-solid border-b-[10px] border-r-[10px] border-b-zinc-400 border-r-zinc-400 border-l-transparent border-l-[10px] border-t-[10px] border-t-transparent'
                onMouseDown={startResize}></div>
        </div>
    );
};

export default WindowBase;
