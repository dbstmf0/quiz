import './Results.css';

const Results = ({score,onRestart}) => {
    return (
        <div className='results'>
            <p>최종 '점수'는요<span>?</span></p>
            <div className='results-txt'>
                <div className='icons'>
                    <img src='./img/icon-drum.png'/>
                    <img src='./img/icon-drum.png'/>
                    <img src='./img/icon-drum.png'/>
                    <img src='./img/icon-drum.png'/>
                    <img src='./img/icon-drum.png'/>
                    <img src='./img/icon-drum.png'/>
                </div>
                <p>축하드립니다<br />'{score}점'</p>
            </div>
            <button onClick={onRestart}>다시 도전하기</button>
        </div>
    );
};

export default Results;