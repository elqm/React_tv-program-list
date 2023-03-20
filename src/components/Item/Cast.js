import { Link } from "react-router-dom";
import Item from "./Item.module.css";

function Cast({ cast }) {

    return (
            <div className={ Item.castItem }>
                <img src={ cast.character.image  === null? '../../not-found.png': cast.character.image.original } width="250px" height="300px"/>
                <p>
                    캐릭터 이름 : { cast.character.name } <br/>
                    배우 이름 : { cast.person.name } <br/>
                    상세정보 : <Link to={ cast.person.url}>{ cast.person.url}</Link> <br/>
                </p>
            </div>
    );
}

export default Cast;