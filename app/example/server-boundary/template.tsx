export default function ServerTemplate({children}: { children: React.ReactNode }) {
    return (
        <div>
            Teamplate Header
            {children}
            Teamplate Footer
        </div>
    );
}