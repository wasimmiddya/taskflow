import { FilePenLine, ShieldAlert, Trash2 } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export type Policy = {
    id: string;
    name: string;
    description: string;
};

type PolicyViewProps = {
    policies: Policy[];
};

export default function PolicyView({ policies }: PolicyViewProps) {
    return (
        <section className="rounded-[3px] border border-[#d5d5d5] p-6 sm:p-7">
            <h1 className="border-b border-[#ededed] pb-4 text-lg font-bold uppercase tracking-[-0.03em]">
                Policy Management
            </h1>

            <div className="mt-6 overflow-hidden border border-[#e2e2e2]">
                <Table className="min-w-155 table-fixed">
                    <TableHeader>
                        <TableRow className="bg-[#f2f2f2] hover:bg-[#f2f2f2]">
                            <TableHead className="w-[12%] border-r border-[#e1e1e1] px-4 py-3 text-[0.6rem] font-bold uppercase tracking-wider">PRM_ID</TableHead>
                            <TableHead className="w-[16%] border-r border-[#e1e1e1] px-4 py-3 text-[0.6rem] font-bold uppercase tracking-wider">NAME</TableHead>
                            <TableHead className="border-r border-[#e1e1e1] px-4 py-3 text-[0.6rem] font-bold uppercase tracking-wider">DESC</TableHead>
                            <TableHead className="w-[12%] px-4 py-3 text-[0.6rem] font-bold uppercase tracking-wider">ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {policies.map((policy) => (
                            <TableRow key={policy.id} className="border-[#ededed] hover:bg-white">
                                <TableCell className="border-r border-[#ededed] px-4 py-3 font-mono text-[0.65rem] text-[#505050]">{policy.id}</TableCell>
                                <TableCell className="border-r border-[#ededed] px-4 py-3">
                                    <span className="bg-[#e7e7e7] px-2 py-1 text-[0.65rem] font-medium text-[#555]">{policy.name}</span>
                                </TableCell>
                                <TableCell className="border-r border-[#ededed] px-4 py-3 text-[0.7rem] text-[#2685a7]">{policy.description}</TableCell>
                                <TableCell className="px-4 py-3">
                                    <div className="flex items-center gap-3 text-[#2685a7]">
                                        <button type="button" aria-label={`Edit ${policy.name}`} className="hover:text-[#17627d]"><FilePenLine className="size-3.5" /></button>
                                        <button type="button" aria-label={`Delete ${policy.name}`} className="hover:text-[#17627d]"><Trash2 className="size-3.5" /></button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-2 border-t border-[#f0f0f0] pt-6 text-[#84c4d9]">
                <ShieldAlert className="size-7 stroke-[1.5]" />
                <span className="text-[0.6rem] uppercase tracking-[0.03em]">End of records</span>
            </div>
        </section>
    );
}
