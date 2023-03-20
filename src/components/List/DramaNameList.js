import { useState, useEffect } from 'react';
import Drama from '../Item/Drama';
import { getDramaList, getDramaNameList } from '../../apis/DramaAPI';
import Content from './List.module.css';
import Deco from './List.module.css';
// import {Text, View, TextInput, Button} from 'react-native';
// import {useTranslator} from 'react-native-translator';


function DramaNameList() {

    const [dramaName, setDramaName] = useState('');
    const [dramas, setDramas] = useState([]);
    // const focusRef = useRef();

    const onClickhandler = () => {
        getDramaNameList(dramaName).then(resList => setDramas(resList))
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
                <label>제목 입력 </label>
                &nbsp;
                <input
                    type="search"
                    name="dramaName"
                    size={25}
                    placeholder='english title'
                    value={dramaName}
                    // ref={ focusRef }
                    onChange={e => setDramaName(e.target.value)}
                />
                &nbsp;
                <button onClick={onClickhandler}>조회</button>
            </div>
                <label className={Deco.deco2}>(단, 국내 프로그램은 한글 입력 가능. 띄어쓰기 필수.)</label>

            <div className={Content.content}>
                {dramas.map(drama => <Drama drama={drama} key={drama.show.id} />)}
            </div>

            {/* <View>
      <TextInput value={value} onChangeText={(t) => setValue(t)} />
      <Text>{result}</Text>
      <Button title="translate" onPress={onTranslate} />
    </View> */}
        </>
    );
}

export default DramaNameList;