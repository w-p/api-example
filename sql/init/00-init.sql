create table if not exists defect (
    id text,
    "timestamp" integer,
    "system" text,
    code integer,
    severity text,
    error text
);

create index defect_timestamp_idx on defect ("timestamp");

create index defect_severity_idx on defect (severity);

select
	gen_random_uuid() as "id",
    generate_series as "timestamp",
    ('{foo,bar,baz}'::text[])[ceil(random() * 3)] as "system",
    ('{1021,432,50578,290,768}'::integer[])[ceil(random() * 5)] as "code",
    ('{info,warn,error,crit}'::text[])[ceil(random() * 4)] as "severity",
    'an unknown error has occurred' as "error"
from generate_series(now() - interval '100000 hours', now(), interval '1 hour');