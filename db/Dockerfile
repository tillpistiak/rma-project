FROM postgres

ENV POSTGRES_PASSWORD example
ENV POSTGRES_USER postgres
ENV POSTGRES_DB dogs

ADD create.sql /docker-entrypoint-initdb.d/
ADD insert.sql /docker-entrypoint-initdb.d/