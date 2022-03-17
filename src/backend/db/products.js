import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Jade Plant",
    description:
      "Jade plants (Crassula ovata) are an especially interesting succulent due to its unique bush-like structure that makes it suitable to trim as a bonsai. And under the right conditions, you might even see pink flower blossoms! These plants might develop red or yellowish tint with too much sunlight, but they require very little water in the summertime and even less in winter.",
    price: "699",
    categoryName: "Indoor Plant",
    plantType: "succulent",
    img: "https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg",
  },
  {
    _id: uuid(),
    title: "String Of Pearls",
    description:
      "What a unique houseplant! Guests are sure to comment on the grace of your beautiful Senecio rowleyanus as its delicate tendrils of round beads overflow its planter. These are great for hanging or draping over a pedestal, preferably in a location just out of the reach of direct sunlight. Plant in loose cactus soil and be careful to avoid overwatering for best results.",
    price: "899",
    categoryName: "Indoor Plant",
    plantType: "succulent",
    img: "https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg",
  },
  {
    _id: uuid(),
    title: "Pothos Plant",
    description:
      " Epipremnum aureum is an overwhelmingly popular houseplant for good reason. Supposedly, its other nickname of “devil’s ivy” comes from its hardiness and the perception that it is nearly impossible to kill. The vines can grow almost impossibly long, making them a great choice for suspension from tall ceilings. Consider this plant if you need something for low or indirect light conditions. Water when dry.",
    price: "699",
    categoryName: "Outdoor Plant",
    plantType: "Evergreen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmsWaw_vIJSZMcYul2VQS2zWeVdW-oJvijaOARcY8aoqBP1p-TIwBi6J_06bkQXJiL4E&usqp=CAU",
  },
  {
    _id: uuid(),
    title: "Dragon Tree",
    description:
      "When it comes to tree-like houseplants, it’s hard to find low-maintenance options, but Dracaena marginata is the exception to the rule. You can often wait until the soil is dry to water it, so it’s great for offices and far-off corners of the house that might not get much attention from caregivers. Bright indirect light and constant temperature will help this plant grow its strongest. Be prepared with several sizes of planters to accommodate its fast-growing root system.",
    price: "699",
    categoryName: "Office Plant",
    plantType: "Broadleaf evergreen",
    img: "https://cdn.shopify.com/s/files/1/0317/0687/3992/products/232-large_default.jpg?v=1580435931",
  },
  {
    _id: uuid(),
    title: "Peace Lily",
    description:
      "Sometimes flowering plants prove the most challenging to keep healthy, but certain lilies in the Spathiphyllum genus (the peace lily family) are on the more easygoing side. Peace lilies are forgiving plants but seem to do best in indirect sunlight with access to shade. Wait to water the plant until you notice a bit of drooping in the leaves for best results. These plants need reliable drainage. Consider planting in a simple pot to let the beautiful flowers take center stage.",
    price: "999",
    categoryName: "Outdoor Plant",
    plantType: "Flowering tropical plant",
    img: "https://d3cif2hu95s88v.cloudfront.net/blog/wp-content/uploads/2021/05/04150624/Spider-plant.jpg",
  },
  {
    _id: uuid(),
    title: "Swiss Cheese Plant",
    description:
      "The scientific name Monstera deliciosa refers, in part, to the edible pineapple-like fruit this rainforest plant can provide – just make sure to read about how to ripen the fruits properly to avoid irritation upon consuming. These stunning large-leafed plants make a great statement piece and add warm, tropical appeal to any interior.",
    price: "499",
    categoryName: "Indoor Plant",
    plantType: "Evergreen vine",
    img: "https://pyxis.nymag.com/v1/imgs/4a7/29b/4ef2f518834dd81d8ceb374caa54fd5171-22-plant-gifts.rsquare.w700.jpg",
  },
  {
    _id: uuid(),
    title: "Fiddle Leaf Fig",
    description:
      "Ficus lyrata, or the Fiddle Leaf Fig, is a hardy tree that can grow up to 50 feet tall in its native tropical rainforest environment, but makes a lovely indoor tree for home decorating purposes. Be prepared to upgrade the size of the planter if you want your Ficus to grow nice and tall, which they are happy to do! This plant does best in bright indirect light and water once the top of the soil is dry and the leaves soften.",
    price: "1099",
    categoryName: "Indoor Plant",
    plantType: "Broadleaf evergreen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmsWaw_vIJSZMcYul2VQS2zWeVdW-oJvijaOARcY8aoqBP1p-TIwBi6J_06bkQXJiL4E&usqp=CAU",
  },
  {
    _id: uuid(),
    title: "Rubber Plant",
    description:
      "Rubber plants love bright indirect sunlight, moist soil, and high humidity. The waxy leaves really catch the light for a beautiful presentation. These trees – also known by their proper name of Ficus elastica – tend to grow quite tall unless pruned so they’re a great candidate for beautiful spacious planters.",
    price: "1200",
    categoryName: "Indoor Plant",
    plantType: "Flowering plant",
    img: "https://cdn.shopify.com/s/files/1/0317/0687/3992/products/232-large_default.jpg?v=1580435931",
  },
];
