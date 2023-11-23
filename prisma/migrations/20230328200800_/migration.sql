-- DropForeignKey
ALTER TABLE `order_items` DROP FOREIGN KEY `fk_order_items_orders1`;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `fk_order_items_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
