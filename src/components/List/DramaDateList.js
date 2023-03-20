import { useState, useEffect } from 'react';
import Drama from '../Item/Drama';
import { getCountryDateList, getDramaDateList, getDramaList } from '../../apis/DramaAPI';
import Content from './List.module.css';
import Deco from './List.module.css';
// import DramaDateDetails from '../Item/DramaDateDetails';


function DramaDateList() {

    const [dramaCountry, setDramaCountry] = useState('');
    const [dramaDate1, setDramaDate1] = useState('');
    const [dramaDate2, setDramaDate2] = useState('');
    const [dramas, setDramas] = useState([]);

    const datehandler = () => {
        getDramaDateList(dramaDate2).then(resList => setDramas(resList))
        // .then(resDate => setDramaDate(resDate.airdate))
    }

    const countrydatehandler = () => {
        getCountryDateList(dramaCountry, dramaDate1).then(resdata => setDramas(resdata))
    }

    useEffect(
        () => {
            getDramaList().then(resList => setDramas(resList))
        },
        []
    );

    return (
        <>
            <div className={Deco.deco}>
                <label>날짜 입력 </label>
                &nbsp;
                <input
                    type="search"
                    name="dramaDate2"
                    size={25}
                    placeholder='yyyy-mm-dd'
                    value={dramaDate2}
                    onChange={e => setDramaDate2(e.target.value)}
                />
                &nbsp;
                <button onClick={datehandler}>조회</button>
            </div>
            <div className={Deco.deco1}>
                <label>날짜 입력 </label>
                &nbsp;
                <input
                    type="search"
                    name="dramaDate1"
                    size={25}
                    placeholder='yyyy-mm-dd'
                    value={dramaDate1}
                    onChange={e => setDramaDate1(e.target.value)}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <br />
            <div className={Deco.deco2}>
                <label>국가코드 입력 </label>
                &nbsp;
                <input
                    type="search"
                    name="dramaCountry"
                    size={25}
                    placeholder='ex) 한국=KR/미국=US/일본=JP'
                    value={dramaCountry}
                    onChange={e => setDramaCountry(e.target.value)}
                />
                &nbsp;
                <button onClick={countrydatehandler}>조회</button>
            </div>

            <div className={Content.content}>
                {dramas.map(drama => <Drama drama={drama} key={drama.id} />)}
                {/* { <DramaDateDetails dramaDate={dramaDate}/> } */}
            </div>
        </>
    );
}

export default DramaDateList;