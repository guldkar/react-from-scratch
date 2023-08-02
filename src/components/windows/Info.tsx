import React from 'react';
import Profile from '../../assets/profile.png';

const Info = () => {
    return (
        <div className='w-[700px] pb-3 border-b-2 border-slate-300'>
            <div className=' overflow-hidden flex border-b-2 border-slate-300 pb-3 mb-2'>
                <div className='w-1/3 inline-block relative'>
                    <img
                        src={Profile}
                        className='overflow-hidden rounded-full'
                    />
                </div>
                <div className='grid grid-cols-4 ml-3  w-full'>
                    <div className='col-span-1'>Navn</div>{' '}
                    <div className='col-span-3 w-full'>Johan</div>
                    <div className='col-span-1'>Alder</div>{' '}
                    <div className='col-span-3 w-full'>32</div>
                    <div className='col-span-1'>Hobbyer</div>
                    <div className='col-span-3 w-full'>
                        Gaming, Fantasy, Høns, Historie
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='py-1'>
                    Johan har fungeret som udvikler gennem 4 år. Hans primære
                    kompetence er frontend-udvikling, hvor han har et særligt
                    fokus på UI/UX, der opfylder kundens behov. Desuden er han
                    er erfaren backend-udvikler.
                </p>
                <p className='py-1'>
                    Johan har både i sin tid som udvikler og som underviser
                    udvist stor entusiasme for at forklare de tekniske
                    problemstillinger, der opstår under programmering, så det
                    bliver spiseligt for udenforstående.
                </p>
                <p className='py-1'>
                    I sin tid hos Energinet har Johan opbygget stor erfaring med
                    udvikling og vedligehold af Energi Datas Service og EDS
                    Manager, herunder design af brugerinterface og
                    præ-sentationen/udstilling af datasæt.
                </p>
                <p className='py-1'>
                    Johan er god til at spotte potentielle huller i designet og
                    råber hurtigt op, hvis han tror, at vigtig funktionalitet er
                    ble-vet overset. Han er på den måde med til at sikre
                    kvaliteten af det endelige produkt.
                </p>
                <p className='py-1'>
                    Som person er Johan altid villig til at give en hjælpende
                    hånd, hvor det måtte være nødvendigt, og han deler gerne ud
                    af sine erfaringer.
                </p>
            </div>
        </div>
    );
};

export default Info;
