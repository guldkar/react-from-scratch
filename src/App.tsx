import React from 'react';
import './app.css';
import {FaUser} from 'react-icons/fa'

import { useAppSelector, useAppDispatch } from 'hooks/State';
import { open } from 'state/WindowSlice';

import Info from 'components/Info';
import WindowBase from 'components/WindowBase';

import Wallpaper from './assets/wallpapaper.png';

const App = () => {
    const windows = useAppSelector((state) => state.window.windows);
    const dispatch = useAppDispatch();
    return (
        <div className='bg-cover w-screen h-screen' style={{background:  `url(${Wallpaper})`}}>
            <div className='p-2'>
                <button
                    onClick={() => dispatch(open())}
                    className='rounded text-white px-4 py-2 text-sm font-semibold shadow-sm hover:border border-slate-500 '>
                   <FaUser className='w-10 h-10'/>
                   <div>Profile</div>
                </button>
                {windows.map((win) => (
                    <WindowBase key={win.id} id={win.id}>
                        <Info />
                    </WindowBase>
                ))}
            </div>
        </div>
    );
};

export default App;
