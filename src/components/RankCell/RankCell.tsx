import "./rankcell.scss"

function RankCell() {
    return (
        <div className="rankcell">
            <p className="rank">1</p>
            <p className="gameName">나 잡아봐랑 끼힛 #kr1</p>
            <div className="schoolInfo">
                <p>광주인성고등학교</p>
                <p>광주광역시 남구</p>
            </div>

            <div className="tier">
                <img className="tier-img" src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4415894930323"></img>
                <div className="tier-detail">
                    <p>Diamond IV</p>
                    <p>32p</p>
                </div>
                <div>
                    <p>192승 0패</p>
                    <p>승률 100%</p>
                </div>
            </div>

        </div>
    )
}

export default RankCell