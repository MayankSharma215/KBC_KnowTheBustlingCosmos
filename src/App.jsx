// 

import { useEffect, useState } from 'react';
import './App.css';
import './components/Quiz';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username,setUsername] = useState(null);
  const [ques_no, set_que_no] = useState(1);
  const [stop, setStop] = useState(false);
  const [level, setlevel] = useState('The Wildest Dream');

  const data = [
    {
      id: 1,
      question: "How many planets in solar system don’t have moon?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: "Which of the following is the largest constellation of night sky?",
      answers: [
        {
          text: "Hydra",
          correct: true,
        },
        {
          text: "Orion",
          correct: false,
        },
        {
          text: "Saptrishi",
          correct: false,
        },
        {
          text: "Maha Shwana",
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: " What is the most abundant element in the universe?",
      answers: [
        {
          text: "Hydrogen",
          correct: true,
        },
        {
          text: "Helium",
          correct: false,
        },
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Carbon",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "What is the outermost layer of the sun?",
      answers: [
        {
          text: "Photosphere",
          correct: false,
        },
        {
          text: "Chromosphere",
          correct: false,
        },
        {
          text: "Radiatosphere",
          correct: false,
        },
        {
          text: "Corona",
          correct: true,
        },
      ],
    },

  ];

  const levelmap = [
    {id:15 , name: '15.  Landing On Proxima - B'},
    {id:14 , name: '14.  Enter The System- Alpha'},
    {id:13 , name: '13.  The Infinite Vacuum'},
    {id:12 , name: '12.  Find Someone Rogue'},
    {id:11 , name: '11.  In The Void'},
    {id:10 , name: '10.  Pluto - Dwarf\'S Rage'},
    {id:9 , name: '9.  Saturn - A Titan\'S Move'},
    {id:8 , name: '8.  Jupiter - Hail The King Of Plantes'},
    {id:7 , name: '7.  Mars Base - The Red Step'},
    {id:6 , name: '6.  Moon Base - Next Small Step'},
    {id:5 , name: '5.  Towards The Karman Line'},
    {id:4 , name: '4.  Through The Blue Across The Atmosphere'},
    {id:3 , name: '3.  Ignite - 3...2...1'},
    {id:2 , name: '2.  Rocket - Get The Fuel'},
    {id:1 , name: '1.  Ready - Train The Vyomanaut'}
  ];



  useEffect(()=>{
    ques_no>1 &&
    setlevel(levelmap.find((m)=> m.id === ques_no-1).name)
  },[ques_no]
 )
  
  return (

    <div className="app">
     { !username?
        (<Start setUsername={setUsername}/>):
        (
          <>
          <div className="main">
      { stop? 
       (<h1 className='game-over'>Vyomnaut You reached level : {level}</h1>)
       :
      (
        <>
        <div className="top">
      <div className="timer">
        <Timer setStop={setStop} ques_no={ques_no}/>
      </div>
    </div>
     <div className="bottom">
        <Quiz 
             data={data} 
             setStop = {setStop}
             ques_no = {ques_no}
             set_que_no = {set_que_no}
             />
     </div>
        </>
      )
      };
    
    </div>

    <div className="level-container">
      <ul className="levelList">
         { levelmap.map((item)=>
            <li className={ques_no==item.id?'level active':'level'}>
              <span className='levelname'>{item.name}</span>
              </li>
          )
        }
      </ul>
    </div>
          
          </>
        )
     }

    
    </div>
  );
}

export default App;
