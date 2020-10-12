const member = [
    {
        "name": "최정재",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "박남선",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "신민상",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "강효원",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "류세훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이가영",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이영현",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "남궁찬",
        "part": "Server",
        "status": "OB",
        "gender": "남"
    },
    {
        "name": "김민주",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "최정훈",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "박주은",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현준",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김수민",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김현상",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "김채림",
        "part": "Server",
        "status": "OB",
        "gender": "여"
    },
    {
        "name": "이현상",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "홍혜진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "오승준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "양재욱",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "최선준",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박상수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "임찬기",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "박진호",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "신지한",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김영은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "송정훈",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "강준수",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김중현",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김기찬",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "김우영",
        "part": "Server",
        "status": "YB",
        "gender": "남"
    },
    {
        "name": "윤가인",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "이예진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "박수진",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "최다슬",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "한승아",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    },
    {
        "name": "김재은",
        "part": "Server",
        "status": "YB",
        "gender": "여"
    }
];

// YB : 21명, OB : 15명 이므로 YB7명과 OB5명을 합쳐 팀당 12명의 팀 3개를 만들려고 한다.
let team1 = [], team2 = [], team3 = [];
let YBarr = member.filter(item => item.status === 'YB');
let OBarr = member.filter(item => item.status === 'OB');

let YB = [];
let n = getRandomInt(22,100) % 21;
for(let i = 0; i < 21; i++){
    YB[i] = n;
    n = getRandomInt(22,100) % 21;
    for(let j = 0; j < i; j++){
        if(YB[j] === YB[i]){
            i = i - 1;
            break;
        }
    }
}
for(let i = 0; i < 21; i++){
    if(i >= 0 && i < 7){
        team1[i] = YBarr[YB[i]];
    }
    else if(i >= 7 && i < 14){
        team2[i-7] = YBarr[YB[i]];
    }
    else if(i >= 14 && i < 21){
        team3[i-14] = YBarr[YB[i]];
    }
}

let OB = [];
let m = getRandomInt(16,100) % 15;
for(let i = 0; i < 15; i++){
    OB[i] = m;
    m = getRandomInt(16,100) % 15;
    for(let j = 0; j < i; j++){
        if(OB[j] === OB[i]){
            i = i - 1;
            break;
        }
    }
}
for(let i = 0; i < 15; i++){
    if(i >= 0 && i < 5){
        team1[i+7] = OBarr[OB[i]];
    }
    else if(i >= 5 && i < 10){
        team2[i+2] = OBarr[OB[i]];
    }
    else if(i >= 10 && i < 15){
        team3[i-3] = OBarr[OB[i]];
    }
}

console.log('1조 : ', team1);
console.log('2조 : ', team2);
console.log('3조 : ', team3);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}