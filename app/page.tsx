import { Input } from "@/app/components/ui/input";
import Header from "./components/header";
import { Search } from "lucide-react";
import { Button } from "./components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./components/ui/card";
import { db } from "./lib/prisma";
import BarberShopItem from "./components/barber-shop-item";
import { quickSearchOption } from "./utils/search";
import BookingItem from "./components/booking-item";

export default async function Home() {

  const barberShops = await db.barberShop.findMany({})
  const popularBarberShops = await db.barberShop.findMany({
    orderBy: {
      name: "desc"
    }
  })
  return (
   <div>
      <Header />
      <div className="p-5">
        <h2 className=" text-xl font-bold">Olá Cauã</h2>
        <p>Terça-feira, 06 de agosto.</p>

        {/* Busca */}
        <div className=" mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <Search />
          </Button>
        </div>

        {/* Busca rapida */}
        <div className="mt-6 flex gap-3	overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOption.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image 
              alt={option.title} 
              src={option.imageUrl} 
              width={16} 
              height={16} 
              />
              {option.title}
          </Button>
          ))}
      </div>
    
        <BookingItem />

        <h2 className="mt-6 mb-2 font-bold uppercase text-gray-400 text-xs">
          Agendamentos
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>

        <h2 className="mt-6 mb-2 font-bold uppercase text-gray-400 text-xs">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop} />
          ))}
        </div>

      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400"> 
              © 2023 Copyright <span className="font-bold"> FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
   </div>
  );
}
