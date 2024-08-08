import { BarberShop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface BarberShopItemProps {
  barberShop: BarberShop
}

const BarberShopItem = ({ barberShop }: BarberShopItemProps) => {
  return ( 
    <>
      <Card className="min-w-[167px] rounded-2xl">
        <CardContent className="p-0 pt-1 px-1 ">

          <div className=" relative h-[159px] w-full">
           <Image 
            alt={barberShop.name}
            src={barberShop.imageUrl}
            fill
            className="object-cover rounded-2xl"
           />

           <Badge className=" absolute left-2 top-2 space-x-1" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
           </Badge>
          </div>

          <div className="py-3 px-1">
            <h3 className="truncate font-semibold">{barberShop.name}</h3>
            <h3 className="truncate text-sm text-gray-400">{barberShop.address}</h3>
            <Button variant="secondary" className="w-full mt-3">Reserva</Button>
          </div>
        </CardContent>
      </Card>
    </>
   );
}
 
export default BarberShopItem;