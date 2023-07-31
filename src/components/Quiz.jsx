import { useEffect, useState } from "react"
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

export default function Quiz(
       {data,
        setStop,
        ques_no,
        set_que_no}
        ){
  
  const [question,setQuestion] = useState(null);
  const [selectedOption,setSelectedOption] = useState(null);
  const [className, setClassName] = useState("option");

  const [play_sound] = useSound(play);
  const [correct_sound] = useSound(correct);
  const [wrong_sound] = useSound(wrong);
  
  useEffect(()=>{
    play_sound()
  }
  ,[ques_no]);
  
  useEffect(() => {
    setQuestion(data[ques_no - 1]);
  }, [data, ques_no]);

  const delay = (duration,checkOption)=> {
       setTimeout(() => {
        checkOption();
       }, duration);
  };


  const handleClick = (a)=>{
    setSelectedOption(a);
    setClassName("option active");

    delay(3000,()=>{
      if(a.correct){
        setClassName("option correct");
        correct_sound();
      }else{
        setClassName("option wrong");
        wrong_sound();
      }
    }
      );

    delay(5000, ()=>{
        if(a.correct){
          set_que_no((prev)=>prev+1);
          setSelectedOption(null);
        }
        else{
          setStop(true);
        }
      }
      );
  };

  return (
    <div className="quiz">
        <div className="question">{question?.question}</div>
        <div className="options">
            {question?.answers.map((a)=>(
              <div className={selectedOption===a? className : "option"} onClick={()=>handleClick(a)}>{a.text}</div>
            )
            )}
            
        </div>
    </div>
  )
}
