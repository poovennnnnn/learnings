<%!
String username="",password="";

%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
username = request.getParameter("username");
password = request.getParameter("password");
if(username.equals("pooven") && password.equals("12345")){
%>
<jsp:forward page="success.html" />

<%}else{
%>

<h2> Login Failed.... try again</h2>
<jsp:include page="login.html"></jsp:include>
<%} %>


</body>
</html>