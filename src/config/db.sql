CREATE TABLE "medication"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "lab" TEXT NOT NULL,
    "registration" BIGINT INTEGER NOT NULL,
    "presentation" TEXT NOT NULL,
    "manufacturerPrice" DECIMAL(10,2) NOT NULL,
    "consumerPrice" DECIMAL(10,2) NOT NULL
);