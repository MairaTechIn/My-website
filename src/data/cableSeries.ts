export const cableSeries = [

{
    slug: "standard-series",

    title: "Standard Series",

    heroImage: "/images/products/standardmicroandtypec.png",

    description:
        "Reliable charging and data transfer cables for everyday use.",

    startingPrice: 25,

    variants: [

    {
    id: "usb-a-to-type-c",
    name: "USB-A to Type-C",
    connector: "Type-C",
    lengths: [
        "1 Meter"
        ],
    current: "2.1A",
    colors: [
            {
            name: "White",
            value: "#ffffff"
            }
        ],
    image: "/images/products/standardtypec.png",       
    price: 25
    },

    {
        id: "usb-a-to-micro-usb",
        name: "USB-A to Micro USB",
        connector: "Micro USB",
        lengths: [
        "1 Meter"
        ],
        current: "2.1A",
        colors: [
            {
                name: "White",
                value: "#ffffff"
            }
        ],
        image: "/images/products/standardmicrousb.jpeg",
        price: 25
    }

],

    pricing: [

        { qty: "1–5", price: 25 },

        { qty: "6–20", price: 23 },

        { qty: "21–50", price: 21 },

        { qty: "51-200", price: 20 }

    ],

    specifications: [
                    {
                        property: "Connector",
                        value: "USB-A to Type-C or Micro USB"
                    },
                    {
                        property: "Charging Specs",
                        value: [
                        {
                            voltage: "5V",
                            current: "2.1A",
                            wattage: "10.5W",
                            useCase: "Standard Phone Charging"
                        },
                        {
                            voltage: "9V",
                            current: "2.1A",
                            wattage: "18.9W",
                            useCase: "Quick Charge 2.0 / 3.0"
                        },
                        {
                            voltage: "12V",
                            current: "2.1A",
                            wattage: "25.2W",
                            useCase: "Fast Charging tablets / routers"
                        },
                        {
                            voltage: "20V",
                            current: "2.1A",
                            wattage: "42W",
                            useCase: "USB PD Laptop charging limit"
                        }
                        ]
                    },
                    {
                        property: "Warranty",
                        value: "6 Months"
                    },
                    {
                        property: "Material",
                        value: "PVC"
                    }
                    ]

},

{
    slug: "golf-series",

    title: "Golf Series",

    heroImage: "/images/products/golfusbtocandip.png",

    description:
        "Premium golf design cables engineered for faster charging, reliable data transfer, and enhanced durability.",

    startingPrice: 57,

    variants: [

    {
    id: "usb-a-to-type-c",
    name: "USB-A to Type-C",
    connector: "Type-C",
    lengths: [
        "1 Meter"
        ],
    current: ["3.1A", [" or "], ["5A"]],
    colors: [
            {
            name: "White",
            value: "#ffffff"
            },
            {
            name: "Red",
            value: "#ff0000"
            },
        ],
    image: "/images/products/USBTOCCOrrect.png",       
    price: 57
    },

    {
        id: "usb-a-to-lightning",
        name: "USB-A to Lightning (iPhone)",
        connector: "Lighning",
        lengths: [
        "1 Meter"
        ],
        current: "3A",
        colors: [
            {
                name: "White",
                value: "#ffffff"
            },
            {
            name: "Red",
            value: "#ff0000"
            },
        ],
        image: "/images/products/USBtoIPcorrect.jpeg",
        price: 57
    }

],

    pricing: [

        { qty: "1–5", price: 66 },

        { qty: "6–20", price: 63 },

        { qty: "21–50", price: 60 },

        { qty: "51-200", price: 57 }

    ],

    specifications: [
                    {
                        property: "Connector",
                        value: "USB-A to Type-C or Micro USB"
                    },
                    {
                        property: "Charging Specs",
                        value: [
                        {
                            voltage: "5V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["15W", " / ", "15.5W", " / ", "25W"],
                            useCase: "Standard Phone Charging"
                        },
                        {
                            voltage: "9V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["27W", " / ", "27.9W", " / ", "45W"],
                            useCase: "Quick Charging"
                        },
                        {
                            voltage: "12V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["36W", " / ", "37.2W", " / ", "60W"],
                            useCase: "Fast Charging tablets / routers"
                        },

                        {
                            voltage: "15V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["45W", " / ", "46.5W", " / ", "75W"],
                            useCase: "Tablets / Laptops"
                        },
                        {
                            voltage: "20V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["60W", " / ", "62W", " / ", "100W"],
                            useCase: "Macbooks / Laptops"
                        }
                        ]
                    },
                    {
                        property: "Warranty",
                        value: "6 Months"
                    },
                    {
                        property: "Material",
                        value: "PVC"
                    }
                    ]

},

{
    slug: "golf-premium",

    title: "Golf Premium Series",

    heroImage: "/images/products/ctocandip.png",

    description:
        "Premium golf design cables engineered for faster charging, reliable data transfer, and enhanced durability.",

    startingPrice: 61,

    variants: [

    {
    id: "usb-c-to-type-c",
    name: "USB-C to Type-C",
    connector: "Type-C",
    lengths: [
        "1 Meter", 
        ],
    current: ["3.1A", [" or "], ["5A"]],
    colors: [
            {
            name: "White",
            value: "#ffffff"
            }
        ],
    image: "/images/products/CtoCtypeCorrect.png",       
    price: 61
    },

    {
        id: "usb-c-to-lightning",
        name: "USB-C to Lightning (iPhone)",
        connector: "Lighning",
        lengths: [
        "1 Meter"
        ],
        current: "3A",
        colors: [
            {
                name: "White",
                value: "#ffffff"
            }
        ],
        image: "/images/products/CtoIphonecorrect.png",
        price: 61
    }

],

    pricing: [

        { qty: "1–5", price: 69 },

        { qty: "6–20", price: 66 },

        { qty: "21–50", price: 64 },

        { qty: "51-200", price: 61 }

    ],

    specifications: [
                    {
                        property: "Connector",
                        value: "USB-C to Type-C or Lightning (iPhone)"
                    },
                    {
                        property: "Charging Specs",
                        value: [
                        {
                            voltage: "5V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["15W", " / ", "15.5W", " / ", "25W"],
                            useCase: "Standard Phone Charging"
                        },
                        {
                            voltage: "9V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["27W", " / ", "27.9W", " / ", "45W"],
                            useCase: "Quick Charging"
                        },
                        {
                            voltage: "12V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["36W", " / ", "37.2W", " / ", "60W"],
                            useCase: "Fast Charging tablets / routers"
                        },

                        {
                            voltage: "15V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["45W", " / ", "46.5W", " / ", "75W"],
                            useCase: "Tablets / Laptops"
                        },
                        {
                            voltage: "20V",
                            current: ["3.0A", " / ", "3.1A"," / ", "5A"],
                            wattage: ["60W", " / ", "62W", " / ", "100W"],
                            useCase: "Macbooks / Laptops"
                        }
                        ]
                    },
                    {
                        property: "Warranty",
                        value: "6 Months"
                    },
                    {
                        property: "Material",
                        value: "PVC"
                    }
                    ]

}

]