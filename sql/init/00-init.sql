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

insert into defect values
    ('811e9797-71c0-4f19-805e-c6fcc780562d', extract(epoch from now())::integer, 'test', 1234, 'test', 'test'),
    (gen_random_uuid(), extract(epoch from now())::integer, 'foo', 8500, 'info', 'system rebooted'),
    (gen_random_uuid(), extract(epoch from now())::integer, 'foo', 5050, 'warn', 'memory utilization above 90%'),
    (gen_random_uuid(), extract(epoch from now())::integer, 'bar', 8500, 'info', 'system rebooted'),
    (gen_random_uuid(), extract(epoch from now())::integer, 'foo', 8500, 'info', 'system rebooted'),
    (gen_random_uuid(), extract(epoch from now())::integer, 'bar', 2500, 'info', 'null pointer exception'),
    (gen_random_uuid(), extract(epoch from now())::integer, 'baz', 8500, 'info', 'system rebooted');

-- insert into defect values
-- select
-- 	gen_random_uuid() as "id",
--     extract(epoch from generate_series)::integer as "timestamp",
--     ('{foo,bar,baz}'::text[])[ceil(random() * 3)] as "system",
--     ('{1021,432,50578,290,768}'::integer[])[ceil(random() * 5)] as "code",
--     ('{info,warn,error,crit}'::text[])[ceil(random() * 4)] as "severity",
--     'an unknown error has occurred' as "error"
-- from generate_series(now() - interval '10 hours', now(), interval '1 hour');