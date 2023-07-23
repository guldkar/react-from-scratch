import React from 'react';
import './app.css';

import { useAppSelector, useAppDispatch } from 'hooks/State';
import { open } from 'state/WindowSlice';

import WindowBase from 'components/WindowBase';

const App = () => {
    const windows = useAppSelector((state) => state.window.windows);
    const dispatch = useAppDispatch();
    console.log('rerender', windows);
    return (
        <>
            <h1 className='text-3xl text-lime-400'>
                Hello world! I am using React
            </h1>
            <button onClick={() => dispatch(open())}>open window</button>
            {windows.map((win) => (
                <WindowBase key={win.id} />
            ))}
        </>
    );
};

export default App;
