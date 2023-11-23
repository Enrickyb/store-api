-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `fk_orders_user1`;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
