import React from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <div className='info'>
         <h2>Rock. Paper. Scissors</h2>
         <div className='wins-losses'>
           <div className='wins'>
             <span className='number'>0</span>
             <span className='text'>Wins</span>
           </div>

           <div className='losses'>
             <span className='number'>0</span>
             <span className='text'>Losses</span>
           </div>
         </div>
      </div>

     <div className='choices'>
       <div>You</div>
       <div />
       <div>Computer</div>

       <div>
         <button className='rock'>
           <Rock />
         </button>
         <button className='paper'>
           <Paper />
         </button>
         <button className='scissors'>
           <Scissors/>
         </button>
       </div>

       <div className='vs'>vs</div>

       <div>
         <button className='computer-choice'>?</button>
       </div>
     </div>
    </div>
  )
}