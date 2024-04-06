import "./rankcell.scss"

function RankCell() {
    return(
        <div className="rankcell">
            <p className="rank">1</p>
            <img className="school-logo" src="https://play-lh.googleusercontent.com/FVwxryNVsihnZCtMWVNXtq8t8ypO23cxBjgfrzUMQp1KJtNfzOT-PceUwyt3WfLUmg"></img>
            <p>프로필인데 무엇을 넣어야할지 모르겠음</p>
            <img className="tier-img" src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/4415894930323"></img>
            <div className="tier-detail">
                <p>Challenger</p>
                <p>921P</p>
            </div>
            <p>광주인성고등학교</p>
            
        </div>
    )
}

export default RankCell