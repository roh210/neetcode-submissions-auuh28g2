-- Write your query below
SELECT c.name
FROM customers c
left JOIN orders o on c.id = o.customer_id
WHERE o.customer_id is null;
