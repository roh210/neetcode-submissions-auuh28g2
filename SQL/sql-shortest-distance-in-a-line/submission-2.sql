WITH distances AS (
    SELECT x -LAG(x) OVER (ORDER by x) as distance
    FROM point
)
SELECT MIN(distance) AS shortest
FROM distances