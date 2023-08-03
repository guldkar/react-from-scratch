import React, { useState } from 'react';
import { TimelineItem } from 'types/types';

interface TimeLineProps {
    items: TimelineItem[];
}

const TimeLine = (props: TimeLineProps) => {
    let [expanded, setExpanded] = useState<string[]>([]);

    const toggleDescriptionExpansion = (id: string) => {
        let index = expanded.findIndex((x) => x == id);
        if (index === -1) {
            setExpanded([...expanded, id]);
            return;
        }
        let newState = expanded.filter((x) => x !== id);
        setExpanded(newState);
    };

    return (
        <ol className='border-l-2 border-sky-500'>
            {props.items.map((item) => (
                <li className='relative'>
                    <div className='flex flex-start items-center'>
                        <div className='-ml-[9px] -mt-2 mr-3 flex flex-shrink-0 h-4 w-4 items-center justify-center rounded-full absolute top-9 left-0 bg-sky-500 border-3 border-sky-  200' />
                        <div className='mb-10 ml-6 block max-w-[700px] rounded-lg bg-neutral-50 p-6 shadow-md border border-slate-200 shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10'>
                            <div className='mb-4 flex justify-between border-b-2 border-slate-300 pb-3'>
                                <h3 className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'>
                                    {item.title}
                                </h3>
                                <span className='text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700'>
                                    {item.start.getFormattedDate()} -{' '}
                                    {item.end.getFormattedDate()}
                                </span>
                            </div>
                            <p className='mb-6 text-neutral-700 dark:text-neutral-200'>
                                {expanded.includes(item.id) ? (
                                    <>
                                        <div>{item.description}</div>
                                        <a
                                            className='text-orange-400 cursor-pointer'
                                            onClick={() =>
                                                toggleDescriptionExpansion(
                                                    item.id
                                                )
                                            }>
                                            se mindre
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <div className='line-clamp-3'>
                                            {item.description.substring(0, 240)}
                                            ...
                                        </div>
                                        <a
                                            className='text-orange-400 cursor-pointer'
                                            onClick={() =>
                                                toggleDescriptionExpansion(
                                                    item.id
                                                )
                                            }>
                                            Se mere
                                        </a>
                                    </>
                                )}
                            </p>
                            <div className='border-b-2 border-slate-300 mb-2' />
                            <div className='flex'>
                                <div className='basis-1/5'>Technologies</div>
                                <div>{item.technologies.join(', ')}</div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default TimeLine;
