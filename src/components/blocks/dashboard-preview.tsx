"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const breachData = [
  { source: "DataLeakSite", date: "2023-05-12", exposed: "Emails, Passwords, Names", risk: "High" },
  { source: "BreachDatabase", date: "2022-11-30", exposed: "Emails, Phone Numbers", risk: "Medium" },
];

export function DashboardPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Live Preview</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how Xposefinder works with this interactive preview.
          </p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
          <div className="flex h-14 items-center justify-between border-b px-6">
            <h3 className="font-semibold">Xposefinder Dashboard</h3>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">admin@company.com</p>
              <Avatar className="h-8 w-8">
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <h4 className="font-semibold">Breach Search</h4>
              <div className="relative flex-grow">
                <Input defaultValue="company.com" className="pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <Button>Search</Button>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Source</TableHead>
                    <TableHead>Breach Date</TableHead>
                    <TableHead>Data Exposed</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {breachData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.source}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.exposed}</TableCell>
                      <TableCell>
                        <Badge variant={row.risk === 'High' ? 'destructive' : 'secondary'}>{row.risk}</Badge>
                      </TableCell>
                      <TableCell className="space-x-2">
                        <Button variant="outline" size="sm">Create Ticket</Button>
                        <Button variant="ghost" size="sm">Mark Safe</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="border-t p-4 text-center">
            <Button variant="link">View full dashboard</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 