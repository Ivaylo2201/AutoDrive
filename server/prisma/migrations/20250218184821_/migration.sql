/*
  Warnings:

  - Added the required column `makeId` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Model" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "makeId" INTEGER NOT NULL,
    CONSTRAINT "Model_makeId_fkey" FOREIGN KEY ("makeId") REFERENCES "Make" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Model" ("id", "name") SELECT "id", "name" FROM "Model";
DROP TABLE "Model";
ALTER TABLE "new_Model" RENAME TO "Model";
CREATE UNIQUE INDEX "Model_name_key" ON "Model"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
