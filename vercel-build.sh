#!/bin/bash
set -e

echo "Assembling Vercel Build Output API V3..."
rm -rf .vercel/output
mkdir -p .vercel/output/static
mkdir -p .vercel/output/functions/index.func

# 1. Copy Static Assets
cp -r dist/client/* .vercel/output/static/

# 2. Copy Serverless Edge Function
cp -r dist/server/* .vercel/output/functions/index.func/

# 3. Create Edge Function config
cat <<EOF > .vercel/output/functions/index.func/.vc-config.json
{
  "runtime": "edge",
  "entrypoint": "server.js"
}
EOF

# 4. Create Vercel Routing Config
cat <<EOF > .vercel/output/config.json
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/" }
  ]
}
EOF

echo "Vercel Build Output generated successfully."
