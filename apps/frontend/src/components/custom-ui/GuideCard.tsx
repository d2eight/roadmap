import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

export function GuideCard({ guide }: { guide: GuideModel }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{guide.title ? guide.title : guide.prompt}</CardTitle>
        <CardDescription className="truncate">
          {guide.description ? guide.description : ''}
        </CardDescription>
        <CardAction>
          <Button variant="secondary">Destructive</Button>
        </CardAction>
      </CardHeader>
      <CardContent>123</CardContent>
      <CardFooter>123</CardFooter>
    </Card>
  );
}
