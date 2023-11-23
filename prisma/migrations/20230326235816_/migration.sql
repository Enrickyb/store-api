/*
  Warnings:

  - You are about to drop the column `client_admin` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `server_admin` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `client_admin`,
    DROP COLUMN `server_admin`,
    ADD COLUMN `admin` INTEGER NOT NULL DEFAULT 0;
