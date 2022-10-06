/*
  Warnings:

  - Changed the type of `type` on the `prices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `prices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `purchases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `size` on the `purchases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "prices" DROP COLUMN "type",
ADD COLUMN     "type" "types" NOT NULL,
DROP COLUMN "size",
ADD COLUMN     "size" "sizes" NOT NULL;

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "type",
ADD COLUMN     "type" "types" NOT NULL,
DROP COLUMN "size",
ADD COLUMN     "size" "sizes" NOT NULL;
