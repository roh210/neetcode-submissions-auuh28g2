-- Write your query below
SELECT product_id, store, price
FROM (
    SELECT 
        product_id,
        unnest(ARRAY['store1', 'store2', 'store3']) AS store,
        unnest(ARRAY[store1, store2, store3]) AS price
    FROM products
) unpivoted
WHERE price IS NOT NULL;