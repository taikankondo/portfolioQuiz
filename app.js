const quiz = [
{       question:"たい焼きは、元々は鯛の形ではありませんでした。どんな形をしていたでしょうか？",
        answers:[
                "ウサギ",
                "カメ",
                "ヒヨコ",
                "人形"],
        correct:"カメ",
},{
        question:"飛行機の操縦士と副操縦士は、食事の際に絶対に同じメニューを食べません。その理由は何でしょうか？",
        answers:[
                "単純に好みが違う",
                "食材の減りの偏りを無くすため",
                "特に理由は無い",
                "食中毒対策"],
        correct:"食中毒対策",
},{
        question:"平成の初期にブームとなった携帯型ゲーム機、ゲームボーイ。友達と対戦するためには本体とソフト以外にも欠かせないものがありましたが、それは何でしょうか？",
        answers:[
                "インターネット",
                "携帯電話",
                "通信ケーブル",
                "ファミコン"],
        correct:"通信ケーブル",
}
];
const quizLength =quiz.length;
let quizIndex = 0;

const $button =document.getElementsByTagName(`button`);
const buttonLength=$button.length;
let score=0;

//問題文と選択肢を定義
const setupQuiz =()=>{
        document.getElementById(`js-question`).textContent = quiz[quizIndex].question;
        let buttonIndex =0;
        while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
}
}

setupQuiz();


const clickHandler=(e)=>{
        if(quiz[quizIndex].correct===e.target.textContent){
                window.alert('正解!');
                score++;
        }else{
                window.alert('不正解!');
        }

        quizIndex++;
        if(quizIndex<quizLength){
                //問題数がまだあればこちらを実行
                setupQuiz();
        }else{
                //問題数がなければこちらを実行
                window.alert('終了!あなたの正解数は'+ score +'/'+quizLength +'です!');
        }
}

//ボタンをクリック後に、正誤判定
let handlerIndex=0;
while(handlerIndex<buttonLength){
        $button[handlerIndex].addEventListener('click',(e)=>{
                clickHandler(e);
            }); 
        handlerIndex++;
}




