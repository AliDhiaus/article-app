export const dummyUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Regular User",
    email: "user@example.com",
    role: "user",
  },
];

export const dummyCategories = [
    {
        "id": "",
        "userId": "d80e40ed-9236-49d8-b4b8-d6f1ffaae868",
        "name": "Management",
        "createdAt": "2025-05-10T18:38:02.392Z",
        "updatedAt": "2025-05-10T18:38:02.392Z"
    },
    {
        "id": "01c7c09b-8eea-4edd-b863-3240650eaa39",
        "userId": "a2c0a1a4-8333-4799-972e-33ae547456fd",
        "name": "Dialogue",
        "createdAt": "2025-09-06T09:05:37.384Z",
        "updatedAt": "2025-09-07T12:03:33.683Z"
    },
    {
        "id": "11e3bbf9-1441-4cc9-9177-f56f45335218",
        "userId": "1204cfdc-0235-4da8-91bc-2cbaebcbd8db",
        "name": "Cantik",
        "createdAt": "2025-09-07T12:04:53.550Z",
        "updatedAt": "2025-09-18T08:19:24.861Z"
    },
    {
        "id": "142cd0b5-c4cd-444e-8ef0-9edf388d2e31",
        "userId": "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
        "name": "yo ayo",
        "createdAt": "2025-09-18T07:14:24.207Z",
        "updatedAt": "2025-09-18T07:14:24.207Z"
    },
    {
        "id": "26e57a67-e7ba-4815-8128-18d44b7b90c5",
        "userId": "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
        "name": "Sepuh Turun Gunung Arjuna",
        "createdAt": "2025-09-05T03:34:57.904Z",
        "updatedAt": "2025-09-05T10:30:24.205Z"
    },
    {
        "id": "37b4c33e-0154-430b-8c10-ff56c9fc1858",
        "userId": "b16f52c3-2cd0-405b-954e-5c7075ce8106",
        "name": "Alam",
        "createdAt": "2025-09-02T03:22:05.274Z",
        "updatedAt": "2025-09-02T03:22:05.274Z"
    },
    {
        "id": "3fb161c2-ac77-41ec-8ad3-d569ab6c13b1",
        "userId": "a2c0a1a4-8333-4799-972e-33ae547456fd",
        "name": "cobacoba",
        "createdAt": "2025-09-06T08:41:34.103Z",
        "updatedAt": "2025-09-06T08:41:34.103Z"
    },
    {
        "id": "4537cbb4-8f1d-41ba-8c35-347ce4263510",
        "userId": "759d1f32-5192-4aba-99c9-57f9b811e584",
        "name": "news ",
        "createdAt": "2025-09-04T03:41:43.520Z",
        "updatedAt": "2025-09-05T10:34:36.197Z"
    },
    {
        "id": "937e196e-8351-43db-8c0e-deb57e15c252",
        "userId": "759d1f32-5192-4aba-99c9-57f9b811e584",
        "name": "free 911",
        "createdAt": "2025-09-12T02:12:03.433Z",
        "updatedAt": "2025-09-12T02:12:03.433Z"
    },
    {
        "id": "cd6d3027-c946-47e0-9165-5c229880a8b9",
        "userId": "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
        "name": "hahahah",
        "createdAt": "2025-09-18T08:19:33.204Z",
        "updatedAt": "2025-09-18T08:19:33.204Z"
    }
];

export const dummyArticles = [
  {
    id: "092e8f29-3b3e-4855-ba29-41549361f053",
    userId: "728264a0-766b-4d08-ae90-d9d6bf69b237",
    categoryId: "11e3bbf9-1441-4cc9-9177-f56f45335218",
    title: "bis apa ",
    content: "bisa bisaan",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1758181445459-pngtree-ir-soekarno-proclaimer-hero-of-the-independence-republic-indonesia-blitar-png-image_8616724.png",
    createdAt: "2025-09-13T07:19:44.655Z",
    updatedAt: "2025-09-18T07:44:05.876Z",
    category: {
      id: "11e3bbf9-1441-4cc9-9177-f56f45335218",
      userId: "1204cfdc-0235-4da8-91bc-2cbaebcbd8db",
      name: "Cantik",
      createdAt: "2025-09-07T12:04:53.550Z",
      updatedAt: "2025-09-18T08:19:24.861Z",
    },
    user: {
      id: "728264a0-766b-4d08-ae90-d9d6bf69b237",
      username: "www",
    },
  },
  {
    id: "3950ac7b-2938-47f2-a606-6d3c2f60bcdb",
    userId: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
    categoryId: "11e3bbf9-1441-4cc9-9177-f56f45335218",
    title: "yang ",
    content: "kamu makan apa",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1758172819464-Gemini_Generated_Image_rsu02wrsu02wrsu0.png",
    createdAt: "2025-09-18T04:36:37.852Z",
    updatedAt: "2025-09-18T05:20:19.647Z",
    category: {
      id: "11e3bbf9-1441-4cc9-9177-f56f45335218",
      userId: "1204cfdc-0235-4da8-91bc-2cbaebcbd8db",
      name: "Cantik",
      createdAt: "2025-09-07T12:04:53.550Z",
      updatedAt: "2025-09-18T08:19:24.861Z",
    },
    user: {
      id: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
      username: "Ali Dhiaus",
    },
  },
  {
    id: "3b472c11-d356-4a6a-8734-1c9e8a4d8ee7",
    userId: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
    categoryId: "26e57a67-e7ba-4815-8128-18d44b7b90c5",
    title: "coba aja",
    content: "kakask",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1758172238328-pngtree-ir-soekarno-proclaimer-hero-of-the-independence-republic-indonesia-blitar-png-image_8616724.png",
    createdAt: "2025-09-18T05:10:38.465Z",
    updatedAt: "2025-09-18T05:10:38.465Z",
    category: {
      id: "26e57a67-e7ba-4815-8128-18d44b7b90c5",
      userId: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
      name: "Sepuh Turun Gunung Arjuna",
      createdAt: "2025-09-05T03:34:57.904Z",
      updatedAt: "2025-09-05T10:30:24.205Z",
    },
    user: {
      id: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
      username: "Ali Dhiaus",
    },
  },
  {
    id: "4e96e90f-01cb-4baa-9f5a-9b41c52e1c14",
    userId: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
    categoryId: "11e3bbf9-1441-4cc9-9177-f56f45335218",
    title: "cobaajajajaja",
    content: "asdkalmn",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1758172347168-Gemini_Generated_Image_xc07sxxc07sxxc07.png",
    createdAt: "2025-09-18T05:12:27.335Z",
    updatedAt: "2025-09-18T07:54:47.740Z",
    category: {
      id: "11e3bbf9-1441-4cc9-9177-f56f45335218",
      userId: "1204cfdc-0235-4da8-91bc-2cbaebcbd8db",
      name: "Cantik",
      createdAt: "2025-09-07T12:04:53.550Z",
      updatedAt: "2025-09-18T08:19:24.861Z",
    },
    user: {
      id: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
      username: "Ali Dhiaus",
    },
  },
  {
    id: "66365fbe-73e9-4cb1-9797-2dde35790b88",
    userId: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
    categoryId: "37b4c33e-0154-430b-8c10-ff56c9fc1858",
    title: "asd",
    content: "asd",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1758182123773-Gemini_Generated_Image_njhlgdnjhlgdnjhl.png",
    createdAt: "2025-09-18T05:05:51.954Z",
    updatedAt: "2025-09-18T07:55:23.921Z",
    category: {
      id: "37b4c33e-0154-430b-8c10-ff56c9fc1858",
      userId: "b16f52c3-2cd0-405b-954e-5c7075ce8106",
      name: "Alam",
      createdAt: "2025-09-02T03:22:05.274Z",
      updatedAt: "2025-09-02T03:22:05.274Z",
    },
    user: {
      id: "fdd8f83f-e93f-4eb3-97db-c1999a747de2",
      username: "Ali Dhiaus",
    },
  },
  {
    id: "70e024b4-4e38-40f8-a8eb-80186ef3da16",
    userId: "759d1f32-5192-4aba-99c9-57f9b811e584",
    categoryId: "937e196e-8351-43db-8c0e-deb57e15c252",
    title: "free 916",
    content: "<p>content</p>",
    imageUrl: null,
    createdAt: "2025-09-12T02:16:23.717Z",
    updatedAt: "2025-09-16T01:49:06.688Z",
    category: {
      id: "937e196e-8351-43db-8c0e-deb57e15c252",
      userId: "759d1f32-5192-4aba-99c9-57f9b811e584",
      name: "free 911",
      createdAt: "2025-09-12T02:12:03.433Z",
      updatedAt: "2025-09-12T02:12:03.433Z",
    },
    user: {
      id: "759d1f32-5192-4aba-99c9-57f9b811e584",
      username: "ipsum admin",
    },
  },
  {
    id: "7c8b69e5-4f2e-456c-a18d-e141a9411083",
    userId: "5e7cd170-c455-45e3-a2ad-2bbfc1a5ef26",
    categoryId: "01c7c09b-8eea-4edd-b863-3240650eaa39",
    title: "Artikel no 2",
    content: "<p>tes tes contoh</p>",
    imageUrl: null,
    createdAt: "2025-09-16T05:16:28.703Z",
    updatedAt: "2025-09-16T05:16:28.703Z",
    category: {
      id: "01c7c09b-8eea-4edd-b863-3240650eaa39",
      userId: "a2c0a1a4-8333-4799-972e-33ae547456fd",
      name: "Dialogue",
      createdAt: "2025-09-06T09:05:37.384Z",
      updatedAt: "2025-09-07T12:03:33.683Z",
    },
    user: {
      id: "5e7cd170-c455-45e3-a2ad-2bbfc1a5ef26",
      username: "admintest2",
    },
  },
  {
    id: "8003f06a-10d2-4217-b3c6-10d5d9c4f983",
    userId: "5e7cd170-c455-45e3-a2ad-2bbfc1a5ef26",
    categoryId: "01c7c09b-8eea-4edd-b863-3240650eaa39",
    title: "Artikel no 2",
    content: "<p>tes tes contoh</p>",
    imageUrl: null,
    createdAt: "2025-09-16T05:16:38.622Z",
    updatedAt: "2025-09-16T05:16:38.622Z",
    category: {
      id: "01c7c09b-8eea-4edd-b863-3240650eaa39",
      userId: "a2c0a1a4-8333-4799-972e-33ae547456fd",
      name: "Dialogue",
      createdAt: "2025-09-06T09:05:37.384Z",
      updatedAt: "2025-09-07T12:03:33.683Z",
    },
    user: {
      id: "5e7cd170-c455-45e3-a2ad-2bbfc1a5ef26",
      username: "admintest2",
    },
  },
  {
    id: "8b8ae3ce-13e7-4c4f-812e-4874c6e1e875",
    userId: "5e7cd170-c455-45e3-a2ad-2bbfc1a5ef26",
    categoryId: "37b4c33e-0154-430b-8c10-ff56c9fc1858",
    title: "judul keberapa gk tau",
    content: "<p>testing content lagi</p>",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1758001634989-stacked-waves-haikei.png",
    createdAt: "2025-09-16T05:47:15.511Z",
    updatedAt: "2025-09-16T05:47:15.511Z",
    category: {
      id: "37b4c33e-0154-430b-8c10-ff56c9fc1858",
      userId: "b16f52c3-2cd0-405b-954e-5c7075ce8106",
      name: "Alam",
      createdAt: "2025-09-02T03:22:05.274Z",
      updatedAt: "2025-09-02T03:22:05.274Z",
    },
    user: {
      id: "5e7cd170-c455-45e3-a2ad-2bbfc1a5ef26",
      username: "admintest2",
    },
  },
  {
    id: "a09ae01d-466b-412a-962c-0099bbd0ffd4",
    userId: "4030adeb-c528-4689-94ff-a292c09bd675",
    categoryId: "01c7c09b-8eea-4edd-b863-3240650eaa39",
    title: "22222",
    content:
      "2222 123123 123 1213 123 123 lkhbasduibaS IULDBAS UILDgbasLI UdghsAILU GHSADliAUSHGD suaiLgdh ILUAYSDG ilasgd auiosgd ausigdasiudgaiuRGHAUDh; saoiudhA SIODhA:OISdhoaishD oiASHDoia;HDoi;aSHD ;oh3o8QO*E  hado iahs ioashd aso idhasdoi hasd8 oh23r [238 ryhrpa89DFY ASP;D hasp:o8DHq#{p* RYHa{)wdU as0[DHJa *ohd;OAS",
    imageUrl:
      "https://s3.sellerpintar.com/articles/articles/1757312447333-01c209e18fd7a17c9c5dcc7a4e03db0e.jpg",
    createdAt: "2025-09-08T05:34:16.234Z",
    updatedAt: "2025-09-08T06:20:47.420Z",
    category: {
      id: "01c7c09b-8eea-4edd-b863-3240650eaa39",
      userId: "a2c0a1a4-8333-4799-972e-33ae547456fd",
      name: "Dialogue",
      createdAt: "2025-09-06T09:05:37.384Z",
      updatedAt: "2025-09-07T12:03:33.683Z",
    },
    user: {
      id: "4030adeb-c528-4689-94ff-a292c09bd675",
      username: "Admin12",
    },
  },
];

export const TabelCategory = [
  { id: 1, name: "Technology", createdAt: "2025-09-05" },
  { id: 2, name: "Health", createdAt: "2025-09-05" },
  { id: 3, name: "Education", createdAt: "2025-09-05" },
];
