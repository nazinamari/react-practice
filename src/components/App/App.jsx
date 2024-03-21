import { useSelector } from "react-redux";
import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";
import { selectLang } from '../../redux/localeSlice';

export default function App () {
    const lang = useSelector(selectLang);

    return (
        <div>
            <h1>Redux</h1>
            <Balance/>
            <LangSwitcher/>
            <p>Selected lang: {lang} </p>
        </div>
    );
}