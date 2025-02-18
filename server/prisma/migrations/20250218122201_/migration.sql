-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "makeId" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    "bodyId" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,
    "transmissionId" INTEGER NOT NULL,
    "fuelId" INTEGER NOT NULL,
    "drivetrainId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "discountPercentage" INTEGER NOT NULL DEFAULT 0,
    "mileage" INTEGER NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "seats" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Car_makeId_fkey" FOREIGN KEY ("makeId") REFERENCES "Make" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_bodyId_fkey" FOREIGN KEY ("bodyId") REFERENCES "Body" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_transmissionId_fkey" FOREIGN KEY ("transmissionId") REFERENCES "Transmission" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_fuelId_fkey" FOREIGN KEY ("fuelId") REFERENCES "Fuel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_drivetrainId_fkey" FOREIGN KEY ("drivetrainId") REFERENCES "Drivetrain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Make" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Model" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Body" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Color" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Transmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fuel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Drivetrain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "path" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    CONSTRAINT "Image_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    CONSTRAINT "Address_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CarFeatures" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CarFeatures_A_fkey" FOREIGN KEY ("A") REFERENCES "Car" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CarFeatures_B_fkey" FOREIGN KEY ("B") REFERENCES "Feature" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Make_name_key" ON "Make"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Model_name_key" ON "Model"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Body_type_key" ON "Body"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Color_name_key" ON "Color"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Transmission_type_key" ON "Transmission"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Fuel_type_key" ON "Fuel"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Drivetrain_type_key" ON "Drivetrain"("type");

-- CreateIndex
CREATE UNIQUE INDEX "_CarFeatures_AB_unique" ON "_CarFeatures"("A", "B");

-- CreateIndex
CREATE INDEX "_CarFeatures_B_index" ON "_CarFeatures"("B");
