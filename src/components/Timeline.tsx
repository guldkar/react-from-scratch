import React from 'react';
import { TimelineItem } from 'types/types';

interface TimeLineProps {
    items: TimelineItem[];
}

const TimeLine = (props: TimeLineProps) => (
    <ol className='border-l-2 border-sky-500'>
        {props.items.map((item) => (
            <li>
                <div className='flex-start md:flex'>
                    <div className='-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-sky-500 text-info-700 absolute'></div>
                    <div className='mb-10 ml-6 block max-w-[700px] rounded-lg bg-neutral-50 p-6 shadow-md border border-slate-200 shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10'>
                        <div className='mb-4 flex justify-between'>
                            <h3 className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'>
                                {item.title}
                            </h3>
                            <span className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'>
                                {item.start.getFormattedDate()} -{' '}
                                {item.end.getFormattedDate()}
                            </span>
                        </div>
                        <p className='mb-6 text-neutral-700 dark:text-neutral-200'>
                            {item.description}
                        </p>
                    </div>
                </div>
            </li>
        ))}
    </ol>
);

export default TimeLine;
