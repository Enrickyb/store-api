-- DropForeignKey
ALTER TABLE `wallet_transactions` DROP FOREIGN KEY `fk_wallet_transactions_wallet1`;

-- DropForeignKey
ALTER TABLE `wallet_transactions` DROP FOREIGN KEY `fk_wallet_transactions_wallet_client1`;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `fk_wallet_transactions_wallet_client1` FOREIGN KEY (`wallet_from`) REFERENCES `wallet_client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
