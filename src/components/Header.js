import Title from "./Header.module.css";

function Header() {

    return (
        <>
            <h1 className={ Title.title }>TV 프로그램 리스트</h1>
            <hr/>
        </>
    );
}

export default Header;