-- Deploy brokerage:create to pg

BEGIN;
 

-- this allows you to delete several tables at the same time; the advantage is that you don't have to worry about references between them.
 DROP TABLE IF EXISTS "clientfile";

CREATE TABLE "clientfile" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" text NOT NULL UNIQUE,
    "firstname1" text NOT NULL,
    "lastname1" text NOT NULL,
    "datebirth1" date NOT NULL,
    "firstname2" text,
    "lastname2" text,
    "datebirth2" date,
    "numberchild" int NOT NULL,
    "maritalstatus" text NOT NULL,
    "nationality" text NOT NULL,
    "residence status" text NOT NULL,
    "address" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz


    
);

COMMIT;
