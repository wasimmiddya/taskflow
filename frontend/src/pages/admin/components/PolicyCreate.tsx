import { Plus } from "lucide-react";

type PolicyCreateProps = {
    policyName: string;
    permission: string;
    selectedPermissions: string[];
    description: string;
    onPolicyNameChange: (value: string) => void;
    onPermissionChange: (value: string) => void;
    onDescriptionChange: (value: string) => void;
    onAddPermission: () => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function PolicyCreate({
    policyName,
    permission,
    selectedPermissions,
    description,
    onPolicyNameChange,
    onPermissionChange,
    onDescriptionChange,
    onAddPermission,
    onSubmit,
}: PolicyCreateProps) {
    return (
        <section className="mr-auto w-full max-w-5xl rounded-[3px] border border-[#d5d5d5] bg-white px-6 py-7 text-[#111] sm:px-12 sm:py-9">
            <h1 className="border-b border-[#ededed] pb-4 text-lg font-bold uppercase tracking-[-0.03em]">Policy Management</h1>
            <form className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" onSubmit={onSubmit}>
                <div className="flex flex-col gap-5">
                    <input
                        id="policyName"
                        value={policyName}
                        onChange={(event) => onPolicyNameChange(event.target.value)}
                        placeholder="Policy Name"
                        aria-label="Policy Name"
                        className="h-10 rounded-md border border-[#c9c9c9] bg-[#f3f3f3] px-3 text-base text-[#222] outline-none placeholder:text-[#6f7888] focus:border-[#2685a7]"
                        required
                    />
                    <textarea
                        id="description"
                        value={description}
                        onChange={(event) => onDescriptionChange(event.target.value)}
                        placeholder="Description"
                        aria-label="Description"
                        className="min-h-24 w-full resize-y rounded-md border border-[#c9c9c9] bg-[#f3f3f3] px-3 py-3 text-base text-[#222] outline-none placeholder:text-[#6f7888] focus:border-[#2685a7]"
                        required
                    />
                    <div className="flex gap-2">
                        <select
                            id="permission"
                            value={permission}
                            onChange={(event) => onPermissionChange(event.target.value)}
                            aria-label="Select Permission"
                            className="h-10 min-w-0 flex-1 appearance-none rounded-md border border-[#c9c9c9] bg-[#f3f3f3] px-3 text-base text-[#222] outline-none focus:border-[#2685a7]"
                        >
                            <option value="">Select Permission</option>
                            <option value="CRT_TASK">CRT_TASK</option>
                            <option value="UPT_TASK">UPT_TASK</option>
                            <option value="DEL_TASK">DEL_TASK</option>
                            <option value="MNG_USERS">MNG_USERS</option>
                        </select>
                        <button type="button" onClick={onAddPermission} aria-label="Add permission" className="flex h-10 w-12 shrink-0 items-center justify-center rounded-md border border-[#c9c9c9] bg-[#f3f3f3] text-xl text-[#2685a7] hover:bg-[#e7e7e7]">
                            <Plus className="size-4" />
                        </button>
                    </div>
                    <div className="flex justify-center pt-1 lg:justify-start lg:pl-24">
                        <button type="submit" className="h-10 w-32 rounded-md bg-[#063c68] text-sm text-white transition-colors hover:bg-[#0b507f]">Save</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="permission" className="h-5 text-lg font-medium text-[#444]">Permission List</label>
                                <div className="min-h-39 rounded-md border border-[#c9c9c9] bg-[#f3f3f3] p-2">
                        <div className="space-y-2">
                            {selectedPermissions.map((selectedPermission) => (
                                <div key={selectedPermission} className="rounded-md border border-[#c9c9c9] bg-[#e0e0e0] px-3 py-2 text-sm text-[#333]">
                                    {selectedPermission}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
