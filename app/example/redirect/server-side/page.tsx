import ServerAction from "./server-action";

export default function Page() {
    return (
        <div>
            <button
                onClick={ServerAction}
                className="border p-2 rounded"
            >
                click me to trigger server-action
            </button>
        </div>
    );
}
