import { Button } from "@/shared/ui";
import { IconPlus } from '@tabler/icons-react';

export function AsideHeader() {
  return (
    <Button variant="outlined" size="small" className="w-full">
      <IconPlus strokeWidth={1.25}/>
      Buy new proxies
    </Button>
  );
}