-- Write your query below
WITH cte AS (
  SELECT *, (MAX(score) OVER(PARTITION BY student_id)) as max_score,
   MIN(exam_id) OVER(PARTITION BY student_id, score) AS min_exam_id
  FROM exam_results
)

SELECT student_id, exam_id, score
FROM cte
WHERE score = max_score AND exam_id = min_exam_id
ORDER BY student_id,exam_id;
