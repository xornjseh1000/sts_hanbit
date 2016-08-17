package com.hanbit.web.grade;

import java.io.Serializable;

public class GradeBean  implements Serializable{
	private static final long serialVersionUID = 1L;
	private String id,grade,examDate,className,name,subject,major;
	private int java,sql,html,javascript,seq,updatescore;
	public GradeBean() {
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getExamDate() {
		return examDate;
	}
	public void setExamDate(String examDate) {
		this.examDate = examDate;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public int getJava() {
		return java;
	}
	public void setJava(int java) {
		this.java = java;
	}
	public int getSql() {
		return sql;
	}
	public void setSql(int sql) {
		this.sql = sql;
	}
	public int getHtml() {
		return html;
	}
	public void setHtml(int html) {
		this.html = html;
	}
	public int getJavascript() {
		return javascript;
	}
	public void setJavascript(int javascript) {
		this.javascript = javascript;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public int getUpdatescore() {
		return updatescore;
	}
	public void setUpdatescore(int updatescore) {
		this.updatescore = updatescore;
	}
	@Override
	public String toString() {
		return "성적표 [No. " + seq + " 이름 : " + name +" 아이디 : " + id + " 시험일자 : "+examDate+" 학점 : " + grade + "\n"
				+ " 자바 : " + java + " SQL : " + sql + " HTML5 : " + html+ " 자바스크립트 : " + javascript + "] \n";
	}
	

}
