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