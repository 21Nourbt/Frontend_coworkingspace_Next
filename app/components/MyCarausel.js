// // // "use client";
// // // import * as React from "react";
// // // import { useState, useEffect } from "react";
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselNext,
// // //   CarouselPrevious,
// // // } from "@/components/ui/carousel";
// // // import SubscriptionCard from "./SubscriptionCard";

// // // export function MyCarrousel(props) {
// // //   const [fetchedData, setFetchedData] = useState([]);

// // //   // useEffect(() => {
// // //   //   async function fetchingSubscriptions() {
// // //   //     try {
// // //   //       const response = await fetch("http://127.0.0.1:3001/api/v1/subscriptions");
// // //   //       if (!response.ok) {
// // //   //         throw new Error("Error in fetching subscriptions");
// // //   //       }
// // //   //       const data = await response.json();
// // //   //       setFetchedData(data.data.subscriptions);
// // //   //     } catch (err) {
// // //   //       console.error(err);
// // //   //     }
// // //   //   }
// // //   //   fetchingSubscriptions();
// // //   // }, []);

// // //   const data = [
// // //     {
// // //         "description": [
// // //             "7/7 Access",
// // //             "Wi-Fi",
// // //             "Kitchen Access",
// // //             "Coffee (extra)"
// // //         ],
// // //         // "_id": "67c455c7e748e9997c35917d",
// // //         "subscriptionType": "daily",
// // //         "price": 10,
// // //         // "__v": 0
// // //     },
// // //     {
// // //         "description": [
// // //             "7/7 Access",
// // //             "Wi-Fi",
// // //             "Kitchen Access",
// // //             "Coffee (extra)"
// // //         ],
// // //         // "_id": "67c45777fbec898408581c7b",
// // //         "subscriptionType": "weekly",
// // //         "price": 50,
// // //         // "__v": 0
// // //     },
// // //     {
// // //         "description": [
// // //             "7/7 Access",
// // //             "Wi-Fi",
// // //             "Kitchen Access",
// // //             "Coffee (extra)"
// // //         ],
// // //         // "_id": "67c4578bfbec898408581c7d",
// // //         "subscriptionType": "monthly (5H)",
// // //         "price": 75,
// // //         // "__v": 0
// // //     },
// // //     {
// // //         "description": [
// // //             "7/7 Access",
// // //             "Wi-Fi",
// // //             "Kitchen Access",
// // //             "Coffee (extra)"
// // //         ],
// // //         // "_id": "67c45796fbec898408581c7f",
// // //         "subscriptionType": "monthly",
// // //         "price": 130,
// // //         // "__v": 0
// // //     }
// // // ]

// // //   return (
// // //     <Carousel opts={{ align: "start" }} className="w-full px-3 sm:px-3">
// // //       <CarouselContent>
// // //         {data.map((sub, index) => (
// // //           <CarouselItem
// // //             key={sub._id || index}
// // //             className="px-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
// // //           >
// // //             <SubscriptionCard sub={sub} />
// // //           </CarouselItem>
// // //         ))}
// // //       </CarouselContent>
// // //       <CarouselPrevious />
// // //       <CarouselNext />
// // //     </Carousel>
// // //   );
// // // }
// // "use client";
// // import * as React from "react";
// // import { useState } from "react";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "@/components/ui/carousel";
// // import SubscriptionCard from "./SubscriptionCard";

// // export function MyCarrousel(props) {
// //   const data = [
// //     {
// //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //       subscriptionType: "daily",
// //       price: 10,
// //     },
// //     {
// //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //       subscriptionType: "weekly",
// //       price: 50,
// //     },
// //     {
// //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //       subscriptionType: "monthly (5H)",
// //       price: 75,
// //     },
// //     {
// //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //       subscriptionType: "monthly",
// //       price: 130,
// //     },
// //   ];

// //   return (
// //     <Carousel opts={{ align: "start" }} className="w-full px-3 sm:px-3 relative">
// //       <CarouselContent>
// //         {data.map((sub, index) => (
// //           <CarouselItem
// //             key={sub._id || index}
// //             className="px-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
// //           >
// //             <SubscriptionCard sub={sub} />
// //           </CarouselItem>
// //         ))}
// //       </CarouselContent>
// //       {/* Style the arrows so they're absolutely positioned and visible */}
// //       <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 bg-white rounded-full p-2 shadow-lg" />
// //       <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-gray-800 bg-white rounded-full p-2 shadow-lg" />
// //     </Carousel>
// //   );
// // }


// "use client";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import SubscriptionCard from "./SubscriptionCard";

// export function MyCarrousel(props) {
//   const [fetchedData, setFetchedData] = useState([]);

//   // useEffect(() => {
//   //   async function fetchingSubscriptions() {
//   //     try {
//   //       const response = await fetch("http://127.0.0.1:3001/api/v1/subscriptions");
//   //       if (!response.ok) {
//   //         throw new Error("Error in fetching subscriptions");
//   //       }
//   //       const data = await response.json();
//   //       setFetchedData(data.data.subscriptions);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   }
//   //   fetchingSubscriptions();
//   // }, []);

//   const data = [
//     {
//         "description": [
//             "7/7 Access",
//             "Wi-Fi",
//             "Kitchen Access",
//             "Coffee (extra)"
//         ],
//         // "_id": "67c455c7e748e9997c35917d",
//         "subscriptionType": "daily",
//         "price": 10,
//         // "__v": 0
//     },
//     {
//         "description": [
//             "7/7 Access",
//             "Wi-Fi",
//             "Kitchen Access",
//             "Coffee (extra)"
//         ],
//         // "_id": "67c45777fbec898408581c7b",
//         "subscriptionType": "weekly",
//         "price": 50,
//         // "__v": 0
//     },
//     {
//         "description": [
//             "7/7 Access",
//             "Wi-Fi",
//             "Kitchen Access",
//             "Coffee (extra)"
//         ],
//         // "_id": "67c4578bfbec898408581c7d",
//         "subscriptionType": "monthly (5H)",
//         "price": 75,
//         // "__v": 0
//     },
//     {
//         "description": [
//             "7/7 Access",
//             "Wi-Fi",
//             "Kitchen Access",
//             "Coffee (extra)"
//         ],
//         // "_id": "67c45796fbec898408581c7f",
//         "subscriptionType": "monthly",
//         "price": 130,
//         // "__v": 0
//     }
// ]

//   return (
//     <Carousel opts={{ align: "start" }} className="w-full px-4 sm:px-6">
//       <CarouselContent>
//         {data.map((sub, index) => (
//           <CarouselItem
//             key={sub._id || index}
//             className="px-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
//           >
//             <SubscriptionCard sub={sub} />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SubscriptionCard from "./SubscriptionCard";

export function MyCarrousel() {
  const data = [
    {
      description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
      subscriptionType: "daily",
      price: 10,
    },
    {
      description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
      subscriptionType: "weekly",
      price: 50,
    },
    {
      description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
      subscriptionType: "monthly (5H)",
      price: 75,
    },
    {
      description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
      subscriptionType: "monthly",
      price: 130,
    },
  ];

  return (
    <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
      {/* 
        1) 'px-4' adds padding on the left/right edges so the first and last cards
           aren't flush with the container edge.
        2) 'gap-4' adds space between each card so their borders are clearly visible.
      */}
      <CarouselContent className="flex px-4">
        {data.map((sub, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <SubscriptionCard sub={sub} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}