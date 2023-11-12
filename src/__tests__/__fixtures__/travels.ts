import { tour } from "./tours";

export const travel: TravelAttributes = {
  id: "12345",
  name: "My Travel",
  description: "This is my travel",
  slug: "my-travel",
  number_of_days: 3,
  tours: [tour],
  is_public: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};
