import "./indexcell.scss"

interface indexCellProps {
    typeNumber: number
}
// 1: 레벨순
// 2: 스트리머
// 3: 광고
// 4: 지박령
// 5: 이름긴사람
function IndexCell(props: indexCellProps) {
    // const changeable

    const renderDynamicComponent = () => {
        switch (props.typeNumber) {
            case 1:
                return <p className="game-level">Lv. 2123</p>
            case 2:
                return (
                    <div className="school-info">
                        <p>Challenger</p>
                        <p className="tagline">982 P</p>
                    </div>
                )
            case 3:
                return null
            case 4:
                return <p className="game-level">84120 H</p>
        }
        return null
    }
    return (
        <div className="index-cell">
            <i className="gntTier">1</i>
            <img className="profile-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2q3EjFs_4Xb1JQ9UrbPzlomnFO82CbHXV4i-b92qeQ&s" alt="라이엇아이콘"></img>
            <div className="profile-info">
                <p>일이삼사오육칠팔구십일이삼사오</p>
                <p className="tagline">#kr1</p>
            </div>
            {/* 학교없으면 null  */}
            <div className="school-info">
                <p>광주인성고등학교</p>
                <p className="tagline">남구</p>
            </div>
            {renderDynamicComponent()}
        </div>
    )
}
export default IndexCell