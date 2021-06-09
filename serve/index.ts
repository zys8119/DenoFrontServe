import { serve } from "https://deno.land/std@0.98.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    const params = ((req.url.match(/\?.*/img) || [])[0] || "").replace(/^\?/,"")
        .split("&")
        .reduce((a:any,b:any)=>{
            a[(b.split("=")[0])] = (b.split("=")[1])
            return a;
        },{})
    req.respond({
        body:new Uint8Array(await new Blob([JSON.stringify(
            params
        )]).arrayBuffer()),
        // body:new Uint8Array(await new Blob([`
        //    <!DOCTYPE html>
        //     <html lang="en">
        //     <head>
        //         <meta charset="UTF-8">
        //         <title>Title</title>
        //     </head>
        //     <body>
        //             <div style="color: green">阿松大萨达</div>
        //     </body>
        //     </html>
        // `]).arrayBuffer()),
    });
}

