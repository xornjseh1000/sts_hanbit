package com.hanbit.web.mamber;

import org.apache.catalina.connector.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hanbit.web.home.HomeController;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@RequestMapping("/main")
	public String moveMain(){
		logger.info("MemberController ! goMain..");
		return "member/content.tiles";
	}
	@RequestMapping("/regist")
	public String moveRegist() {
		logger.info("MemberController ! regist..");
		return "member/regist.tiles";
	}
	@RequestMapping("/login")
	public String moveLogin() {
		logger.info("MemberController ! login..");
		return "member/login.tiles";
	}
	@RequestMapping("/logout")
	public String moveLogout() {
		logger.info("MemberController ! logout..");
		return "member/logout.tiles";
	}
	@RequestMapping("/detail")
	public String moveDetail() {
		logger.info("MemberController ! detail..");
		return "member/detail.tiles";
	}
	@RequestMapping("/update")
	public String moveUpdate() {
		logger.info("MemberController ! update..");
		return "member/update.tiles";
	}
	@RequestMapping("/delete")
	public String moveDelete() {
		logger.info("MemberController ! delete..");
		return "member/delete.tiles";
	}
	@RequestMapping("/list")
	public String moveList() {
		logger.info("MemberController ! list..");
		return "member/list.tiles";
	}
	@RequestMapping("/findBy")
	public String moveFindBy() {
		logger.info("MemberController ! findBy..");
		return "member/findBy.tiles";
	}
	@RequestMapping("/count")
	public String moveCount() {
		logger.info("MemberController ! count..");
		return "member/count.tiles";
	}
	
}
