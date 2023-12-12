import { FC } from 'react'
import {Navigation} from '../molecules'


export const Navbar: FC = () => {

    return (
        <Navigation 
        title='Dong-eui University'
        items={[
            {text:'Home', path:'/'},
            {text:'About us', path:'/About'},
            {text:'Reserve', path:'/Reservation'},
            {text:'Contact', path:'/'},
        ]}
        className='flex justify-between items-center h-20'
    />
    )

}