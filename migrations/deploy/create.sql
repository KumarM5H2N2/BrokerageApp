-- Deploy brokerage:create to pg

BEGIN;
 
 DROP TABLE IF EXISTS "clientfile";

CREATE TABLE "clientfile" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" text NOT NULL UNIQUE,
    "firstname1" text NOT NULL,
    "lastname1" text NOT NULL,
    "firstname2" text,
    "lastname2" text,
    "numberchild" int NOT NULL,
    "maritalstatus" text NOT NULL,
    "nationality" text NOT NULL,
    "residence status" text NOT NULL,
    "address" text NOT NULL


    
);

COMMIT;
