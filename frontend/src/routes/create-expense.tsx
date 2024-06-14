import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create-expense")({
  component: CreateExpense,
});

function CreateExpense() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-xl w-full bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Expense</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="title" className="block mb-1">Title</Label>
            <Input type="text" id="title" placeholder="Title" className="w-full" />
          </div>
          <div>
            <Label htmlFor="amount" className="block mb-1">Amount</Label>
            <Input type="number" id="amount" placeholder="Amount" className="w-full" />
          </div>
          <Button className="w-full">Create Expense</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateExpense;
