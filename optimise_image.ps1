# ========================================
# Optimize Images + Update HTML for Static Site (Windows)
# Requires: ImageMagick + cwebp.exe in PATH
# ========================================

$maxWidth = 1200
$quality = 80

Write-Host "🔄 Optimizing images..."

# Get all images
Get-ChildItem -Recurse -Include *.jpg, *.jpeg, *.png | ForEach-Object {
    $file = $_.FullName
    $dir = $_.DirectoryName
    $name = [System.IO.Path]::GetFileNameWithoutExtension($file)
    $ext  = $_.Extension.ToLower()

    Write-Host "➡ Processing: $file"

    # Resize + compress original
    magick "$file" -resize ${maxWidth} -quality $quality "$file"

    # Create WebP version
    & cwebp.exe -q $quality "$file" -o "$dir\$name.webp" | Out-Null

    Write-Host "✅ Optimized: $file + $name.webp"
}

Write-Host "🔄 Updating HTML files..."

# Update all HTML files to use <picture>
Get-ChildItem -Recurse -Include *.html | ForEach-Object {
    $htmlPath = $_.FullName
    $html = Get-Content $htmlPath

    # Replace <img src="file.ext"> with <picture> block
    $html = $html -replace '<img\s+([^>]*?)src="([^"]+?)\.(jpg|jpeg|png)"([^>]*)>', '<picture><source srcset="$2.webp" type="image/webp"><img $1src="$2.$3"$4></picture>'

    # Save changes
    Set-Content -Path $htmlPath -Value $html -Encoding UTF8
    Write-Host "✅ Updated: $htmlPath"
}

Write-Host "🎉 All images optimized & HTML updated!"
