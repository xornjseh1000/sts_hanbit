// var application = (function(){})();  IIFE 패턴
var app = (function(){
	var init = function(context) {
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
		move();
		$('#global_content').addClass('box');
		$('#global_content a').addClass('cursor');
		$('#global_content > h2').text('서비스를 이용하시려면 회원가입을 하세요');
		$('#global_content_a_regist').text('SING UP').click(function(){move('member','regist');});
		$('#global_content_a_login').text('LOGIN').click(function(){location.href='/member/login';});
		$('#global_content_a_admin').text('ADMIN MODE').click(function(){admin.check();});
		
	};
	var context = function(){
		return sessionStorage.getItem('context');
	};
	var js = function(){
		return sessionStorage.getItem('js');
	};
	var css = function(){
		return sessionStorage.getItem('css');
	};
	var img = function(){
		return sessionStorage.getItem('img');
	};
	
	var to_douglas = function() {
		util.move('','');
	};
	var move = function(){
		$('#title').click(function(){
		util.home();
		});
			$('#a_member').click(function(){
				util.move('member','main');
			
			});
			$('#a_grade').click(function(){
				util.move('grade','main');
			});
			$('#a_account').click(function(){
				util.move('account','main');
			});
			$('#a_school').click(function(){
				util.move('global','school_info');
		
		});
		
	}
	return {
		init : init,
		to_douglas : to_douglas,
		move : move,
		context : context,
		img : img,
		js : js,
		css : css
	}
})();
var admin = (function(){
	var _pass;
	var	setPass = function(pass){this._pass = pass;};
	var	getPass = function(){return this._pass;};
	return{
		setPass : setPass,
		getPass : getPass,
		
		
		check: function() {
			setPass(1);
			var context = sessionStorage.getItem('context')+'/global.do';
			var isAdmin = window.confirm('관리자입니까?'); //confirm은 내장객체
			if (!isAdmin) {
				alert('관리자만 접근 가능합니다');
			}else{
				var password = window.prompt('관리자 비번을 입력바랍니다');
				if (password == getPass()) {
					location.href = app.context()+'/global.do';
				}else{
					alert('관리자비번이 틀립니다')
				}
			}
		}
	
	
	};

})();
var util = (function(){
	var _page,_directory;
	var setPage = function(page){this._page = page;};
	var setDirectory = function(directory){this._directory = directory;};
	var getPage = function(){return this._page;};
	var getDirectory = function(){return this._directory;};
	return{
		move : function(){
			setDirctory(directory,page);
			setPage : setPage;
			location.href = app.context()+'/'+getDirectory()+'/'+getPage();
				
		},
	isNumber : function(value) {
		  return typeof value === 'number' && isFinite(value)
		}
	};
})();




var user = (function(){
	  var context = sessionStorage.getItem("context");
	 return{
	     init :function() {
	   	 $('#bt_bom').click(function() {move(context,'bom'); }, false);  // 콜백 함수
		  $('#bt_dom').click(function() {move(context,'dom'); }, false);
		 $('#bt_kaup').click(function() {move(context,'kaup');}, false);
		  $('#bt_account').click(function() {move(context,'account');}, false);
		 } , // 자바의 클래스 처럼 속성(은닉)과 기능으로 ..
		 init : function(){
				$('#c_count').click(function(){location.href=app.context()+"/account/count"});
				$('#c_delete').click(function(){location.href=app.context()+"/account/delete"});
				$('#c_diposit').click(function(){location.href=app.context()+"/account/diposit"});
				$('#c_list').click(function(){location.href=app.context()+"/account/list"});
				$('#c_regist').click(function(){location.href=app.context()+"/account/regist"});
				$('#c_search').click(function(){location.href=app.context()+"/account/search"});
				$('#c_update').click(function(){location.href=app.context()+"/account/update"});
				$('#c_withdraw').click(function(){location.href=app.context()+"/account/withdraw"});
				
				}
	 };
	})();

var account = (function(){
	var _account_no=0,_money=0;	
	var setAccountNo = function(account_no){this._account_no=account_no;}
	var getAccountNo = function(){return this._account_no;}
	var setMoney = function(money){this._money=money;}
	var getMoney = function(){return this._money;}
	
	var setAcc = function(acc){this._acc=acc;}
	var getAcc = function(){return this._acc}
	
	return { 
		setAccountNo : setAccountNo,
		getAccountNo : getAccountNo,
		setMoney : setMoney,
		getMoney : getMoney,
		
		init : function() {
				$('#bt_spec_show').click(member2.spec());
				$('#bt_make_account').click(this.spec());
				$('#bt_deposit').click(this.deposit());
				$('#bt_withdraw').click(this.withdraw());
			},
			spec : function(){
				setAccountNo(Math.floor(Math.random()*899999) + 10000), ///// setter 역할
				setMoney(0);
				document.querySelector('#result_account').innerHTML= '계좌번호 : '+ getAccountNo(); ////getter 역할  메소드 이름으로 결정하는 것이 아니는 아니라 위치로 게터 세터를 결정한다	
			},
			deposit : function(){
			var r_acc =	document.querySelector('#result_account').innerText;
			console.log('계좌번호 : ' + r_acc);	
			switch (typeof r_acc) {
			case 'number': console.log('this is number type');break;
			case 'string': console.log('this is number type');break;
			case 'undefined': console.log('this is number undefined');break;
				default: console.log('fail');break;
			}
			if(!util.isNumber(getAccountNo())){
					// r_acc ==null 값체크
					// r_acc === undefined 타입체크
					alert('통장이 개설되지 않았습니다');
				}
				var rest_money = getMoney();
				var input_money = Number(document.querySelector('#money').value);
				console.log('인풋머니 타입 체크 : '+ (typeof input_money === 'number'));
				console.log('잔액 타입 체크 : '+ (typeof rest_money === 'number'));
				setMoney(rest_money+input_money);
				console.log('입금액 : '+ (typeof getMoney() === 'number'));
				document.querySelector('#rest_money').innerHTML= getMoney() ;
			},
			withdraw : function(){
				var rest_money = getMoney();
				var input_money = Number(document.querySelector('#money').value);
				setMoney(rest_money-input_money);
				document.querySelector('#rest_money').innerHTML = getMoney() ;
			}
	};
})();


var member2 = (function(){
	var _ssn,_name,_gender,_age;

	var setAge = function(age){this._age=age;};
	var setGender = function(gender){this._gender=gender;};
	var setSSN = function(ssn){this._ssn=ssn;};
	var setName = function(name){this._name=name;};
	var getAge = function(){return this._age;};
	var getSSN = function(){return this._ssn;};
	var getName = function(){return this._name;};
	var getGender = function(){return this._gender;};
	
	return{
		setSSN : setSSN,
		setName : setName,
		setAge : setAge,
		setGender : setGender,
		getName : getName,
		getAge : getAge,
		getSSN : getSSN,
		getGender : getGender,
		spec : function(){
			setName(document.querySelector('#name').value);
			var ssn = document.querySelector('#ssn').value;
			var result = '';
			var now = new Date().getFullYear();
			console.log("now    "+now);
			var gender = parseInt(ssn.substring(7,8));
			var ageTemp = parseInt(ssn.substring(0,2));
			console.log("ageTemp    "+ageTemp);
			switch (gender) {
			case 1: case 5: 
				setGender("남"); 
				setAge(now-(1900+ageTemp));
				console.log("1900+ageTemp    "+(1900+ageTemp));
				break;
			case 3: case 7:
				setGender("남"); 
				setAge(now-(2000+ageTemp));
				break;
			case 2: case 6:
				setGender("여");
				setAge(now-(1900+ageTemp));
				console.log("1900+ageTemp    "+(1900+ageTemp));
				break;
			case 4: case 8:
				setGender("여");
				setAge(now-(2000+ageTemp));
				break;
			default:
				setGender = "잘못된값을 입력하셨습니다";
			}
			document.querySelector('#result_name').innerHTML=getName();
			document.querySelector('#result_age').innerHTML=getAge();
			document.querySelector('#result_gender').innerHTML=getGender();
			// 인스턴스 변수 선언하고 게터 세터 하고 끌고 오는 방식하고 똑같다
		}
	};
})();

/*kaup*/
	
var kaup = (function(){
		
	return{
			init : function (){
			var kaup_calc = document.querySelector('#kaup_calc');
	    	kaup_calc.addEventListener('click',this.calc,false);
		},
		
			calc : function (){
				alert('카우프칼크 클릭');
				var name=document.querySelector('#name').value;
				var height=document.getElementById('height').value;
				var weight=document.getElementById('weight').value;
				console.log('name'+ name);
				console.log('height'+ height);
				console.log('weight'+ weight);
				var result='';
				var kaup = weight / (height / 100) / (height / 100);

				if (kaup < 18.5) {
					result = "저체중";
				} else if (18.5 < kaup && kaup < 22.9) {
					result = "정상체중";
				} else if (23.0 < kaup && kaup < 24.9) {
					result = "위험체중";
				} else if (25.0 < kaup && kaup < 29.9) {
					result = "비만1단계";
				} else if (40 > kaup && kaup > 30) {
					result = "비만2단계";
				} else if (kaup > 40) {
					result = "비만3단계";
				}

				document.getElementById('result').innerHTML='"'+name+'"'+'님의 카우푸결과 : '+result;

				//	return name + "의 BMI지수는 " + Double.parseDouble(String.format("%.2f", kaup)) + "이고, " + result + "이다";

			}
			
		};
			
		})();


	

//function kaup_go(){location.href = getContext()+'/douglas.do?page=kaup';}


var grade = (function(){
	return {
		init : function(){
			$('#b_count').click(function(){location.href=app.context()+"/grade/count"});
			$('#b_delete').click(function(){location.href=app.context()+"/grade/delete"});
			$('#b_list').click(function(){location.href=app.context()+"/grade/list"});
			$('#b_regist').click(function(){location.href=app.context()+"/grade/regist"});
			$('#b_search').click(function(){location.href=app.context()+"/grade/search"});
			$('#b_update').click(function(){location.href=app.context()+"/grade/update"});
			
		
		
		
		
		
	}
};

})();
var account = (function(){
	return {
		
		
	};
	
})();
var member = (function(){
	return {
		init : function(){
			$('#regist').click(function(){location.href=app.context()+"/member/regist"});
			$('#login').click(function(){location.href=app.context()+"/member/login"});
			$('#logout').click(function(){location.href=app.context()+"/member/logout"});
			$('#detail').click(function(){location.href=app.context()+"/member/detail"});
			$('#update').click(function(){location.href=app.context()+"/member/update"});
			$('#delete').click(function(){location.href=app.context()+"/member/delete"});
			$('#list').click(function(){location.href=app.context()+"/member/list"});
			$('#findBy').click(function(){location.href=app.context()+"/member/findBy"});
			$('#count').click(function(){location.href=app.context()+"/member/count"});
			$('#member_content_img_home').attr('src',app.img()+'/home.png').css('width','30px');
			$('#member_content_a_home').attr('alt','home').click(function(){location.href=app.context()+"/"});
			$('#member_content').addClass('box').css('font-size','20px');
			$('#member_content > article').css('width','300px').addClass('center').addClass('text_left');
			$('#member_content > article  a').css('font-size','20px').addClass('cursor');
			$('#member_content > h1').text('MEMBER MGMT');
			$('#member_content_ol > li > a').addClass('remove_underline');
			$('#member_content_ol > li:first > a').text('SIGN UP');
			$('#member_content_ol > li:nth(1) > a').text('LOGIN');
			$('#member_content_ol > li:nth(2) > a').text('LOGOUT');
			$('#member_content_ol > li:nth(3) > a').text('DETAIL');
			$('#member_content_ol > li:nth(4) > a').text('UPDATE');
			$('#member_content_ol > li:nth(5) > a').text('DELETE');
			$('#member_content_ol > li:nth(6) > a').text('LIST');
			$('#member_content_ol > li:nth(7) > a').text('SEARCH');
			$('#member_content_ol > li:nth(8) > a').text('COUNT');
			
		}
	};
})();
var grade = (function(){
	return {
		init : function(){
			$(function() {
				$('#grade_content').addClass('box');
				$('#img_home').css('width','30px');
				$('#grade_content > article').css('width','300px').css('margin','0 auto').css('text-align','left');
				$('#title').css('font-size','40px')
				$('#a_regist').click(function() {
					location.href = "${context}/grade/regist.do";
				});
				$('#a_update').click(function() {
					location.href = "${context}/grade/update.do";
				});
				$('#a_delete').click(function() {
					location.href = "${context}/grade/delete.do";
				});
				$('#a_list').click(function() {
					location.href = "${context}/grade/list.do";
				});
				$('#a_count').click(function() {
					location.href = "${context}/grade/count.do";
				});
				$('#a_search').click(function() {
					location.href ="${context}/grade/search.do";
				});
			});
		}
	};
})();