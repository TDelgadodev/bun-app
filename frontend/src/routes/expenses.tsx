import "../index.css";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/expenses")({
  component: Expenses,
});

async function getAllExpenses() {
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  return data;
}

function Expenses() {
  const { error, isFetching, data } = useQuery({
    queryKey: ["get-all-expenses"],
    queryFn: getAllExpenses,
  });

  if (error) {
    return (
      <div className="text-destructive-foreground">
        An error has occurred: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background max-w-3xl m-auto">
      {isFetching ? (
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      ) : (
        <div className="w-full max-w-4xl bg-card p-6 rounded-lg shadow-md">
          <Table className="min-w-full bg-card rounded-md">
            <TableCaption className="text-lg font-semibold text-card-foreground">A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-left px-4 py-2 text-card-foreground">Id</TableHead>
                <TableHead className="text-left px-4 py-2 text-card-foreground">Title</TableHead>
                <TableHead className="text-left px-4 py-2 text-card-foreground">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.expenses.map((expense) => (
                <TableRow key={expense.id} className="hover:bg-muted">
                  <TableCell className="font-medium text-card-foreground px-4 py-2">{expense.id}</TableCell>
                  <TableCell className="text-card-foreground px-4 py-2">{expense.title}</TableCell>
                  <TableCell className="text-card-foreground px-4 py-2">{expense.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default Expenses;
