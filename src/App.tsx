import React from 'react';
import './app.css';
import { FaUser, FaGavel } from 'react-icons/fa';

import { useAppSelector, useAppDispatch } from 'hooks/State';
import { open } from 'state/WindowSlice';

import Info from 'components/Info';
import WindowBase from 'components/WindowBase';
import IconButton from 'components/styled/IconButton';
import { WindowTypesEnum } from 'types/Enums';

import Wallpaper from './assets/wallpapaper.png';
import WindowMap from 'Utils/WindowMap';

const App = () => {
    const windows = useAppSelector((state) => state.window.windows);
    const dispatch = useAppDispatch();
    return (
        <div
            className='bg-cover w-screen h-screen'
            style={{ background: `url(${Wallpaper})` }}>
            <div className='p-2'>
                <div className='flex flex-col'>
                    <IconButton
                        onClick={() => dispatch(open(WindowTypesEnum.Profile))}>
                        <FaUser className='w-10 h-10 self-center' />
                        <div>Profil</div>
                    </IconButton>
                    <IconButton
                        onClick={() =>
                            dispatch(open(WindowTypesEnum.MjolnerExperience))
                        }>
                        <FaGavel className='w-10 h-10' />
                        <div>Mjølner erfaring</div>
                    </IconButton>
                </div>
                {windows.map((win) => (
                    <WindowBase key={win.id} id={win.id}>
                        {WindowMap.get(win.type)}
                    </WindowBase>
                ))}
            </div>
        </div>
    );
};

export default App;
