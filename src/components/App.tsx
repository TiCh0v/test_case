import React, {useState} from 'react';
import './App.scss'
import { Link, Outlet } from 'react-router-dom';



export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1)
       
    }


    return (
        <div >

            <Link to={'/shop'}>shop</Link>
            <Link to={'/about'}>about</Link>

            <h1 className='button'>{count}</h1>
            <button onClick={increment}><span>
                asfasf
            </span></button>
            <Outlet />
            
        </div>
    );
};
