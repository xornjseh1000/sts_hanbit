<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
  <section id="grade_content" class="box">
  <h1 id="title">성적관리</h1><br/>
            <article>
			<ol>
				<li><a href="#" id="a_regist">등록</a></li>
				<li><a href="#" id="a_update">수정</a></li>
				<li><a href="#" id="a_delete">삭제</a></li>
				<li><a href="#" id="a_list">목록</a></li>
				<li><a href="#" id="a_count">카운트</a></li>
				<li><a href="#" id="a_search">검색</a></li>
			
			
			</ol>	
			</article>	
    <a href="${context}/home.jsp">
    <img id="img_home" alt="home" src="${img}/home.png" />
    </a>
</section>
<script src="${js}/resig.js" ></script>
<script type="text/javascript">
	grade.init();
</script>

