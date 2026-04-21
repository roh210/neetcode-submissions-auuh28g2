-- Write your query below
SELECT actor_id, director_id
FROM actor_director
GROUP BY director_id,actor_id
HAVING COUNT(director_id) >= 3
