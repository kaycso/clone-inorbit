import { db } from ".";
import { goalCompletions, goals } from "./schema";

async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const resultInsertGoals = await db
    .insert(goals)
    .values([
      {
        title: "Estudar Inglês",
        desiredWeeklyFrequency: 4,
      },
      {
        title: "Estudar programação",
        desiredWeeklyFrequency: 5,
      },
      {
        title: "Meditar",
        desiredWeeklyFrequency: 1,
      },
    ])
    .returning();

  await db
    .insert(goalCompletions)
    .values([
      { goalId: resultInsertGoals[0].id },
      { goalId: resultInsertGoals[1].id },
    ]);
}

seed();
