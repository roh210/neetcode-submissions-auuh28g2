-- Write your query below
SELECT date_id, make_name, COUNT(distinct lead_id) as unique_leads, COUNT(distinct partner_id) as unique_partners
FROM daily_sales
GROUP by date_id, make_name