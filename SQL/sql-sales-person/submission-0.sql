-- Write your query below
SELECT sp.name 
FROM sales_person sp
WHERE sp.sales_id NOT IN(
   SELECT o.sales_id
   from orders o
   join company c on o.com_id = c.com_id
   where c.name ='CRIMSON'
);