import React from 'react';
import './app.css';

import { useAppSelector, useAppDispatch } from 'hooks/State';
import { open } from 'state/WindowSlice';

import Info from 'components/Info';

import WindowBase from 'components/WindowBase';

const App = () => {
    const windows = useAppSelector((state) => state.window.windows);
    const dispatch = useAppDispatch();
    console.log('rerender', windows);
    return (
        <div className='bg-gradient-to-br fromsky-500 to-fuchsia-400 w-screen h-full h-screen'>
            <button onClick={() => dispatch(open())}>open window</button>
            {windows.map((win) => (
                <WindowBase key={win.id} id={win.id}>
                    {' '}
                    <Info />{' '}
                </WindowBase>
            ))}
        </div>
    );
};

export default App;
