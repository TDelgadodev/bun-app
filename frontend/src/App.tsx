import { useState } from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  return (
    <>
      <Card className="w-[450px m-auto]">
        <CardHeader>
          <CardTitle>Total spent</CardTitle>
          <CardDescription>The total amount you've spent</CardDescription>
        </CardHeader>
        <CardContent>{totalSpent}</CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
