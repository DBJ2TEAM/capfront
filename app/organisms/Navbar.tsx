import { FC } from 'react'
import {Navigation} from '../molecules'

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4722e3a ([fix] rebase)
export const Navbar: FC = () => {

    return (
        <Navigation 
        title='Dong-eui University'
<<<<<<< HEAD
=======
export const Navbar: FC = () => (
    <Navigation 
        title='동의대학교'
>>>>>>> 8fd6fb5 (Revert "Reservation")
=======
>>>>>>> 4722e3a ([fix] rebase)
        items={[
            {text:'Home', path:'/'},
            {text:'About us', path:'/About'},
            {text:'Reserve', path:'/'},
            {text:'Contact', path:'/'},
        ]}
        className='flex justify-between items-center h-20'
    />
    )

}