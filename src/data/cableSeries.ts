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
    current: "3A",
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
        current: "2.4A",
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

}

]