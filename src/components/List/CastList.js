import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getCastDetail } from '../../apis/DramaAPI';
import Cast from '../Item/Cast';
import Content from './List.module.css';

function CastList() {

    const { id } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(
        () => {
            getCastDetail(id).then(resCast => setCasts(resCast))
        },
        []
    );

    // console.log(casts);

    return (
        <div className={ Content.content }>
            { casts.map(cast => <Cast cast={ cast } key={ cast.character.id }/>) }
        </div>
    );

}

export default CastList;