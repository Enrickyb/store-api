/*
  Warnings:

  - Made the column `type` on table `wallet_transactions` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `fk_user_clients`;

-- AlterTable
ALTER TABLE `wallet_transactions` MODIFY `type` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_clients` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
