-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "nickname" STRING,
    "name" STRING,
    "picture" STRING,
    "givenName" STRING,
    "familyName" STRING,
    "email" STRING NOT NULL,
    "role" STRING NOT NULL DEFAULT E'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
