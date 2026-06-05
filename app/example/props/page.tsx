export default function PropsPage() {
    const name = "My name"
    return (
        <div>

        </div>
    );
}

// {props}: {props type}
function ParentComponent({ name }: { name: String }) {
    return (
        <div className="border p-2"> Props Value: { name }</div>
    );
}