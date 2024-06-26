import Student from "./Student";


function Team(props) {
    return(
        <>
            <h1>프로젝트 주제는 {props.title}입니다.</h1>
            <Student name='Mike' work='DB설계'/>
            <Student name='Steve' work='서버 설계'/>
            <Student name='John' work='프론트 설계'/>
            <Student name='차돌바위' work='JPA 프로그래밍'/>
            <Student name='홍길동' work='DB설계'/>
            <Student name='장길산' work='React 프로그래밍'/>
        </>
    )
}
export default Team;