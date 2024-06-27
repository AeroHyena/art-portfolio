export default function ShorthandBrowser({ title }: { title: string }) {

    // data manipulation goes here
    //TODO 

    return (
        <div id={title + "ShorthandBrowser"} className="flex flex-row pt-24 pb-12">
            <div id={title+"WidthPaddingL"} className="flex-1"></div>
            <div className="w-[70vw] h-[70vh] bg-slate-800">
                <h3>{title}</h3>
                <p>Content goes here</p>
            </div>
            <div id={title+"WidthPaddingR"} className="flex-1"></div>
        </div>
    );
}