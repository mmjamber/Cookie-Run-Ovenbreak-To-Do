# Progress Text PNG Export

The working method was to render the SVG with Microsoft Edge in headless mode and save a transparent screenshot.

Sharp could generate the SVG file, but it did not render the SVG `textPath` into pixels for this design, so the PNG came out fully transparent. Edge rendered the curved text correctly.

Working command:

```powershell
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$out = 'C:\Users\Reirei\Desktop\ovenbreak to-do list\my-website\public\images\progress-text-edge.png'
$svg = (Resolve-Path -LiteralPath 'public\images\progress-text.svg').Path
$uri = ([System.Uri]$svg).AbsoluteUri
& $edge --headless=new --disable-gpu --hide-scrollbars --window-size=1100,260 --default-background-color=00000000 "--screenshot=$out" $uri
Copy-Item -LiteralPath public\images\progress-text-edge.png -Destination public\images\progress-text.png -Force
```

Important details:

- `--default-background-color=00000000` keeps the screenshot background transparent.
- Use a `file:///` URI from `[System.Uri]` so spaces in the project path are handled correctly.
- Run the command with permission to launch Edge if the sandbox blocks it.
