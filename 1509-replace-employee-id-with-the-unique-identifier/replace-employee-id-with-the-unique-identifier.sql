# Write your MySQL query statement below
 #WE ARE GOING TO USE LEFT JOIN BECAUSE ALL THE VALUES IN THE LEFT TABLE MUST BE IN THE RIGHT TABLE
SELECT eu.unique_id,e.name
 FROM
 Employees as e
 LEFT JOIN
 EmployeeUNI as eu
 ON
 e.id=eu.id

