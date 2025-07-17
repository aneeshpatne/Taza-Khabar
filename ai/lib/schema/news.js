import { pgTable, uuid, integer, text, timestamp } from "drizzle-orm/pg-core";
export const news = pgTable("news", {
  id: integer("id").primaryKey(),
  modifiedAt: timestamp("modified_at").defaultNow(),
  content: text("content").notNull(),
});
