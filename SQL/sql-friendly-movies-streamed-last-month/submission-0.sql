-- Write your query below
SELECT distinct c.title
FROM content c
JOIN tv_program t on c.content_id = t.content_id
WHERE c.kids_content = 'Y' AND t.program_date like '2020-06%' AND c.content_type = 'Movies'