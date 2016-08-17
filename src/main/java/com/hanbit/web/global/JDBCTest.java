package com.hanbit.web.global;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.sql.Statement;

/**
 * @date   :2016. 6. 30.
 * @author :ckan
 * @file   :JDBCTest.java 
 * @story  :
 */
public class JDBCTest {
	public static void main(String[] args) {
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = "select * from test",result="";
		List<String> list = new ArrayList<String>();
		try {
			Class.forName(Constants.ORACLE_DRIVER);
			con = DriverManager.getConnection(Constants.ORACLE_URL,Constants.USER_ID,Constants.USER_PW);
			stmt = con.createStatement();
			rs = stmt.executeQuery("insert into TEST "
					+ "select 'lee','1111' "
					+ "from dual "
					+ "union all "
					+ "select 'ckan','2222' "
					+ "from dual");
			sql = "select * from test"; 
			rs = stmt.executeQuery(sql); 
			while (rs.next()) {
				result = "id : "+rs.getString("ID")+" pw : "+rs.getString("pw");
				list.add(result);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} 
		System.out.println(list);
	}
}
