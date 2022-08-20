FROM postgres:14-alpine

ADD ./sql/init/* /docker-entrypoint-initdb.d