/*
  Warnings:

  - You are about to drop the column `bodyId` on the `Car` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "makeId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,
    "transmissionId" INTEGER NOT NULL,
    "fuelId" INTEGER NOT NULL,
    "drivetrainId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "torque" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "seats" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Car_makeId_fkey" FOREIGN KEY ("makeId") REFERENCES "Make" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_transmissionId_fkey" FOREIGN KEY ("transmissionId") REFERENCES "Transmission" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_fuelId_fkey" FOREIGN KEY ("fuelId") REFERENCES "Fuel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_drivetrainId_fkey" FOREIGN KEY ("drivetrainId") REFERENCES "Drivetrain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Car" ("colorId", "createdAt", "description", "doors", "drivetrainId", "fuelId", "horsepower", "id", "makeId", "mileage", "modelId", "price", "seats", "torque", "transmissionId", "userId", "year") SELECT "colorId", "createdAt", "description", "doors", "drivetrainId", "fuelId", "horsepower", "id", "makeId", "mileage", "modelId", "price", "seats", "torque", "transmissionId", "userId", "year" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
