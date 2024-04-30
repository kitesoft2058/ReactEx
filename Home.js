import {Component, Fragment} from 'react'
import ItemComponent from './components/ItemComponent'

export default class Home extends Component{

    // (실습1 [1]) 일반 데이터를 가진 변수
    message= "Hello world"
    // (실습1 [2]) JSX 요소를 가진 변수 [ 주의!! 문자열 "" 없음 - 즉, string 아님]
    message2= <h4>Nice to meet you</h4>

    // (실습2) 대량의 데이터 배열 준비 - 데이터 변화에 따라 화면 UI가 변경되어야 하기에 state 변수로 선언
    state= {
        data: ['aaa','bbb','ccc','ddd'],
        //(실습3) 에서 추가 [JSX태그문을 요소로 가지는 배열]
        data2: [<li>aaa</li>,<li>bbb</li>,<li>ccc</li>,<li>ddd</li>],

        //(실습7) 에서 추가 - 대량의 데이터 요소가 아이템객체 데이터일때..
        items: [
            {no:1, name:'sam', message:'Hello react'},
            {no:2, name:'robin', message:'Hello android'},
            {no:3, name:'hong', message:'Hello web'},
            {no:4, name:'son', message:'Hello ios'},
        ],

        //(과제) 에서 추가할 데이터 예시. 
        items2: [
            {no:1, name:'sam', message:'Hello react', image:'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg'},
            {no:2, name:'robin', message:'Hello android', image:'https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_1280.jpg'},
        ]
    }

    render(){
        return (
            <Fragment>

                {/* (실습1) 리스트뷰 같은 UI 구현실습 전에 확인해볼 JSX언어의 문법 */}
                {/* [1] 별도의 태그문없이 JS변수명을 작성하면? ( 태그문 안에서 JS변수를 사용하는 만큼 {} 필요 )  */}
                { this.message }

                {/* [2] JS변수안에 JSX 요소를 저장하고 있다면? - 배열요소값이 JSX 요소로서 그려짐 */}
                { this.message2 }


                {/* 대량의 데이터 UI 구현. - JS에서 List는 배열로 만들어서 사용함 */}

                {/* (실습2) JSX 에서 배열변수를 작성하면 요소값들이 나열됨. [일반 JS 에서는 구분자 , 가 있지만 JSX는 구분기호 없이 요소값이 나열됨 ] */}
                { this.state.data } {/* 브라우저는 별도의 html요소가 없어도 글씨를 보여줄 수 있기에 요소 글씨들이 보여짐 */}

                {/* (실습3) 배열변수안에 JSX태그문 요소를 저장하면? [li요소가 잘 그려짐] */}
                <ul>
                    { this.state.data2 }
                </ul>
                {/* 배열 요소별로 항목 요소(li) UI를 구현하였지만.. 데이터를 저장하는 배열변수에 JSX태그문을 저장하는 것은 매우 혼잡하고 짜증남. */}
                {/* 속성이나 스타일까지 추가되면 요소값 작성하기 너무 힘듦. 서버데이터의 경우는 당연히 태그문이 있을 리도 없음 */}

                {/* (실습4) 그래서 배열의 요소는 일반 데이터를 저장하고. render()메소드안에서 요소별로 html 리스트 요소를 만들어서 화면에 표시함 - ul 요소 */}
                <ul>
                    <li>{this.state.data[0]}</li>
                    <li>{this.state.data[1]}</li>
                    <li>{this.state.data[2]}</li>
                    <li>{this.state.data[3]}</li>
                </ul>

                {/* (실습5) 배열 요소의 개수가 많다면 위 처럼 수작업으로 li 요소를 만들어 낼 수 없기에 반복문으로 만들어보기 */}
                <ul>
                    {
                        //[1]일반 반복문
                        //for( let i=0; i<3; i++ ){} //error - JSX {} 영역에서는 변수,함수호출문만 가능함. 제어문사용불가

                        //[2]for .. in (인덱스 번호),  for .. of (배열 요소값) 모두 사용불가

                        //[3]배열의 .forEach()메소드..[함수호출을 가능하므로..사용할 수는 있음] -- forEach() 함수의 파라미터로 전달한 익명함수를 요소개수만큼 차례로 자동 실행함
                        this.state.data.forEach( function( value, index, array ){
                            // 파라미터 3개 [value:요소값, index:인덱스번호, array:배열참조변수]
                            console.log(index + " : " + value)

                            //forEach는 배열요소 개수만큼 순차적으로 실행되어 값을 얻을 수는 있지만 화면에 그려낼 수 없음. 리턴을 하지 않는 반복기능메소드임.
                            //(실습1)에서 볼 수 있듯이 배열변수를 JSX의 {}영역안에 위치해야 요소값들이 나오므로.. 아무 리턴이 없는 forEach는 실행해도 UI에 표시되는 것이 없음. 
                            //그래서 forEach()처럼 배열요소개수 반큼 반복하며 반복호출되는 콜백함수의 리턴값을 모아 하나의 배열로 만들어주는 map()반복기능메소드 사용                            
                        })
                    }

                    {/* [4]배열의 .map()메소드.. -- forEach() 처럼 요소개수만큼 반복하여 콜백함수를 실행하고 그 return값을 모아 새로운 배열을 리턴해줌. */}
                    {
                        this.state.data.map( function( value, index, arra){
                            // 파라미터 3개 [value:요소값, index:인덱스번호, array:배열참조변수]

                            // 리턴한 값들을 모아서 새로운 배열로 만들어 줌. - 이 새로운 배열을 JSX에서 요소별로 나열하여 화면에 그려냄(실습2,3 참고)
                            // 이 리턴값을 일반 string 데이터가 아니라..JSX태그로 감싸서 리턴하면 그 태그요소가 배열의 요소로서 저장됨.
                            // 즉, string data --> JSX태그요소 로 변환해주는 것이라고 볼 수 있음. [android의 아답터와 같은 역할 - 대량의 데이터를 주면 ItemView를 만들어주는 구조와 비슷]
                            
                            //return <li>{value}</li>

                            // 동작은 잘 되지만 [F12 개발자모드]의 [console]탭을 보면..경고가 표시될 것임. [이유?. 반복적으로 만들어진 li 요소들을 구별하는 식별자 속성 [key]를 명시적으로 주지 않아서 경고발생...]
                            // 즉, 배열의 요소들로 만들어진 항목 요소들은 가급적 식별자 역할의 속성 key 변수를 가질 것을 권장함. [key속성값은 반드시 유일한 값이어야 해서 보통 index번호같이 유니크값을 사용함]
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>

                {/* (실습6) 대량의 데이터 배열의 항목별 아이템요소에 스타일 적용하여 UI 만들어보기 - ( 카드뷰 박스 모양의 아이템뷰 ) */}
                <div style={{border:'2px solid black', padding:'8px', margin: '8px'}}>
                    {
                        this.state.data.map(function(value, index){ /* 파라미터 3개중 필요한 것만 사용해도 됨 */
                            return <div style={{border:'1px solid gray', borderRadius:'4px', margin:'4px', padding:'16px'}} key={index}>{value}</div>
                        })
                    }                    
                </div>

                {/* (실습7) 대량의 데이터 배열 요소값이 string 1개가 아니라 2개 이상일 때는? 즉, 배열 요소가 객체일때.. */}
                <div style={{border:'2px solid black', padding:'8px', margin:'8px'}}>
                    {
                        // map()메소드의 콜백함수를 화살표함수로 만들어보기 .. 
                        this.state.items.map( (value, index)=>{
                            // 파라미터 value : 배열요소 참조변수 
                            return (
                                <div key={index} style={{border:'1px solid gray', borderRadius:'4px', margin:'4px', padding:'4px', display:'flex', flexDirection:'column'}}> 
                                    <span>{value.no}</span>                                
                                    <span>{value.name}</span>
                                    <span>{value.message}</span>
                                </div> 
                            )                           
                        })
                    }
                </div>
                {/* 스타일을 많이 적용하지도 않았음에도 매우 코드가 지저분하고 가독성이 떨어짐. */}
                
                
                {/* (실습8)그래서 ex06에서 소개한 커스텀 컴포넌트 만들기 기법으로 아이템1개의 모양으로 스타일까지 된 컴포넌트를 분리하여 구현해보기. */}
                <div style={{border:'2px solid black', padding:'8px', margin:'8px'}}>
                    {
                        this.state.items.map( (item, index)=>{ // 첫번째 파라미터(배열요소) 이름을 value에서 item으로 바꿔 사용해보기. 배열요소가 객체니까 value보다는 item이 어울림.
                            // [1] src폴더안에 components폴더를 만들고 그 안에 ItemComponent.js 파일을 만들어 컴포넌트를 제작하여 사용. 해당 컴포넌트에서 사용할 key와 item 데이터는 속성으로 전달 [속성명 key, item은 임의로 지정한 이름]
                            //return <ItemComponent key={index} item={item}></ItemComponent>

                            // (실습7)에 비해 리스트 구현 코드가 간결해짐.

                            // [3] 아이템뷰 터치에 반응하기. 터치항목 데이터 인식하기!! [클릭 이벤트 처리 콜백함수를 화살표함수로 만들어 전달.. 이 함수가 실행되면 현재 item의 name 값이 다이얼로그로 보여짐.]
                            return <ItemComponent key={index} item={item} onClick={ ()=>alert('선택함목 이름 : ' + item.name )}></ItemComponent>

                        })
                    }
                </div>


                {/* (실습9) 버튼 클릭하여 아이템항목 추가...는 Todo-App에서 구현하면서 소개. */}


                {/* (과제!) 아이템뷰의 오른쪽 끝에 이미지를 보여주는 리스트 만들어보기!! 이미지는 'http~ 로 시작하는 인터넷 경로 URL 이미지'*/}
            
            </Fragment>
        )
    }
}