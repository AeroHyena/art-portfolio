export default function Nav({ routes }: { routes: string[] }) {

    // data manipulation goes here
    const routesList = routes.map((route) =>
    <li key={route} className="basis-auto text-white flex-1">
        {route}
    </li>
);

    return (
        <nav className="flex flex-row bg-slate-800 h-16">

            <div id="icon" className="basis-1/2">
                <p>icon and socials goes here</p>
            </div>

            <div id="links" className="flex-1">
                <ul className="flex flex-row w-full">{routesList}</ul> 
            </div>
            
        </nav>
    );
}