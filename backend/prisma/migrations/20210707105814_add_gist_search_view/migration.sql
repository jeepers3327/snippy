CREATE OR REPLACE VIEW "gist_search" AS
  SELECT g1."id", 
        g1."description",
 		u1."username",
        jsonb_agg(to_jsonb(g2.*)) AS "files", 
        (SELECT count(*) FROM "comments" WHERE "gistId" = g1."id") AS "comment_counts" 
  FROM "gists" g1 INNER JOIN "gist_files" g2 ON g1."id" = g2."gistId" 
 		INNER JOIN users u1 ON u1."id" = g1."authorId"
 GROUP BY g1."id", g2."id", u1."username"
