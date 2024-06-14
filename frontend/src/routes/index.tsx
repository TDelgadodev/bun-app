import "../index.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

async function getTotalSpent() {
  const res = await api.expenses["total-spent"].$get();
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  return data;
}

function Index() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["get-total-spent"],
    queryFn: getTotalSpent,
  });

  if (error) {
    return <div className="text-destructive-foreground">An error has occurred: {error.message}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background m-4 p-4">
      <Card className="w-full max-w-md p-4 bg-card shadow-md rounded-lg">
        <CardHeader className="border-b border-border pb-2 mb-4">
          <CardTitle className="text-2xl font-bold text-card-foreground">Total Spent</CardTitle>
          <CardDescription className="text-muted-foreground">The total amount you've spent</CardDescription>
        </CardHeader>
        <CardContent className="text-center text-xl font-semibold text-card-foreground">
          {isFetching ? (
            <div className="animate-pulse">Loading...</div>
          ) : (
            data && `$${data.total.toFixed(2)}`
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;
