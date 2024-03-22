import { useSelector } from "react-redux";
import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";
import { selectLang, selectUpdated } from '../redux/localeSlice';

export default function App () {
    const lang = useSelector(selectLang);
    const updatedAt = useSelector(selectUpdated);

    return (
        <div>
            <h1>Redux</h1>
            <Balance/>
            <LangSwitcher/>
            <p>Selected lang: {lang} </p>
            <p>Last updated at: {updatedAt} </p>
        </div>
    );
}