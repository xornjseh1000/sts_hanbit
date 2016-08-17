package subject;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.hanbit.web.global.Constants;
import com.hanbit.web.global.DatabaseFactory;
import com.hanbit.web.global.Vendor;


public class SubjectDAO {
	private static SubjectDAO instance = new SubjectDAO();
	private SubjectDAO() {
		con = DatabaseFactory.createDatabase(Vendor.ORACLE, Constants.USER_ID, Constants.USER_PW).getConnection();
	}
	Connection con;
	Statement stmt;
	PreparedStatement pstmt;
	ResultSet rs; 
	
	public static SubjectDAO getInstance() {
		return instance;
	}
	public void insert(SubjectBean sub){
		String sql = "insert into subject(subj_seq,id,major,subjects) values(subj_seq.nextval,?,?,?)";
		int result = 0;
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, sub.getId());
			pstmt.setString(2, sub.getMajor());
			pstmt.setString(3, sub.getSubjects());
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if (result == 1) {
			System.out.println("과목 추가 성공");
		} else {
			System.out.println("과목 추가 실패");
		}
	}
	public SubjectBean findById(String id){
		SubjectBean s = null;
		String sql ="select "
				+ "id as id, "
				+ "major as major, "
				+ "subjects as sub "
				+ "from subject where id = ?";
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				s= new SubjectBean();
				s.setId(rs.getString("id"));
				s.setMajor(rs.getString("major"));
				s.setSubjects(rs.getString("sub"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return s;
	}
	
}
