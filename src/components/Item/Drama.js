// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getSeasons } from "../../apis/DramaAPI";
import Item from "./Item.module.css";

function Drama({ drama }) {

    // const { sId } = useParams();

    // const [season, setSeason] = useState({});

    // useEffect(
    //     () => {
    //         getSeasons(sId).then(resseason => setSeason(resseason))
    //     },
    //     []
    // );

    return (
        <Link to={`/${drama.show.id}`}>
            <div className={ Item.dramaItem }>
                <h4>영제 : { drama.show.name }</h4>
                <img src={ drama.show.image  === null? '../../not-found.png': drama.show.image.original } width="300px" height="400px"/>
                <p>
                    장르 : { drama.show.type } / { drama.show.genres } <br/>
                    방송 요일/시간 : { drama.show.schedule.days } / { drama.show.schedule.time } <br/>
                    방송 기간 : {drama.show.premiered} ~ {drama.show.ended} <br />
                    시즌/회차 : 시즌{ drama.season } / { drama.number }회 <br/>
                    {/* 총 시즌 : {season} <br/> */}
                    방영 상태 : {drama.show.status} <br/>
                </p>
            </div>
        </Link>
    );
}

export default Drama;