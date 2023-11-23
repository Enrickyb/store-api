/*
  Warnings:

  - You are about to drop the column `modify_text` on the `order_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order_items` DROP COLUMN `modify_text`;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `modify_text` TEXT NULL;
