chcp 65001

@ECHO off

start /b  %~dp0\.deno\bin\deno.exe run --allow-net %~dp0\serve\index.ts