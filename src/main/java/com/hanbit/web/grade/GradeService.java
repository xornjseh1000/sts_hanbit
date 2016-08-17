package com.hanbit.web.grade;

import java.util.List;

import com.hanbit.web.global.CommonService;

public interface GradeService extends CommonService{
	// 총 7개의 기본 패턴이 존재하더라
	// exeu
	public String insert(GradeBean grade);
	public String update(GradeBean grade);
	public String delete(GradeBean grade);
	// exeQ
	public GradeBean findBySeq(int seq);
	public int count(String examDate);
	public String score(String[] a);
}
