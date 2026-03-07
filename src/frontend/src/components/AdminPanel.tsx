import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Inbox, ShieldCheck, Trash2, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { type Enquiry, GradeLevel } from "../backend.d";
import { useDeleteEnquiry, useGetAllEnquiries } from "../hooks/useQueries";

const gradeLabels: Record<GradeLevel, string> = {
  [GradeLevel.seventh]: "7th Standard",
  [GradeLevel.eighth]: "8th Standard",
  [GradeLevel.ninth]: "9th Standard",
  [GradeLevel.tenth]: "10th Standard",
};

function GradeBadge({ grade }: { grade: GradeLevel }) {
  const colorMap: Record<GradeLevel, string> = {
    [GradeLevel.seventh]: "bg-blue-50 text-blue-700 border-blue-200",
    [GradeLevel.eighth]: "bg-green-50 text-green-700 border-green-200",
    [GradeLevel.ninth]: "bg-amber-50 text-amber-700 border-amber-200",
    [GradeLevel.tenth]: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return (
    <span
      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorMap[grade]}`}
    >
      {gradeLabels[grade]}
    </span>
  );
}

function DeleteButton({
  enquiry,
  idx,
}: {
  enquiry: Enquiry;
  idx: number;
}) {
  const deleteEnquiry = useDeleteEnquiry();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          data-ocid={`admin.enquiry.delete_button.${idx}`}
          className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 px-2"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Enquiry?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the enquiry from{" "}
            <strong>{enquiry.name}</strong>. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-ocid="admin.delete.cancel_button">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            data-ocid="admin.delete.confirm_button"
            onClick={() => deleteEnquiry.mutate(enquiry.id)}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function AdminPanel() {
  const { data: enquiries, isLoading, isError } = useGetAllEnquiries();
  const [search, setSearch] = useState("");

  const filtered = (enquiries ?? []).filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.phone.includes(search),
  );

  return (
    <main className="min-h-screen pt-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "oklch(0.42 0.12 158 / 0.12)" }}
            >
              <ShieldCheck
                className="h-5 w-5"
                style={{ color: "oklch(0.35 0.12 158)" }}
              />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Admin Panel
              </h1>
              <p className="text-muted-foreground text-sm">
                Manage student enquiries
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border shadow-xs">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {enquiries?.length ?? 0}
              </span>
              <span className="text-xs text-muted-foreground">enquiries</span>
            </div>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-5"
        >
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-ocid="admin.search.input"
            className="w-full max-w-sm h-10 px-4 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-card rounded-2xl border border-border shadow-card overflow-hidden"
        >
          {isLoading ? (
            <div
              data-ocid="admin.enquiries.loading_state"
              className="p-6 space-y-3"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton loader
                <Skeleton key={i} className="h-12 w-full rounded-lg" />
              ))}
            </div>
          ) : isError ? (
            <div
              data-ocid="admin.enquiries.error_state"
              className="p-12 text-center"
            >
              <p className="text-destructive font-medium">
                Failed to load enquiries.
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Please try refreshing the page.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div
              data-ocid="admin.enquiries.empty_state"
              className="flex flex-col items-center justify-center py-16 px-4 text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "oklch(0.42 0.12 158 / 0.08)" }}
              >
                <Inbox
                  className="h-7 w-7"
                  style={{ color: "oklch(0.5 0.1 158)" }}
                />
              </div>
              <p className="font-display text-lg font-semibold text-foreground mb-1">
                {search ? "No results found" : "No enquiries yet"}
              </p>
              <p className="text-muted-foreground text-sm">
                {search
                  ? "Try a different search term"
                  : "Enquiries submitted on the website will appear here"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table data-ocid="admin.enquiries.table">
                <TableHeader>
                  <TableRow className="border-b border-border bg-muted/40">
                    <TableHead className="font-semibold text-foreground pl-5">
                      #
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Student Name
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Class
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Phone
                    </TableHead>
                    <TableHead className="font-semibold text-foreground">
                      Message
                    </TableHead>
                    <TableHead className="font-semibold text-foreground pr-5 text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((enquiry, idx) => (
                    <TableRow
                      key={String(enquiry.id)}
                      data-ocid={`admin.enquiries.row.${idx + 1}`}
                      className="border-b border-border/60 hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="pl-5 text-muted-foreground text-sm font-mono">
                        {idx + 1}
                      </TableCell>
                      <TableCell>
                        <span className="font-semibold text-foreground text-sm">
                          {enquiry.name}
                        </span>
                      </TableCell>
                      <TableCell>
                        <GradeBadge grade={enquiry.gradeLevel} />
                      </TableCell>
                      <TableCell>
                        <a
                          href={`tel:${enquiry.phone}`}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          {enquiry.phone}
                        </a>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <span className="text-muted-foreground text-sm line-clamp-2">
                          {enquiry.message || (
                            <em className="text-muted-foreground/50">
                              No message
                            </em>
                          )}
                        </span>
                      </TableCell>
                      <TableCell className="pr-5 text-right">
                        <DeleteButton enquiry={enquiry} idx={idx + 1} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
