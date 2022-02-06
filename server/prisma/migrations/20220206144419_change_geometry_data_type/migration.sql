/*
  Warnings:

  - You are about to alter the column `lat` on the `Geometry` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,7)`.
  - You are about to alter the column `lng` on the `Geometry` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,7)`.

*/
-- AlterTable
ALTER TABLE "Geometry" ALTER COLUMN "lat" SET DATA TYPE DECIMAL(10,7),
ALTER COLUMN "lng" SET DATA TYPE DECIMAL(10,7);
