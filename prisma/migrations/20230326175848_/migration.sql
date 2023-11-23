-- CreateTable
CREATE TABLE `category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NULL,
    `logo_url` VARCHAR(100) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,
    `wallet_client_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    INDEX `fk_clients_wallet_client1_idx`(`wallet_client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `id` VARCHAR(191) NOT NULL,
    `orders_id` VARCHAR(191) NOT NULL,
    `products_id` VARCHAR(191) NOT NULL,
    `value` INTEGER NULL,
    `value_logo` INTEGER NULL,
    `value_modify` INTEGER NULL,
    `with_logo` BOOLEAN NULL,
    `with_modify` BOOLEAN NULL,
    `modify_text` TEXT NULL,
    `value_final` INTEGER NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_order_items_orders1_idx`(`orders_id`),
    INDEX `fk_order_items_products1_idx`(`products_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `clients_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `value` INTEGER NULL,

    INDEX `fk_orders_clients1_idx`(`clients_id`),
    INDEX `fk_orders_user1_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NULL,
    `description` TEXT NULL,
    `file` VARCHAR(100) NULL,
    `thumbnail` VARCHAR(100) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `value` INTEGER NULL,
    `value_logo` INTEGER NULL DEFAULT 0,
    `value_modify` INTEGER NULL DEFAULT 0,
    `category_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expire_date` DATETIME(0) NULL,

    INDEX `fk_products_category1_idx`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(120) NULL,
    `email` VARCHAR(120) NOT NULL,
    `password` VARCHAR(120) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `wallet_id` VARCHAR(191) NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,
    `client_admin` BOOLEAN NOT NULL DEFAULT false,
    `server_admin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `user_email_UN`(`email`),
    INDEX `fk_user_clients_idx`(`client_id`),
    INDEX `fk_user_wallet1_idx`(`wallet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet` (
    `id` VARCHAR(191) NOT NULL,
    `balance` INTEGER NULL,
    `renew_credits` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet_client` (
    `id` VARCHAR(191) NOT NULL,
    `balance` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wallet_transactions` (
    `id` VARCHAR(191) NOT NULL,
    `wallet_destination` VARCHAR(191) NULL,
    `wallet_from` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,
    `value` INTEGER NOT NULL,
    `status` VARCHAR(100) NULL,
    `created_at` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` DATETIME(0) NULL,
    `by_server` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(100) NULL,

    INDEX `fk_wallet_transactions_user1_idx`(`user_id`),
    INDEX `fk_wallet_transactions_wallet1_idx`(`wallet_destination`),
    INDEX `fk_wallet_transactions_wallet_client1_idx`(`wallet_from`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `fk_clients_wallet_client1` FOREIGN KEY (`wallet_client_id`) REFERENCES `wallet_client`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `fk_order_items_orders1` FOREIGN KEY (`orders_id`) REFERENCES `orders`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `fk_order_items_products1` FOREIGN KEY (`products_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_clients1` FOREIGN KEY (`clients_id`) REFERENCES `clients`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `fk_orders_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `fk_products_category1` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_clients` FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_wallet1` FOREIGN KEY (`wallet_id`) REFERENCES `wallet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `fk_wallet_transactions_user1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `fk_wallet_transactions_wallet1` FOREIGN KEY (`wallet_destination`) REFERENCES `wallet`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `fk_wallet_transactions_wallet_client1` FOREIGN KEY (`wallet_from`) REFERENCES `wallet_client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
