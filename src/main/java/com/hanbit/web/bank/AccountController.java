package com.hanbit.web.bank;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hanbit.web.grade.GradeController;

@Controller
@RequestMapping("/account")
public class AccountController {
	private static final Logger logger = LoggerFactory.getLogger(AccountController.class);
	
	@RequestMapping("/main")
	public String moveMain(){
		logger.info("AccountController ! goMain..");
		return "account/content.tiles";
	}
	@RequestMapping("/count")
	public String moveCount(){
		logger.info("AccountController ! count..");
		return "account/count.tiles";
	}
	@RequestMapping("/delete")
	public String moveDelete(){
		logger.info("AccountController ! delete..");
		return "account/delete.tiles";
	}
	@RequestMapping("/diposit")
	public String moveDiposit(){
		logger.info("AccountController ! diposit..");
		return "account/diposit.tiles";
	}
	@RequestMapping("/list")
	public String moveList(){
		logger.info("AccountController ! list..");
		return "account/list.tiles";
	}
	@RequestMapping("/regist")
	public String moveRegist(){
		logger.info("AccountController ! regist..");
		return "account/regist.tiles";
	}
	@RequestMapping("/search")
	public String moveSearch(){
		logger.info("AccountController ! search..");
		return "account/search.tiles";
	}
	@RequestMapping("/update")
	public String moveUpdate(){
		logger.info("AccountController ! update..");
		return "account/update.tiles";
	}
	@RequestMapping("/withdraw")
	public String moveWithdraw(){
		logger.info("AccountController ! withdraw..");
		return "account/withdraw.tiles";
	}
	
	
	
	
	
}
