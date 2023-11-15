/*
  Warnings:

  - Added the required column `description` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `synopsis` to the `Volume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Volume" ADD COLUMN     "synopsis" TEXT NOT NULL;
