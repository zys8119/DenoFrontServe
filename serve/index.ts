import { serve } from "https://deno.land/std@0.98.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    console.log(req.url)
    req.respond({
        // body:new Uint8Array(await new Blob([JSON.stringify({
        //     a:1,
        //     b:2
        // })]).arrayBuffer()),
        body:new Uint8Array(await new Blob([`
           <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Title</title>
            </head>
            <body>
                    <div style="color: green">阿松大萨达</div>
            </body>
            </html>
        `]).arrayBuffer()),
    });
}

