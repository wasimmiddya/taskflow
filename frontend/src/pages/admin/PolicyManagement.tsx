import { useState } from "react";
import PolicyCreate from "./components/PolicyCreate";
import PolicyView, { type Policy } from "./components/PolicyView";

const initialPolicies: Policy[] = [
    { id: "P001", name: "CRT_TASK", description: "Access to create task" },
    { id: "P002", name: "DEL_TASK", description: "Access to delete task" },
    { id: "P003", name: "MNG_USERS", description: "Manage system users" },
];

export default function PolicyManagement() {
    const [activeTab, setActiveTab] = useState<"view" | "create">("view");
    const [policies, setPolicies] = useState(initialPolicies);
    const [policyName, setPolicyName] = useState("");
    const [permission, setPermission] = useState("");
    const [selectedPermissions, setSelectedPermissions] = useState(["CRT_TASK", "UPT_TASK"]);
    const [description, setDescription] = useState("");

    const handleCreatePolicy = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!policyName.trim() || !description.trim() || selectedPermissions.length === 0) return;

        setPolicies((currentPolicies) => [
            ...currentPolicies,
            {
                id: `P${String(currentPolicies.length + 1).padStart(3, "0")}`,
                name: policyName.trim(),
                description: description.trim(),
            },
        ]);
        setPolicyName("");
        setPermission("");
        setSelectedPermissions([]);
        setDescription("");
        setActiveTab("view");
    };

    const addPermission = () => {
        if (permission && !selectedPermissions.includes(permission)) {
            setSelectedPermissions((currentPermissions) => [...currentPermissions, permission]);
            setPermission("");
        }
    };

    return (
        <main className="min-h-full bg-white px-4 py-4 text-[#111] sm:px-8 sm:py-6">
            <div className="mx-auto max-w-6xl">
                <div className="mb-6 flex gap-7 border-b border-[#e6e6e6]">
                    {(["view", "create"] as const).map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`border-b-2 px-3 pb-3 text-[0.7rem] font-medium uppercase tracking-[0.04em] transition-colors ${
                                activeTab === tab
                                    ? "border-black text-black"
                                    : "border-transparent text-[#2685a7] hover:text-[#17627d]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === "view" ? (
                    <PolicyView policies={policies} />
                ) : (
                    <PolicyCreate
                        policyName={policyName}
                        permission={permission}
                        selectedPermissions={selectedPermissions}
                        description={description}
                        onPolicyNameChange={setPolicyName}
                        onPermissionChange={setPermission}
                        onDescriptionChange={setDescription}
                        onAddPermission={addPermission}
                        onSubmit={handleCreatePolicy}
                    />
                )}
            </div>
        </main>
    );
}