import { RiBilibiliFill } from "react-icons/ri";
import camel1 from '../Asset/camel1.png';
import camel2 from '../Asset/camel2.png';
import camel3 from '../Asset/camel3.png';

export const assistants = [
    { id: 1, icon: <RiBilibiliFill className='text-6xl p-1 text-green-500' />, name: 'CMCTS Bot' },
    { id: 2, icon: <img src={camel1} alt='' className='w-16 h-20 p-1' />, name: 'BPS BonBon' },
    { id: 3, icon: <img src={camel2} alt='' className='w-16 h-20 p-1' />, name: 'Sovos' },
    { id: 4, icon: <img src={camel3} alt='' className='w-16 h-20 p-1' />, name: 'LexCom' },
    // Add more assistants as needed
];