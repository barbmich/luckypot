const db = {
  event: {
    id: 1,
    owner_id: 1,
    name: "My FIRST Potluck",
    date: "2020-12-20 10:30:01", //CHANGE FORMAT ON DB!!!!
    address: "30 Some Road",
    post_code: "M3F6D4",
    city: "Toronto",
    province: "Ontario",
  },
  users: [
    {
      id: 1,
      first_name: "Daniel",
      last_name: "Nascimento",
      email: "daniel@email.com",
      avatar_url: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg",
      present: 1
    },
    {
      id: 2,
      first_name: "Devin",
      last_name: "Coughlin",
      email: "devin@email.com",
      avatar_url:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg",
      present: 0
    },
    {
      id: 3,
      first_name: "Michele",
      last_name: "Barbiero",
      email: "michele@email.com",
      avatar_url:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY256_CR4,0,172,256_AL_.jpg",
      present: 2
    },
  ],
  items: [
    {
      id: 1,
      name: "Lamb",
      category_id: 1,
      event_id: 1,
      assigned: 2,
      recipe_id: null,
    },
    {
      id: 2,
      name: "Ice cream",
      category_id: 2,
      event_id: 1,
      assigned: null,
      recipe_id: null,
    },
    {
      id: 3,
      name: "Chips",
      category_id: 0,
      event_id: 1,
      assigned: 1,
      recipe_id: null,
    },
    {
      id: 4,
      name: "Pizza",
      category_id: 1,
      event_id: 1,
      assigned: 3,
      recipe_id: null,
    },
  ],
  event_messages: [
    {
      id: 1,
      event_id: 1,
      user_id: 2,
      message: "MESSAGE 1 for EVENT 1 !",
      timestamp: "Sun Dec 20 2020 10:30:01 GMT-0500 (Eastern Standard Time)",
    },
    {
      id: 2,
      event_id: 1,
      user_id: 3,
      message: "MESSAGE 2 for EVENT 1 !",
      timestamp: "Sun Dec 20 2020 10:30:20 GMT-0500 (Eastern Standard Time)",
    },
    {
      id: 3,
      event_id: 1,
      user_id: 1,
      message: "MESSAGE 3 for EVENT 1 !",
      timestamp: "Sun Dec 20 2020 10:32:10 GMT-0500 (Eastern Standard Time)",
    },
  ],
};

module.exports = db;
