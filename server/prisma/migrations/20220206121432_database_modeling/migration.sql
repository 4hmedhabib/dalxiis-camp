-- CreateEnum
CREATE TYPE "GeometryType" AS ENUM ('Point');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campground" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "authorId" INTEGER,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Campground_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Geometry" (
    "id" SERIAL NOT NULL,
    "campgroundId" INTEGER NOT NULL,
    "type" "GeometryType" NOT NULL,

    CONSTRAINT "Geometry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campground_Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "campgroundId" INTEGER,

    CONSTRAINT "Campground_Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "campgroundId" INTEGER,
    "authorId" INTEGER,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Geometry_campgroundId_key" ON "Geometry"("campgroundId");

-- AddForeignKey
ALTER TABLE "Campground" ADD CONSTRAINT "Campground_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Geometry" ADD CONSTRAINT "Geometry_campgroundId_fkey" FOREIGN KEY ("campgroundId") REFERENCES "Campground"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campground_Images" ADD CONSTRAINT "Campground_Images_campgroundId_fkey" FOREIGN KEY ("campgroundId") REFERENCES "Campground"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_campgroundId_fkey" FOREIGN KEY ("campgroundId") REFERENCES "Campground"("id") ON DELETE SET NULL ON UPDATE CASCADE;
