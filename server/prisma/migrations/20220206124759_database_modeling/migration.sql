/*
  Warnings:

  - Added the required column `lat` to the `Geometry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lng` to the `Geometry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Geometry" ADD COLUMN     "lat" INTEGER NOT NULL,
ADD COLUMN     "lng" INTEGER NOT NULL;
