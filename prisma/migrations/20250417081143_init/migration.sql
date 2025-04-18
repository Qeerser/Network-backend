-- CreateTable
CREATE TABLE "PrivateChat" (
    "initiatorId" UUID NOT NULL,
    "recipientId" UUID NOT NULL,
    "lastMessageId" UUID,

    CONSTRAINT "PrivateChat_pkey" PRIMARY KEY ("initiatorId","recipientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrivateChat_lastMessageId_key" ON "PrivateChat"("lastMessageId");

-- CreateIndex
CREATE INDEX "PrivateChat_initiatorId_idx" ON "PrivateChat"("initiatorId");

-- CreateIndex
CREATE INDEX "PrivateChat_recipientId_idx" ON "PrivateChat"("recipientId");

-- CreateIndex
CREATE UNIQUE INDEX "PrivateChat_initiatorId_recipientId_key" ON "PrivateChat"("initiatorId", "recipientId");

-- AddForeignKey
ALTER TABLE "PrivateChat" ADD CONSTRAINT "PrivateChat_initiatorId_fkey" FOREIGN KEY ("initiatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateChat" ADD CONSTRAINT "PrivateChat_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrivateChat" ADD CONSTRAINT "PrivateChat_lastMessageId_fkey" FOREIGN KEY ("lastMessageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
