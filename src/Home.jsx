import {useNavigate} from "react-router-dom";
import {v4} from "uuid";
import {db} from "./firebase";
import {doc,setDoc} from "firebase/firestore";
function Home() {
    const nav = useNavigate();
    const usecreategame = async() => {
        const gameid = v4();
        await setDoc(doc(db,"games",gameid),{
            createdat: Date.now(),
            players:1
        });
        nav(`/game/${gameid}`);
    };
    const usejoingame = async() => {
        const gameid = prompt("enter game ID to join:");
        nav(`/game/${gameid}`);
    };

    return (
        <div>
            <h1>Chess RPG</h1>
            <button onClick={usecreategame}>Create Game</button>
            <button onClick={usejoingame}>Join Game</button>
        </div>
    );
}
export default Home;