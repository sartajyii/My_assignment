import notes from "../assets/icons/notes.svg";
import timer from "../assets/icons/timer.svg";
import carduser from "../assets/icons/card-user.svg";
//  #E6F1FF
function Card(){
    return(
      <div className="card">
       <div className="card-top">
        <a href="#"><span className="notes"><img src={notes} alt="notes" /></span>Note</a>
        <span className="todo">To Do</span>
       </div>
       <p>Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.</p>
         <div className="associate">
            <a href="#">1 Association(s)</a>
         </div>
         <div className="card-bottom">
            <div className="last-name-card">
                <p><img src={carduser} alt="info" /> john doe</p>
            </div>
            <div className="last-name-card">
                <p><img src={timer} alt="time" />12 Jul 2025 , 11:54 am</p>
            </div>
         </div>
      </div>
    )
}
export default Card;
