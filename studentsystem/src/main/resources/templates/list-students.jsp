<%@ page import="java.util.*, com.island.web.jdbc.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>

<html>

<head>
	<title>Student Tracker APP</title>
	
	<link type="text/css" rel="stylesheet" href="css/style.css">
</head>

<body>
	<div id="wrapper">
		<div id="header">
			<h2>Foobar University</h2>
		</div>
	</div>

	<div id="container">
		<div id="content">
		
			<input type="button" id="addStuBtn" value="Add Student"
			           onclick="window.location.href='add-student-form.jsp'; return false;"
			           class="add-student-button"
			/>
			
			<br><br>
		
			<table>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>E-mail</th>
					<th>Action</th>
				</tr>
				
				<c:forEach var="tempStudent" items="${student_list}">
					
					<c:url var="tempLink" value="StudentControllerServlet">
						<c:param name="command" value="LOAD" />
						<c:param name="studentId" value="${tempStudent.id}" />
					</c:url>
					
					<c:url var="deleteLink" value="StudentControllerServlet">
						<c:param name="command" value="DELETE" />
						<c:param name="studentId" value="${tempStudent.id}" />
					</c:url>
					
					<tr>
						<td>${tempStudent.firstName}</td>
						<td>${tempStudent.lastName}</td>
						<td>${tempStudent.email}</td>
						<td>
							<a href="${tempLink}">Update</a> | 
							<a href="${deleteLink}"
								 onclick="if (!(confirm('Are you sure you want to delete this student?'))) return false;">
								 Delete
							</a>
						</td>
					</tr>
				</c:forEach>
			</table>
			
		</div>
	</div>

</body>

</html>