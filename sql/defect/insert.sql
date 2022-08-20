insert into defect (
    id,
    "timestamp",
    "system",
    code,
    severity,
    error
)
values ($1, $2, $3, $4, $5, $6);