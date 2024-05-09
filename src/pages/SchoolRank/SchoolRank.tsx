import Pagenation from "../../components/Pagenation/Pagenation";
import RankCell from "../../components/RankCell/RankCell";
import "./schoolrank.scss"

// 특정지역(강남구)에 있는 학교들의 랭킹
function SchoolRank() {
    return (
        <article className="SchoolRank">
            <section className="ranker-head">
                <p className="rank">순위</p>
                <p className="profile">프로필</p>
                <p className="schoolName">학교</p>
                <p className="gntRank">티어</p>
            </section>

            <section className="ranker-info">
                <RankCell/>
                <RankCell/>
                <RankCell/>
                <RankCell/>
                <RankCell/>
                <RankCell/>
                <RankCell/>
                <RankCell/>
            </section>
            <Pagenation/>
        </article>
    );
}

export default SchoolRank;
