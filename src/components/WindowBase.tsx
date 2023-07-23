import React, { useState, useCallback, PropsWithChildren } from 'react';

const WindowBase = (props: PropsWithChildren) => {
    const [position, setPosition] = useState<Position>({ x: 250, y: 250 });
    const [size, setSize] = useState<WindowSize>({ width: 400, height: 300 });

    const resizeTarget = useCallback(
        (initPos: Position) => (ev: Event) => {
            let event = ev as MouseEvent;
            setSize({
                height: size.height + (event.clientY - initPos.y),
                width: size.width + (event.clientX - initPos.x),
            });
        },
        []
    );

    const moveTarget = useCallback(
        (initPos: Position) => (ev: Event) => {
            let event = ev as MouseEvent;
            let { dx, dy } = getDeltaPos(event, initPos);
            setPosition({
                x: position.x + dx,
                y: position.y + dy,
            });
        },
        []
    );

    const getDeltaPos = (ev: MouseEvent, initPos: Position) => {
        return {
            dx: ev.clientX - initPos.x,
            dy: ev.clientY - initPos.y,
        };
    };

    const startMovement = (ev: React.MouseEvent): void => {
        let move = moveTarget({ x: ev.clientX, y: ev.clientY });

        document.addEventListener('mousemove', move, false);
        document.addEventListener(
            'mouseup',
            () => document.removeEventListener('mousemove', move),
            { once: true }
        );
    };

    const startResize = (ev: React.MouseEvent) => {
        let resize = resizeTarget({ x: ev.clientX, y: ev.clientY });

        document.addEventListener('mousemove', resize);
        document.addEventListener(
            'mouseup',
            () => document.removeEventListener('mousemove', resize),
            { once: true }
        );
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: size.width,
                height: size.height,
                background: 'magenta',
            }}
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
