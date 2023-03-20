import { useState, useEffect } from 'react';
import Drama from '../Item/Drama';
import { getDramaList } from '../../apis/DramaAPI';
import Content from './List.module.css';


function DramaList() {

    const [dramas, setDramas] = useState([]);

    useEffect(
        () => {
            getDramaList().then(resList => setDramas(resList))
        },
        []
    );

    return (
        <div className={ Content.content }>
            { dramas.map(drama => <Drama drama={ drama } key={ drama.id }/>) }
        </div>
    );
}

export default DramaList;