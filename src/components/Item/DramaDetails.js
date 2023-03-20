import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDramaDetail } from "../../apis/DramaAPI";
import Detail from "./DramaDetails.module.css";
import CastList from "../List/CastList";

function DramaDetails() {

    const { id } = useParams();

    const [drama, setDrama] = useState({
        show: {
            image: {},
            network: {},
            schedule: {},
            rating: {}
        }
    });

    useEffect(
        () => {
            getDramaDetail(id).then(resDetail => setDrama(resDetail))
        },
        []
    );

    return (
        <div className={Detail.detail}>
            <div className={Detail.sort}>
                <div className={Detail.shape}>
                    <img src={drama.show.image === null ? '../../not-found.png' : drama.show.image.original} width="400px" height="600px" />
                </div>
                <p className={Detail.shape}>
                    영제 : {drama.show.name} <br />
                    장르 : {drama.show.type} / {drama.show.genres} <br />
                    방송사 : {drama.show.network === null ? '(미기입)' : drama.show.network.name} <br />
                    방송 기간 : {drama.show.premiered} ~ {drama.show.ended} <br />
                    방송 요일/시간 : {drama.show.schedule.days} / {drama.show.schedule.time} <br />
                    시즌/회차 : 시즌{drama.season} / {drama.number}회 <br />
                    방영 상태 : {drama.show.status} <br/>
                    평점 : {drama.show.rating.average} <br/>
                    상세정보 : <Link to={drama.show.url}>{drama.show.url}</Link> <br/>
                </p>
            </div>
            <h2>줄거리 : {drama.show.summary}</h2> <br />
            <h1>출연자</h1>
            <CastList/>
        </div>
    );
}

export default DramaDetails;