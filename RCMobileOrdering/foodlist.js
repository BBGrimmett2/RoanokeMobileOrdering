const masterMenu = [
    {
        name: "default item",
        type: "Other",
        price: 0,
        description: "This is a description. It is very descriptive. It definitely makes you want to order this food, doesn't it? Order it now, coward.",
        itemImageFile: "https://drive.google.com/uc?id=1M-jeRMWEN_LOkgbRGiCF7hO6bOtlHXJ9",
        nFactsPicFile: "https://drive.google.com/uc?id=1h_KM4ED8aKJOKJ_2t8WdokanCMQf76oA",
        custObj: [
            {number: 0, option: "yes"},
            {number: 1, option: "no"},
            {number: 2, option: "make it so"},
        ]
    },
    {
        name: "the bestest drink",
        type: "Cup",
        price: 36,
        description: "This will *actually* be the best thing you've ever drank. 10/10 dentists recommend drinking this*. Order it now, coward. *they actually don't, I lied. Pls don't sue us, we're poor college students. :,(",
        itemImageFile: "https://drive.google.com/uc?id=1VTXwO0it8CyEm0RvvpzV77Mv4-M9n7Br",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    },
    {
        name: "the bestest food",
        type: "Bag",
        price: 76,
        description: "When we say this is the *bestest* food, we mean it. What's that? You want to know what that means? Order it, find out.",
        itemImageFile: "https://drive.google.com/uc?id=1TjtSR5xt3m28XvLejOdpnBI5ppYw9H6U",
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
        description: "Other people may claim to have the best bowl, but have they claimed to have the bestest bowl? I didn't think so. That's because WE have the bestest bowl.",
        itemImageFile: "https://drive.google.com/uc?id=1KFgayFiUdp4eCmC4h5-A0vK4xZBYRUOv",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    },
    {
        name: "an ok soup",
        type: "Bowl",
        price: 12,
        description: "This is a soup. It is the most basic soup you could ever imagine.",
        itemImageFile: "https://drive.google.com/uc?id=1xdl4avfiS85bq0FHCr_J3662WpXTDMhe",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    },
    {
        name: "baggiest of foods",
        type: "Bag",
        price: 9000,
        description: "Winner of the 2022 competition of baggiest foods. Recommened by 11/10 of the world's leading bagologists.",
        itemImageFile: "https://drive.google.com/uc?id=1hPG_fwgOrqkvNNQEu7hXMFfq5HU2_tL7",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
            {number: 4, option: "even more bag"},
        ]
    },
    {
        name: "drinkiest of drinks",
        type: "Cup",
        price: 175,
        description: "Drink it, I promise it's good.",
        itemImageFile: "https://drive.google.com/uc?id=1X5sov5SfOaQSpkSXgtKZ0DEP_W9h9vsZ",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "add so much flavor"},
            {number: 1, option: "make it so colorful"},
            {number: 2, option: "make it the tastiest"},
            {number: 3, option: "extra super large"},
        ]
    },
    {
        name: "str8 vodka",
        type: "Cup",
        price: 3,
        description: "this is a shot of vodka.",
        itemImageFile: "https://drive.google.com/uc?id=11MEU2WCUKsJXENQsmlkJczOa4lgNhyrE",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "another shot"},
            {number: 1, option: "10% more alcohol"},
            {number: 2, option: "1000% more alcohol"},
            {number: 3, option: "you might spontaneously combust after drinking this"},
        ]
    },
    {
        name: "this is just a bowl",
        type: "Bowl",
        price: 1,
        description: "this is just a bowl, like the name says. Just your average, run of the mill bowl. There is DEFINITELY nothing at all suspicious about this bowl.",
        itemImageFile: "https://drive.google.com/uc?id=1dvOLso6l5ZEmT5xJAdHFfUtgsjc_GNg-",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "even more bowl"},
            {number: 1, option: "bowlier?"},
            {number: 2, option: "make it the bowlest bowl to ever bowl in the history of bowls"},
        ]
    },
    {
        name: "Cactus Juice",
        type: "Cup",
        price: 10,
        description: "Drink cactus juice. It'll quench ya. Nothing is quenchier. It's the quenchiest!",
        itemImageFile: "https://drive.google.com/uc?id=1k3hCk6AEI_x0ol_Z4kaGpEUUK9euHcIC",
        nFactsPicFile: "https://drive.google.com/uc?id=1RSimjExQMIZlu4CXg4nR4G_HQL7HrJpm",
        custObj: [
            {number: 0, option: "quenchier"},
            {number: 1, option: "less quenchy"},
        ]
    },
    {
        name: "Mystery ???",
        type: "Other",
        price: 10,
        description: "Order it now, coward.",
        itemImageFile: "https://drive.google.com/uc?id=1y2iGOyDSU-KQqpb2QdDEdb0-V8z-fmKW",
        nFactsPicFile: "https://drive.google.com/uc?id=1I3MkETA34idwdTMEtXfdRCGS0ZYkLqou",
        custObj: [
            {number: 0, option: "?"},
            {number: 1, option: "??"},
            {number: 2, option: "???"},
            {number: 3, option: "????"},
            {number: 4, option: "?????"},
        ]
    },
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