//変数はデータの入れ物

//値を格納するための領域をメモリ上に確保する

//var msg = 'こんにちはJavascript!';

/*識別子とは要素につけられた名前のこと
　上で言うとmsg */

//console.log(msg);

/*						定数
入れ物と中身がワンセットで、途中で中身を変更できない入れ物のこと*/

//var price = 100;
//console.log(price * 1.08);   //結果１０８　　マジックナンバー

//const TAX = 1.08;
//var price = 100;
//console.log(price * TAX);


				// 数値型　(numbre)
				// 文字列型 (string)
//基本型		　　	// 真偽型 (boolean) ブーリアン
				// シンボル型　(symbol)
				// 特殊型 (null//undefined)

//参照型　　　	// 配列 (array) アレイ
				// オブジェクト (object)
				// 関数 (function)


//基本型には、値そのものが直接格納される
//参照型の変数は、その参照値(値を格納しているメモリ上のアドレス)を確認します。

//リテラル　値の表現方法

/*テンプレート文字列
   
  ・文字列の変数の埋め込み
  ・複数行にまたがる文字列　*/


/*var name = "鈴木"   
var str = `こんにちは、${name}さん。
今日もいい天気ですね。`;
console.log(str); */


//配列　複数の値を管理可能な仕切りのある入れ物

//仕切り一つ一つに格納された値を要素	という

// 配列リテラル ["javascpipt","html","css"];

//ar date = ["javascpipt","HTML","CSS"];
//console.log(date[0]);


//var data = ["javascpipt",["jQuary","physon"],"HTML","CSS"];
//console.log(data[1][1]);

//オブジェクト　各要素に文字キーでアクセス可能な配列(連想配列)；
//要素と呼んでいたのに対し、オブジェクト内はプロティ=(変数)と呼びます。

/*var obj = { x:1, y:2, z:3};
console.log(obj.x);
console.log(obj["x"]); */

/*未定義値　(undefined)
		・ある要素が宣言済みであるものの値を与えられていない
		・未定義のプロパティを参照した   */

/*var x;
var obj = { a:12345 };
console.log(x);
console.log(obj.b); */

//演算子

// x = a + b;  オペレーター[(演算子)= +] オペランド(演算対象の変数/リテラル)

/*console.log(10 + 1);
console.log("10" + 1);  //結果　１０１　文字列として扱われる */

// var x = 3;
// var y = x++
// console.log(x);
// console.log(y);

// var x = 3
// //var y = ++x
// console.log(x);
// console.log(y);

// //var y = ++x
// console.log(x);

// console.log(0.2 * 3);
// console.log(0.2 * 3 === 6); //結果　false 値を整数にしてから演算　→ 少数に戻す

// console.log(((0.2 * 10) * 3)/10);
// console.log((0.2 * 10) * 3 === 0.6 * 10);  

/*var x = 1
x += 5
console.log(x); //結果　６ */

//  x ○= y  x = x ○ y

//console.log(x); //3

//代入演算子

// x += 2;
// console.log(x);

// x -= 2;
// console.log(x);

// x *= 2;
// console.log(x);

// x /= 2;
// console.log(x);

// x %= 2;
// console.log(x);


//値による代入・・・値そのものを代入する
//参照による代入・・・値を格納しているメモリ上のアドレスを代入する

/*分割代入

配列/オブジェクトを分解し、配下の要素/プロパティ値を個々の変数に分解するための構文

let data = [56, 40, 26, 82, 19, 17, 73, 99];

let [x0, x1, x2, ...other] = data

console.log(x0);
console.log(other);

let w = 1;

let t = 2;

[w,t] = [t,w];

console.log(w,t);

let book = {title: 'javaポケットリファレンス', publish: '技術評論家', price: 2608};

let {price, title, memo = 'なし'} = book;

console.log(book.title);

console.log(title);

console.log(memo);  */

/*et book = {title: 'javaポケットリファレンス', publish: '技術評論家', price: 2608, other:{keywd: 'java SE 8', logo: 'logo.jpg'}};

let {title, other, other: {keywd}} = book

console.log(book.other['logo']);
console.log(keywd);
console.log(other); */

//プロパティとは異なる名前の変数に値を割り当てることができる

/*let book = {title: 'javaポケットリファレンス', publish: '技術評論家',price: 2018};

let {title:name, publish:company} = book;

console.log(name);
console.log(company); */

/*//比較演算子

console.log(5 == 5);
console.log(5 != 5);
console.log(5 < 5);
console.log(5 <= 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 === 5);
console.log(5 !== 5);
var x = 80;
console.log((x >= 70)? '合格' : '不合格');       

													


var data1 = ['javascpipt', 'ajax', 'asp'];
var data2 = ['javascpipt', 'ajax', 'asp'];
console.log(data1 == data2); //結果　false

//基本型では・・・値そのものを比較するから、見かけと一緒。
//参照型では・・・値を格納しているメモリ上のアドレスを比較するから、見かけと比較結果が一致しない場合もある。 */

//論理演算子

var x = 1;

console.log(100 === 100 && 1000 === 1000);
console.log(100 === 100 || 1000 === 500);
console.log(!(10>100));
if (x === 1){
	console.log('こんにちは');
}

x === 1 && console.log('こんにちは');

//制御構文

// 1.記述された順番に処理を行っていく順序　(順接)
// 2.条件によって処理を分岐する選択
// 3.特定の処理を繰り返し実行する反復

// 順序/選択/反復を組み合わせながらプログラミングを組み合わせていく手法を構造化プログラミングとう言う。

//if命令・・・単純分岐
//switch命令・・・多岐分岐

//二つから片方選択するif命令と、複数の選択から一つを選択するswicht

//if文

/* if(条件式){
	条件式がtureの場合実行する命令
}elese {
	条件式がfalseの場合実行する命令
}				*/

var x = 5;

if (x >= 10){
	console.log('変数xは10以上です');
}else{
	console.log('変数xは10未満です');
}


var x = 30;

if (x >= 20){
	console.log('変数xは20以上です');
}else if (x >= 10) {
	console.log('変数は10以上です');
}else {
	console.log('変数は20以上です');
}

if (x >= 10) {
	console.log('変数は10以上です');
}else if (x >= 20) {
	console.log('変数xは20以上です');
}else {
	console.log('変数は10未満です');
}   

if (x >= 10) {
	if (x >= 20) {
		console.log('変数は20以上です');
	}else{
		console.log('変数xは10以上20未満です');
	}
}else{
	console.log('変数xは10未満です');
}
		   
//制御命令を入れ子にすることをネストするとも言います。

// swich文
// 	1.先頭の指揮をまず評価
// 	2. 1の値に一致するcase句を実行する
// 	3. 一致するcase句が見つからない場合には最終的にdefaultを呼び出す
// var rank = 'B';
// swicth (rank) {
// 	case 'A':
// 	console.log('Aランクです');
// 	break;
// 	case 'B':
// 	console.log('Bランクです');
// 	break;
// 	case 'C':
// 	console.log('Cランクです');
// 	break;
// 	default :
// 	console.log('ランク外です');
// 	break;
// }

// swisth (rank){
// 	case 'A':
// 	case 'B':
// 	case 'C':
// 	console.log('合格');
// 	break ;
// 	case 'D':
// 	console.log('不合格');
// 	break;
// }



//while命令とdo命令

// white (条件式) {
// 	条件式がtureの場合実行する命令
// }

// do {
// 	条件式がtureの場合実行する命令
// }white(条件式);

var x = 10;
while (x < 10 ) {
	console.log('xの値は' + x);
	x++;
}

do {
	console.log('xの値は' + x);
	x++;
}while(x < 10);


//前置判断(while)　・・・　条件によっては一度もループしない
//後置判断(do...while)　・・・  条件にかかわらず、最低一回はループを実行

for (var x = 8; x < 10; x++) {
	console.log('xの値は' + x);
}

for (var i = 1, j = 1; i < 5; j++ ,i++){
	console.log('i * jは' + i * j);

}

/*
for (仮変数　in 連想配列){
	ループ内で実行する命令
}

//ここから！！！！！！

仮変数はオブジェクトキーを一時的に格納するための変数。　*/

// var data = {apple:150 , orange:100, hanana: 120};
// for (var key in data) {
// 	console.log(key + '=' + data[key]);  //for in命令はオブジェクトを操作
// }


//配列の列挙にはfor命令か　for of命令

var data = ['apple', 'orenge', 'banana'];
for (var i = 0; i < data.length; i++)
	console.log(data[i]);
/*
for (仮変数　of 列挙可能なオブジェクト){
	ループ内で実行する命令
}
*/     //????????????????



/*break/continue命令*/
var result = 0;

// for (var i = 1; i < 100; i++){
// 	result += i;
// 	if (result > 1000){break;}

console.log('合計値が超えるのは' + i);

for (var i = 1; i < 100; i++){
	if(i % 2 === 0){continue;}
	result += i;
}	
console.log('合計:' + result);  //奇数でだけの合計値


// 関数
// function 関数名(引数){
// 	処理
// 	return 戻り値;
// }                        

// 引数・・・与えられた入力(パラメーター) //仮引数ともいう
// return・・・出力(結果)
// 呼び出し側の引数を実引数という


function getTriangle(base , height) {
	return base * height / 2;
}

console.log(getTriangle(5,2));



//コンストラクター = オブジェクト名

// var 変数名　= new Function(引数...,関数の本体);

// var getTriangle = new Function('base','height', 'return base * height / 2;');
// console.log(getTriangle(5 , 2));

//Functionコンストラクターでは、引数や関数本体を文字列として定義できる

var param = 'height , width';
var formul = 'return height * width / 2;';
var diamond = new Function(param, formul);
console.log (diamond(5, 2));

/*閏年,演算

西暦年が４で割り切れる年は閏年
西暦が100で割り切れる年は平年
400で割り切れる年は閏年 */

// year ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

function 閏年(year){
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
var year = 2018;
閏年(year)

console.log(閏年(2018));



// オブジェクト（モノを表現するために複数の情報を持つ）　= 変数と関数の集合体　　変数=プロパティ　　関数=メソッド

var CPI = '文字列です';

function test(){
	CPI = '関数から文字の上書きです';
}

test();  //←実行

//オブジェクトの宣言

var TestObj = new Object();
TestObj = {
	CPI:'オブジェクトの文字列です',
	Jimbo:'文字列2です',
	test:function(){
		this.CPI = 'メソッドから文字の上書き'		//this オブジェクトないのこと
	}
}
TestObj.test();  //メソッドを実行
console.log(TestObj.CPI);


function 手順1(year) {
	// 1 判定する年が 4 で割り切れる場合は手順 2. に進みます。
	if (year % 4 === 0) {
		手順2(year);
	} else {
		//割り切れない場合は手順 5. に進みます。
		手順5(year);
	}
}

// 2 その年が 100 で割り切れる場合は手順 3. に進みます。
// 割り切れない場合は手順 4. に進みます。
function 手順2(year) {
	if (year % 100 === 0) {
		手順3(year);
	} else {
		手順4(year);
	}
}

// 3 その年が 400 で割り切れる場合は手順 4. に進みます。
// 割り切れない場合は手順 5. に進みます。
function 手順3(year) {
	if (year % 400 === 0) {
		手順4(year);
	} else {
		手順5(year);
	}
}

// 4 その年はうるう年です (この年は 366 日です)。
function 手順4(year) {
	console.log('うるう年です')
}

// 5 その年はうるう年ではありません (この年は 365 日です)。
function 手順5(year) {
	console.log('うるう年ではない')
}

function うるう年判定(year) {
	手順1(year);
}

