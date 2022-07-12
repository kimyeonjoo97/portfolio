


/* 프로필 입력 영역입니다  */
let webName = "Web Portfolio"//웹 제목 이름
let myName = "김연주" // 자기이름
let birthDay = "97.03.19" //생년월일
let mobileNum = "010-7294-7510" //전화번호
let email = "kyj970319@gmail.com" //email


/* 교육사항 입력영역입니다
데이터 형식은 

[ {
    key : value,
    key : value
}, {
    key : value,
    key : value
}]

의 형태이므로 , 누락되지않게 조심합시다 
"" 는 계속 유지해야합니다.

*/
let education =[
    {
        date : "2015.02",
        name : "양산남부고등학교 졸업"
    },
    {
        date : "2016.03",
        name : "서라벌대학교 호텔외식조리과 입학"
    },
    {
        date : "2018.02",
        name : "서라벌대학교 졸업"
    },
    {
        date : "2019.06 ~ 2020.06",
        name : "SBS 컴퓨터 아카데미 인테리어 과정"
    },
    {
        date : "2022.04 ~ 2022.08",
        name : "더조은 아카데미 멀티미디어(프리미어,애프터이펙트,3D모션)앱콘텐츠 제작 실무자 양성과정"
    },
]; //education


let work = [
    {
        date : "2018.01",
        name : "다이소 입사"
    },
    {
        date : "2018.03",
        name : "다이소 퇴사"
    },
    {
        date : "2018.04",
        name : "케익모아 입사"
    },
    {
        date : "2018.08",
        name : "케익모아 퇴사"
    },
    {
        date : "2020.12",
        name : "동남모형사 입사"
    },
    {
        date : "2022.02",
        name : "동남모형사 퇴사"
    }
]//work


/* 스킬 입력영역 */


let skills = [

    {
        name : "Photoshop", //추가할 스킬이름
        icon : "fas fa-magic", // 폰트어썸 아이콘 클래스
        quant : "40", //퍼센테이지
        fontColor : "mediumturquoise", //글자색상
        bgColor : "paleturquoise" //백그라운드 색상
    },
    {
        name : "Illustrator", 
        icon : "fas fa-palette", 
        quant : "50",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    },
    {
        name : "Web Publishing<br>HTML/css/jQuery",
        icon : "fas fa-code",
        quant : "60",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    },
    {
        name : "Premiere & After Effects",
        icon : "fas fa-video", 
        quant : "70",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    },
    {
        name : "Auto CAD",
        icon : "fas fa-photo-video",
        quant : "80",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise" 
    },
    {
        name : "3d Max & SketchUp", 
        icon : "fas fa-cube", 
        quant : "90", 
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    }

];


