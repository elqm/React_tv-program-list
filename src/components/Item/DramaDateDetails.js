// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getDramaDateDetail } from "../../apis/DramaAPI";
// import Detail from "./DramaDetails.module.css";
// import CastList from "../List/CastList";
// // import DramaDateList from "../List/DramaDateList";

// function DramaDateDetails(props) {

//     const { id } = useParams();
//     const date = props.dramaDate;

//     const [drama, setDrama] = useState({
//         show: {
//             image: {},
//             network: {},
//             schedule: {}
//         }
//     });
//     console.log(date);

//     useEffect(
//         () => {
//             getDramaDateDetail(date, id).then(resDetail => setDrama(resDetail))
//         },
//         []
//     );

//     return (
//         <div className={Detail.detail}>
//             <div className={Detail.sort}>
//                 <div className={Detail.shape}>
//                     <img src={drama.show.image === null ? '../public/not-found.png' : drama.show.image.original} width="400px" height="600px" />
//                 </div>
//                 <p className={Detail.shape}>
//                     영제 : {drama.show.name} <br />
//                     장르 : {drama.show.type} / {drama.show.genres} <br />
//                     방송사 : {drama.show.network === null ? '(미기입)' : drama.show.network.name} <br />
//                     방송 기간 : {drama.show.premiered} ~ {drama.show.ended} <br />
//                     방송 요일/시간 : {drama.show.schedule.days} / {drama.show.schedule.time} <br />
//                     시즌/회차 : 시즌{drama.season} / {drama.number}회 <br />
//                     상세 정보 검색 ID : {drama.show.id}
//                 </p>
//             </div>
//             <h2>줄거리 : {drama.show.summary}</h2> <br />
//             <h1>출연자</h1>
//             <CastList/>
//         </div>
//     );
// }

// export default DramaDateDetails;