BEGIN;

ALTER TABLE "useraccess"
ADD COLUMN "password" TEXT NOT NULL;

COMMIT;