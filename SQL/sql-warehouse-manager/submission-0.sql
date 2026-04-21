-- Write your query below
SELECT w.name as warehouse_name, SUM((p.width * p.length * p.height)*units) as volume
FROM warehouse w
LEFT JOIN products p ON w.product_id = p.product_id
GROUP by w.name
