
BEGIN;

UPDATE "useraccess" SET "role" = 'admin' WHERE "email" = 'kumar.natesan@oclock.fr';

COMMIT;
