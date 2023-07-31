import React from 'react';

const Info = () => {
    return (
        <div className='p-3'>
            <div className='w-[700px] overflow-hidden'>
                <div className='w-1/3 inline-block relative'>
                    <img
                        src='https://picsum.photos/200/200'
                        className='overflow-hidden rounded-full'
                    />
                </div>
                <div className='flex w-full'>
                    <span>Navn</span>
                    <span>Johan</span>
                </div>
            </div>
        </div>
    );
};

export default Info;
