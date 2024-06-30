BEGIN;
ALTER TABLE "useraccess"

ADD COLUMN "role" text NOT NULL DEFAULT 'member';

UPDATE "useraccess" SET "role" = 'admin' WHERE "email" = 'kumar.natesan@oclock.fr';

COMMIT;