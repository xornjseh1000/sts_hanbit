<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>내정보보기</title>
	<link rel="stylesheet" href="${context}/css/member.css" />
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
<%-- <% 
	MemberService service = MemberServiceImpl.getInstance();
	MemberBean member = service.show();
	if(member.getId().equals("")){
%> 		<h2>내정보보기(detail) 실패</h2>
<%		response.sendRedirect("");		
	} 
%>
		<h1>내정보보기</h1>
		<table id="member_detail">
		<tr>
			<td rowspan="4" style="width:60%">
				<img src="${context}/img/<%=member.getId() %>.jpg" alt="W3Schools.com" width="400" height="400">
			</td>
			<td class="font_bold bg_color" style="width:20%">ID</td>
			<td style="width:40%"><%=member.getId()%></td>
		</tr>
		
		<tr>
			<td class="font_bold bg_color">이 름</td>
			<td><%=member.getName()%></td>
		</tr>
		<tr>
			<td class="font_bold bg_color">성 별</td>
			<td><%=member.getGender()%></td>
		</tr>
		<tr>
			<td class="font_bold bg_color">e-mail</td>
			<td colspan="2"><%=member.getEmail()%></td>
		</tr>
		<tr>
			<td class="font_bold bg_color">생년월일</td>
			<td colspan="2"><%=member.getSsn().substring(0,6)%></td>
		</tr>
		<tr>
			<td class="font_bold bg_color">등록일</td>
			<td colspan="2"><%=member.getRegDate()%></td>
		</tr> --%>
	</table>
		<a href="${context}/index.jsp">
			<img src="${img}/home.png" alt="회원관리 홈 으로" width="30" height="30">
		</a>
		<a href="${context}/member/member_controller.jsp">
			<img src="${img}/Previous.png" alt="메인 홈 으로" width="30" height="30">
		</a>
	</div>
</body>
</html>