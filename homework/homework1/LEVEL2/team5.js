const team5 = [
    {
        'name' : '이진호',
        'address' : '경기도 안산',
        'age' : 27,
        'hobby' : '당구',
        'introduce' : function(){
            console.log(`안녕하세요! 저는 ${this.name}입니다! 사는 곳은 ${this.address}이고, 나이는 ${this.age}살, 취미는 ${this.hobby} 입니다!`);
        }
    },
    {
        'name' : '최정균',
        'address' : '경기도 군포',
        'age' : 25,
        'hobby' : '웨이트',
        'introduce' : function(){
            console.log(`안녕하세요! 저는 ${this.name}입니다! 사는 곳은 ${this.address}이고, 나이는 ${this.age}살, 취미는 ${this.hobby} 입니다!`);        }
    },
    {
        'name' : '김수현',
        'address' : '서울',
        'age' : 24,
        'hobby' : '좋은 음악 찾기',
        'introduce' : function(){
            console.log(`안녕하세요! 저는 ${this.name}입니다! 사는 곳은 ${this.address}이고, 나이는 ${this.age}살, 취미는 ${this.hobby} 입니다!`);        }
    },
    {
        'name' : '최다인',
        'address' : '서울',
        'age' : 24,
        'hobby' : "갬성카페 가기",
        'introduce' : function(){
            console.log(`안녕하세요! 저는 ${this.name}입니다! 사는 곳은 ${this.address}이고, 나이는 ${this.age}살, 취미는 ${this.hobby} 입니다!`);        }
    },
    {
        'name' : '최예진',
        'address' : '서울',
        'age' : 23,
        'hobby' : '드라마 보기',
        'introduce' : function(){
            console.log(`안녕하세요! 저는 ${this.name}입니다! 사는 곳은 ${this.address}이고, 나이는 ${this.age}살, 취미는 ${this.hobby} 입니다!`);        }
    },
    {
        'name' : '윤가영',
        'address' : '한성대입구',
        'age' : 21,
        'hobby' : '유튭보기',
        'introduce' : function(){
            console.log(`안녕하세요! 저는 ${this.name}입니다! 사는 곳은 ${this.address}이고, 나이는 ${this.age}살, 취미는 ${this.hobby} 입니다!`);        }
    }
];

team5.forEach(item => item.introduce());