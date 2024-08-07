import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return ( 
    <>
      <Card>
        <CardContent className="p-5 flex flex-row items-center justify-between">
          <Image alt="logo" src='/logo.png' height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
        </CardContent>
      </Card>
    </>
   );
}
 
export default Header;