select * from defect
where
    ($1 is null or "timestamp" >= $1),
    ($2 is null or "timestamp" <= $2),
    ($3 is null or "system" = $3),
    ($4 is null or code = $4),
    ($5 is null or severity = $5),
    ($6 is null or error = $6);