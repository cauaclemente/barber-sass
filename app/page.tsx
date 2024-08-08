import { Input } from "@/app/components/ui/input";
import Header from "./components/header";
import { Search } from "lucide-react";
import { Button } from "./components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Avatar } from "@/app/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
   <div>
      <Header />
      <div className="p-5">
        <h2 className=" text-xl font-bold">Olá Cauã</h2>
        <p>Terça-feira, 06 de agosto.</p>

        <div className=" mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <Search />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banne01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* Div da esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia José</p>
              </div>
            </div>
            {/* Div da direita */}
            <div className=" flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className=" text-sm">Agosto</p>
              <p className="text-2xl"> 05 </p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

      </div>
   </div>
  );
}
