import {IconMail} from "@tabler/icons-react";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className={'flex justify-center items-center h-dvh gap-5'}>
            <IconMail strokeWidth={0.5}/>
            <Button>Button</Button>
        </div>
    );
}