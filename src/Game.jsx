import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import {db} from "./firebase";
import {doc,getDoc,updateDoc,deleteDoc} from "firebase/firestore";
// import {useEffect} from "react";
function Game() {
    const {gameid} = useParams();
    const nav = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const check = async() => {
            const ref = doc(db,"games",gameid);
            const docsnap = await getDoc(ref);
            const data = docsnap.data();
            if (!docsnap.exists() || data.players==2) nav("/error");
            else {
                await updateDoc(ref,{players:data.players+1});
                setLoading(false);
            }
        }
        check();
    },[gameid, nav]);

    useEffect(()=>{
        const dec = async() => {
            const ref = doc(db,"games",gameid);
            const docsnap = await getDoc(ref);
            if (!docsnap.exists()) return; 
            const data = docsnap.data();
            if (data.players == 2) await updateDoc(ref,{players:data.players-1});
            else if (data.players == 1) await deleteDoc(ref);
        }
        const handlebeforeunload = () => {
            dec();
        }
        const handlebeforeback = () => {
            dec();
        }
        
        window.addEventListener("beforeunload",handlebeforeunload);
        window.addEventListener("popstate",handlebeforeback);
        
        return () => {
            window.removeEventListener("beforeunload", handlebeforeunload);
            window.removeEventListener("popstate", handlebeforeback);
        };
    },[gameid]);


    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div>
            <h1>game page</h1>
            <p>game id : {gameid}</p>
        </div>
    );
}
export default Game;