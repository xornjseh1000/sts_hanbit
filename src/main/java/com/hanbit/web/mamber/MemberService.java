/**
 * 
 */
package com.hanbit.web.mamber;

import java.util.List;

import com.hanbit.web.global.CommonService;
import subject.SubjectMember;

/**
 * @date   :2016. 6. 17. 
 * @author :pakjkwan@gmail.com
 * @file   :StudentService.java
 * @story  :
*/
public interface MemberService extends CommonService{
	public String regist(MemberBean mem);
	public MemberBean findById(String findID);
	public void update(MemberBean stu2);
	public String delete(MemberBean member);
	public void logout(MemberBean member);
	public SubjectMember login(MemberBean member);
	public MemberBean show();
	
	
}