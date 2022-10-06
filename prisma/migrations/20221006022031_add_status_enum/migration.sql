/*
  Warnings:

  - Changed the type of `status` on the `purchases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('producing', 'shipping', 'delivered');

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "status",
ADD COLUMN     "status" "status" NOT NULL;
