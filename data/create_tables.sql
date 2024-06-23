-- Deploy brokerage:create to pg

BEGIN;
 

-- this allows you to delete several tables at the same time; the advantage is that you don't have to worry about references between them.
 DROP TABLE IF EXISTS "clientfile", "savingsdistribution","realestatedistribution","incomedistribution","expensesotherthancredit", "creditdistribution", "useraccess", "useraccess_has_clientfile";

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
    "residencestatus" text NOT NULL,
    "address" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);


CREATE TABLE "savingsdistribution" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "savingstype" text NOT NULL,
  "holder" text NOT NULL,
  "estimatedvalue" int NOT NULL,
  "financialinstitute" text NOT NULL,

  "clientfile_id" INTEGER NOT NULL REFERENCES "clientfile"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "realestatedistribution" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "realestatetype" text NOT NULL,
  "holder" text NOT NULL,
  "estimatedvalue" int NOT NULL,
  "dateaquisition" date NOT NULL,

  "clientfile_id" INTEGER NOT NULL REFERENCES "clientfile"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "incomedistribution" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "incometype" text NOT NULL,
  "holder" text NOT NULL,
  "annualsum" int NOT NULL,
 
  "clientfile_id" INTEGER NOT NULL REFERENCES "clientfile"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "expensesotherthancredit" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "nature" text NOT NULL,
  "annualsum" int NOT NULL,
  
  "clientfile_id" INTEGER NOT NULL REFERENCES "clientfile"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "creditdistribution" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "credittype" text NOT NULL,
  "holder" text NOT NULL,
  "annualsum" int NOT NULL,
  "remainingcapitaldue" int NOT NULL,
  "creditorbank" text NOT NULL,

  "clientfile_id" INTEGER NOT NULL REFERENCES "clientfile"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "useraccess" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL UNIQUE,
  "prenom" text NOT NULL,
  "nom" text NOT NULL,
  
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


CREATE TABLE "useraccess_has_clientfile" (
  "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

  "useraccess_id" INTEGER NOT NULL REFERENCES "useraccess"("id") ON DELETE CASCADE,
  "clientfile_id" INTEGER NOT NULL REFERENCES "clientfile"("id") ON DELETE CASCADE,

  UNIQUE ("useraccess_id", "clientfile_id"),

  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);




COMMIT;
