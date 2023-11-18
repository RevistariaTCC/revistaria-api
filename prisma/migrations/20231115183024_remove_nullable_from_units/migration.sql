/*
  Warnings:

  - Made the column `units` on table `Volume` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Volume" ALTER COLUMN "status" SET DEFAULT 'UNAVAILABLE',
ALTER COLUMN "units" SET NOT NULL;
