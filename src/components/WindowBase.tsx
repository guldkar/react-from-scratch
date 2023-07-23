import React, {
    useState,
    useCallback,
    PropsWithChildren,
    useEffect,
} from 'react';

const WindowBase = (props: PropsWithChildren) => {
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
                position: 'absolute',
                top: 200,
                left: 300,
                width: 300,
                height: 200,
                background: 'magenta',
            }}
            id='test'
            draggable='false'>
            <div
                style={{
                    width: '100%',
                    height: 25,
                    background: 'blue',
                }}
                draggable='false'
                onMouseDown={startMovement}></div>

            <div>{props.children}</div>
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    height: 20,
                    width: 20,
                    background: 'black',
                }}
                onMouseDown={startResize}></div>
        </div>
    );
};

export default WindowBase;

export interface Position {
    x: number;
    y: number;
}

interface WindowSize {
    height: number;
    width: number;
}
