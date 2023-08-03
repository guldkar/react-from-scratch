import { TimelineItem } from 'types/types';
import WindowHeader from '../styled/WindowHeader';
import TimeLine from '../Timeline';
import React from 'react';
import { ExtendedDate } from '../../Utils/Extensions';
import uuid from 'react-uuid';

const MjolnerExperience = () => {
    return (
        <div className='w-[700px]'>
            <WindowHeader>Projekter i Mjølnerregi</WindowHeader>
            <div className='py-4'>
                <TimeLine items={experiences} />
            </div>
        </div>
    );
};

export default MjolnerExperience;

const experiences: TimelineItem[] = [
    {
        id: uuid(),
        title: 'Energinet – Energidataservice.dk',
        start: new ExtendedDate('2022/04/01'),
        end: new ExtendedDate('2023/06/30'),
        description: `Energinet har som bunden opgave at skulle forsyne danske netoperatører med informationer om transmissionsnettets tilstand. Til det har Energinet udviklet Energi Data Service (EDS), så alle operatører har adgang til alle data på samme tid. Energidataservice udstiller data i en frontend, som Jo-han har haft hovedansvaret for gennem sin tid hos Energinet. 
        Johan har været en del af dataplatformsteamet, hvor han udover udvik-ling af Energi Data Service også har været eneste frontendudvikler på den tilhørende CMS EDS Manager. Her har han også varetaget ho-vedparten af backendarbejdet (.NET, C#), hvor han har arbejdet med at opdatere og udvide REST API’s tilhørende både EDS Manageren og Energi Data Service’s hovedside samt opdatering af de tilhørende MSSQL-databaser.
        Johan har været sparringspartner på brugergrænsefladens design-ændringer, så det i fællesskab med Energinet er blevet den bedste bru-geroplevelse. Dette har inkluderet design og opdatering af præsentatio-nen af datasæt, metadata til datasæt samt værktøjer til filtrering af data og datasæt.
        Johan har været en drivende kraft i videreudviklingen af Energi Data Service funktioner, og har været bærende i både design og implementering af nyheder, nyhedsmails samt tags, grupper og filtrering på bag-grund af disse.
        Til at understøtte forretningen i at udstille nyheder og filtre til datasæt, har Johan udviklet værktøjer til oprettelse af nyheder og nyhedsmails i EDS Manageren og offentliggørelsen af disse til Energi Data Service. Jo-han har også varetaget størstedelen af arbejdet med at implementere tags og datasætgrupper på EDS Manageren, hvor han både har været ansvarlig for frontend funktionalitet, layout og det tilhørende REST API.
        Johan har i tæt samarbejde med teamet udviklet frontenden af en ny un-derside, build report, hvor data kan trækkes fra forskellige dataplatfor-me/-sæt og kompileres i en rapport, der er tiltænkt brugere, som er domæneeksperter, men ikke nødvendigvis it-kyndige. 
        Johan har indgået i forundersøgelsen af monitorering af Energi Data Service og har også deltaget i en gennemgang af Energi Data Service’s tilgængelighed og har deltaget i udarbejdelsen af sidens tilgængelig-hedsmanifest. I den forbindelse har Johan introduceret forretningen for værktøj til undersøgelse af tilgængelighed.
        `,
        technologies: ['C#', 'blazor', '.NET', 'REST-API', 'MSSQL'],
    },
    {
        id: uuid(),
        title: 'Mjølner - Skuld',
        start: new ExtendedDate('2022/03/01'),
        end: new ExtendedDate('2022/04/01'),
        description:
            'Skuld er et internt Mjølner-projekt til ressourceallokering. Johan har på dette projekt vedligeholdt og udvidet funktionalitet skrevet i Jquery, lavet småjusteringer i backenden og var en vigtig del i at migrere fronten-den fra jQeury til React. I den forbindelse har Johan opsat Redux med RTk Query og codegen ud fra open api specifikationer.',
        technologies: ['C#', '.NET5', 'jQuery', 'React', 'Redux', 'RTKQuery'],
    },
    {
        id: uuid(),
        title: 'Concordium NFT store',
        start: new ExtendedDate('2022/02/01'),
        end: new ExtendedDate('2022/03/01'),
        description:
            'Concordium har udviklet sin egen cryptocurrency og ønsker på baggrund af den, at åbne en NFT webbutik, hvor valutaen kan bruges. Idéen er at butik-ken lægges ud offentligt tilgængeligt, så det bliver nemt for interesserede virksomheder at starte en NFT butik med indbygget walletconnect. Mjøl-ners opgave er at levere en webbutik, hvor det er muligt at bruge wallets til at købe NFT’er med sin cryptocurrency.',
        technologies: ['React', 'WalletConnect'],
    },
    {
        id: uuid(),
        title: 'Simonsen cross platform shipping system',
        start: new ExtendedDate('2022/02/01'),
        end: new ExtendedDate('2022/03/01'),
        description:
            'Simonsen har tidligere fået udviklet et shippingsystem, så det er muligt for shippingleverandører at tilgå og tilføje udvalgte data i Simonsens Navision system. Projektet her tilføjer mere funktionalitet til Simonsen syste-met, så det bliver muligt for shippingvirksomheder at se deres ordrer samt at ændre på forventet ankomst og afgang.',
        technologies: ['React', 'NodeJs'],
    },
];
