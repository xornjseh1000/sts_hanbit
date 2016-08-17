<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>내정보보기</title>
	<link rel="stylesheet" href="${context}>/css/member.css" />
	<style>
		#member_detail{border: 1px solid gray;width:90%;height: 400px;margin: 0 auto;border-collapse: collapse;}
		#member_detail tr{border: 1px solid gray;height: 20%}
		#member_detail td{border: 1px solid gray;}
		.font_bold{font-weight:bold;}
		.bg_color{background-color: yellow}
</style>
</head>
<body>
<div class="box">

	
		<a href="${context}/member/member_controller.jsp">
			<img src="${img}/home.png" alt="회원관리 홈 으로" width="30" height="30">
		</a>
		<a href="${context}/index.jsp">
			<img src="${img}/Previous.png" alt="메인 홈 으로" width="30" height="30">
		</a>
	</div>
</body>
</html>