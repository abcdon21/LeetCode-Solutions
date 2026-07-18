# Write your MySQL query statement below
#NESTED,INNER TABLE AND OUTER TABLE CONCEPT
SELECT today.id
FROM Weather AS today
WHERE EXISTS (
    SELECT 1
    FROM Weather AS yesterday
    WHERE DATEDIFF(today.recordDate, yesterday.recordDate) = 1 #standard and reliable way to compare dates
      AND today.temperature > yesterday.temperature
);