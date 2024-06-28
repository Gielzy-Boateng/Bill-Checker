import { useState } from "react";

const Header = () => {

  const steps = [
   ' Welcome😊, check out the lessons on the right⏩ ',
   'Introduction to HTML',
   'Introduction to CSS',
   'Introduction to Javascript',
   'Introduction to React⚛️'
  ]

  const [move, setMove] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  const handleClose= ()=>{
      setIsOpen(!isOpen);
  }

  const handleEventNext = ()=>{
    if(move < 5)
    setMove( m=> m + 1);
  }
  const handleEventPrevious = ()=>{
    if(move > 1)
    setMove(m=> m - 1);
  }

  

  return (
    
          <div>
         <h2>Welcome, kindly take a look at what we offer here down below;</h2>
          <button className="close" onClick={handleClose}>&times;</button>
        <div className="header">
            <div className="course">
                <div className={`${move >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${move >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${move >= 3 ? 'active' : ''}`}>3</div>
                <div className={`${move >= 4 ? 'active' : ''}`}>4</div>
                <div className={`${move >= 5 ? 'active' : ''}`}>5</div>
                </div>
                <p>Steps: {steps[move-1]}</p>
                <div className="btn">
              <button onClick={handleEventPrevious}>Previous</button>
              <button onClick={handleEventNext}>Next</button>
              </div>
            </div>
</div>
    );

}
 
export default Header;