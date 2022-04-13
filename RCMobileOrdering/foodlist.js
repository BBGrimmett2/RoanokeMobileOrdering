const masterMenu = [
    {
        name: "Smoothie",
        type: "Cup",
        price: "$3.98",
        description: "A delicious mix of a variety of fruit flavored liquids, all hand squeezed somewhere. Trust us.",
        itemImageFile: require('../assets/Smoothie.png'),
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    },
    {
        name: "Chicken Sandwich",
        type: "Bag",
        price: "$3.99",
        description: "This is the breast of a chicken slabbed and topped with bread.",
        itemImageFile: require('../assets/Chicken_Sandwich.png'),
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    },
    {
        name: "the bestest bowl",
        type: "Bowl",
        price: 56,
        description: "This is a description. It is very descriptive. It definitely makes you want to order this food, doesn't it? Order it now, coward.",
        itemImageFile: "https://drive.google.com/uc?id=196FrjyjzWVOqjmwVIjiEW1UrZBdxYY5X",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    }
];

/*const masterMenu = {
    fooditems: {
        wrap1: {
            type: "Bag",
            description: "good wrap 1",
            price: 10
        },
        wrap2: {
            type: "Bag",
            description: "good wrap 2",
            price: 10
        },
        flatbread: {
            type: "Bag",
            description: "good flatbread",
            price: 12
        },
        smoothie: {
            type: "Cup",
            description: "good smoothie",
            price: 27
        },
        beverage: {
            type: "Cup",
            description: "good beverage",
            price: 2
        },
        ricebowl: {
            type: "Bowl",
            description: "good rice",
            price: 7
        },
        salad: {
            type: "Bowl",
            description: "good green",
            price: 9
        }
    }
};*/

export default masterMenu;