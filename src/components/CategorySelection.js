import './CategorySelection.css';

const CategorySelection = ({categories,onCategorySelect}) => {
    return (
        <div className="category-selection">
            <div className='select-txt'>
                <h1>드라마는 보셨죠<span>?</span><br />이제 퀴즈를 푸세요</h1>
                <p>K-Drama Quiz</p>
            </div>
            <div className='select-btn'>
            {
                categories.map((txt,idx)=>{
                    return <button key={idx} onClick={()=>{
                        onCategorySelect(txt)}}>{txt}</button>
                })
            }
            </div>
        </div>
    );
};

export default CategorySelection;