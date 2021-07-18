-- CreateTable
CREATE TABLE "stargazers" (
    "userId" TEXT NOT NULL,
    "gistId" TEXT NOT NULL,

    PRIMARY KEY ("userId","gistId")
);

-- AddForeignKey
ALTER TABLE "stargazers" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stargazers" ADD FOREIGN KEY ("gistId") REFERENCES "gists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
