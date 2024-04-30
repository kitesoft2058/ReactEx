import { Component } from "react";
//[2.2] css module import 하기. 현재 .js 모듈에서만 인식할 수 있도록 styles 변수로 임포트하기
import styles from './ItemComponent.module.css' 

//[2.1] 스타일 작업은 라이브러리 없이 css module 로 만들어 보기... [components폴더 안에 ItemComponent.module.css파일 만들고 css작성]
export default class ItemComponent extends Component{
    render(){
        return (
            //[1] 이 컴포넌트에 전달된 속성들은 props 라는 아주 특별한 멤버변수안에 전달된 속성명의 멤버변수로 만들어짐 
            // <div key={this.props.key}>
            //     <div>
            //         <span>{this.props.item.no}</span>
            //         <span>{this.props.item.name}</span>
            //     </div>
            //     <div>
            //         {this.props.item.message}
            //     </div>
            // </div>

            //[2] 스타일 적용 - css module 에서 작성한 클래스선택자를 이용한 스타일적용대상을 태그문의 class속성으로 지정.[단, JSX에서는 클래스를 설계하는 class키워드와 혼동되어 className속성을 사용할 것을 권장]
            // <div key={this.props.key} className={styles.item}>
            //     <div className={styles.line1}>
            //         <span>{this.props.item.no}</span>
            //         <span>{this.props.item.name}</span>
            //     </div>
            //     <div className={styles.line2}>
            //         {this.props.item.message}
            //     </div>
            // </div>

            // [3] 아이템뷰 터치에 반응하기. 터치항목 데이터 인식하기!! - 다이얼로그로 표시 [ onClick이라는 이름으로 전달받은 콜백함수를 아이템뷰 div요소에 onClick이벤트 속성값으로 지정. 이 div요소를 클릭하면 Home.js에서 전달함 화살표함수가 발동함]
            <div key={this.props.key} className={styles.item} onClick={this.props.onClick}>
                <div className={styles.line1}>
                    <span>{this.props.item.no}</span>
                    <span>{this.props.item.name}</span>
                </div>
                <div className={styles.line2}>
                    {this.props.item.message}
                </div>
            </div>

        )
    }
}