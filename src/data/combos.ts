export interface Combo {
  id: number;
  name: string;
  description: string;
  price: number;
  pieces: number;
  image: string;
  stock: number;
}

export const combos: Combo[] = [
  {
    id: 1,
    name: "Naya Selection",
    description: "Uma introdução perfeita à nossa arte. Peças selecionadas do dia.",
    price: 1150,
    pieces: 20,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIMxOia3RAfa0lXZl41LZww9gibxfc-c1ePxP6gWuSqtqhaKxaWgBlP3t1klutuH8XDgMlMePUTBatLUu_Fn7H0BomrwraeA_m780x9TmahdvxYiA6LS_N47sNDDQjHWpc_MCDM1_u6Ffa2LFhHuDjZY5hPYM6n-DOnNe4ifwUrBd2K2gFG0g5blE3xYi-edebnYzjja35mtfuCP_HdaMqp3LCvoaibkd2mpo5wMvpKdpVX2janrdAe7RzTxXuf9Zheg8uB9hnZieR",
    stock: 4,
  },
  {
    id: 2,
    name: "Signature Box",
    description: "O equilíbrio ideal entre clássicos e criações contemporâneas.",
    price: 1350,
    pieces: 24,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3JtWLH4dkThdQ-zUaJEhTT_7-8mH_BaRzAcAr63kSk68BNKDnMEo3rGzeV9K0ATKLcb2SSJ3J_lxDBgeH1U1ATyP3dVcA-_s3vnwdbe4bVhu8a_BX5OE3UGzy9x9RJjafh4xUn77FllEpwr_3MD7NwS7-d8yTWJSmtjyAm2kb8AHWYyG9Pml8nX6GHYyQmKMswLZmLqxUt0eUeYqqsc6VxGWfoJzZCdQn5ziLhdDnyERS5UZQPMDYzInl4pCf6grRApyCsIuCg9og",
    stock: 2,
  },
  {
    id: 3,
    name: "Zen Experience",
    description: "Para compartilhar momentos especiais com a melhor seleção.",
    price: 1750,
    pieces: 32,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7RxlnxIMDBMlLK8nxSsHbQS1EHVCRq0_S2qDLJvAebKxBx3cslHDoq2lVVL25KqUG9OkpU_kIAQzt8O2Wyrbs2J9M02nK3fX8FrCBPOn3L5B17zbqDxTRVJ82I3_xTBU9pm2BRZCEF4LWGEPK3lC2nKWGCqCkuB5TZy0fng8j_i0ryui1ESP_udxwWDQ36-qHwES7r205xRJl0qGz9JctPEizmARB6CzlqqzeRrxMQq3h5gMedngi2j_jT8hIfEirfoDMr5wIWSt6",
    stock: 5,
  },
  {
    id: 4,
    name: "Master Omakase",
    description: "O ápice da nossa culinária. Uma jornada completa de sabores.",
    price: 2300,
    pieces: 40,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlIHXiLy5hG2VimQdf-ZFftsK1bL5bR9j2wF-WDzNtSheNig91032h8ZzzbmOxVrGWb_cDQPW3LqR4HM9VnzFwaYW2XHXBGUmmOsJFgRgrY0uU3n-SeDeZ4WHaffpvlOELHbEBrS9LOEWU0QDPKyL0UUfAuTVxu6jvhwwG5lJHSzSiEIrkjRWQqF1Znbnbb00VYGLz-8ITUqJpHrBNNFdWcpMNc7mcY_O9rz-nApioBV9KQBByo6nBbhHywlTdG-zTppr96pFv7PsE",
    stock: 1,
  },
];
