CREATE DATABASE IF NOT EXISTS ranking_db;

USE ranking_db;

CREATE TABLE rankings (
    object_id INT,
    rank_source INT,
    score FLOAT
);

SELECT object_id, SUM(score) as total_score
FROM rankings
GROUP BY object_id
ORDER BY total_score DESC
LIMIT 10;  -- Adjust '10' to your desired value of k

EXPLAIN ANALYZE
SELECT object_id, SUM(score) as total_score
FROM rankings
GROUP BY object_id
ORDER BY total_score DESC
LIMIT 10;  
