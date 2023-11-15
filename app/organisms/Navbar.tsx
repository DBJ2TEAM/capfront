import { FC } from 'react'
import {Navigation} from '../molecules'

export const Navbar: FC = () => (
    <Navigation 
        title='Dong-eui University'
        items={[
            {text:'Home', path:'/'},
            {text:'About us', path:'/'},
            {text:'Reserve', path:'/'},
            {text:'Contact', path:'/'},
        ]}
        className='flex justify-between items-center h-20'
    />
)