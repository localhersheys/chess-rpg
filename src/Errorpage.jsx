function Errorpage(){
    return (
        <div>
            <h1>
                Oops! looks like the gameid you entered does not exist, or maximum players have already joined this game!
            </h1>
            <a href="/">Try again?</a>
        </div>
    );
}
export default Errorpage;