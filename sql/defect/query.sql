select * from defect
where
    ($1::integer is null or "timestamp" >= $1::integer)
    and
    ($2::integer is null or "timestamp" <= $2::integer)
    and
    ($3::text is null or "system" = $3::text)
    and
    ($4::integer is null or code = $4::integer)
    and
    ($5::text is null or severity = $5::text)
    and
    ($6::text is null or error like $6::text);