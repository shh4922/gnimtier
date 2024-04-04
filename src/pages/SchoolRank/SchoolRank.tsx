import RankCell from "../../components/RankCell/RankCell";
import "./schoolrank.scss"

function SchoolRank() {
    

    return (
        <article className="SchoolRank">
            <section className="ranker-head">
                <p>순위</p>
                <p>프로필</p>
                <p>티어</p>
                <p>소속학교</p>
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
        </article>
    );
}

export default SchoolRank;
