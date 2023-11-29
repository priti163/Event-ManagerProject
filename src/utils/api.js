const mockEvents = [
  {
    title: "Tech Conference 2023",
    date: "2023-03-15",
    description: "A conference showcasing the latest in tech advancements.",
  },
  {
    title: "Local Art Exhibition",
    date: "2023-04-07",
    description: "An exhibition featuring local artists and their work.",
  },
  {
    title: "Charity Marathon",
    date: "2023-05-22",
    description: "A marathon event to raise funds for charity.",
  },
  {
    title: "Summer Music Festival",
    date: "2023-06-30",
    description: "An outdoor music festival celebrating summer vibes.",
  },
  {
    title: "Culinary Workshop",
    date: "2023-07-14",
    description:
      "A workshop for food enthusiasts to learn new recipes and techniques.",
  },
];

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockEvents), 500);
  });
};

export const addEvent = (newEvent) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockEvents.push(newEvent);
      resolve(newEvent);
    }, 500);
  });
};
