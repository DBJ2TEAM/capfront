import { FC } from 'react'
import {Navigation} from '../molecules'

<<<<<<< HEAD
export const Navbar: FC = () => (
    <Navigation 
        title='동의대학교'
=======
export const Navbar: FC = () => {

    return (
        <Navigation 
        title='Dong-eui University'
>>>>>>> develop
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