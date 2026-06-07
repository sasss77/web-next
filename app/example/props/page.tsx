export default function PropsPage() {
    const name = "My name"
    return (
        <div>
            <ParentComponent name={name}/>
            <ParentComponent name= "new name"/>
        </div>
    );
}

// {props}: {props type}
function ParentComponent({ name }: { name: string }) {
    return (
        <div className="border p-2">
            Props Value: {name}
            <ChildComponent name = {name} />
        </div>
    );
}

interface ChildComponentProps {
    name: string
}
function ChildComponent({ name }: ChildComponentProps) {

    return (
        <div className="border p-2">
            Child Component: {name}
        </div>
    )
}
  
