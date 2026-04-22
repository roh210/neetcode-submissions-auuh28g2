-- Write your query below
WITH store_price AS (
SELECT p.product_id,s.store,
CASE 
   WHEN s.store = 'store1' THEN p.store1
   WHEN s.store = 'store2' THEN p.store2
   WHEN s.store = 'store3' THEN p.store3
END as price
FROM products p
CROSS JOIN (
    SELECT 'store1' AS store
    UNION ALL SELECT 'store2' AS store
    UNION ALL SELECT 'store3' AS store
)s 
)

SELECT product_id,store,price
FROM store_price
WHERE price is NOT NULL;