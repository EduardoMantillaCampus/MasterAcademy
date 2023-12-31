import react from "react";
import "../../assets/styles/dasboard/aside.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faArrowRightFromBracket,faBookmark,faUser, faUsers} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function btnHiddenSidebar(){
    const aside = document.getElementById('aside');
    aside.classList.toggle('show');
}

async function exit(){
    try{
        const ipFrontEnd = import.meta.env.VITE_IP_FRONTEND;
        const portFrontEnd = import.meta.env.VITE_PORT_FRONTEND;
        document.cookie = "MasterAcademy-Session=; max-age=0;";
        window.location.href= `http://${ipFrontEnd}:${portFrontEnd}/`
    }catch(e){
        console.log(e.message);
    }
}

export default function Aside(){
    return(
        <>
        <div className="aside" id="aside">
            <p className="title">Master <br/> Academy</p>
            <div className="items">
                <div className="item">
                    <FontAwesomeIcon className="rotate-vert-center" icon={faHouse} style={{color: "#F1C40F",}}/>
                    <Link className="to" to={"/dashboard"}> Home</Link>
                </div>
                <div className="item">
                    <FontAwesomeIcon className="rotate-vert-center" icon={faBook} style={{color: "#2E86C1",}}/>
                    <Link className="to"  to={"/dashboard/courses"}> Courses</Link>
                </div>
                <div className="item">
                    <FontAwesomeIcon className="rotate-vert-center" icon={faUser} style={{color: "#117A65",}}/>
                    <Link className="to" to={"/dashboard/profile"}> Profile</Link>
                </div>
                <div className="item">
                    <FontAwesomeIcon className="rotate-vert-center" icon={faUsers} style={{color: "#2980B9",}}/>
                    <Link className="to" to={"/dashboard/users"}> Users</Link>
                </div>
                <div className="item">
                    <FontAwesomeIcon className="rotate-vert-center" icon={faBook} style={{color: "green",}}/>
                    <Link className="to" to={"/dashboard/courseRequest"}>Request</Link>
                </div>
                <div className="item">
                    <FontAwesomeIcon className="rotate-vert-center" icon={faArrowRightFromBracket} style={{color: "#E74C3C",}}/>
                    <div className="to" onClick={exit}> Exit</div>
                </div>
            </div>
            <div className="btnHeader">
                <button onClick={btnHiddenSidebar}><FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "#f2f2f2",}}/></button>
            </div>
        </div>
        </>
    )
}