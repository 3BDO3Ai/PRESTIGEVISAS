#!/bin/bash

# Build the application
echo "Building Next.js application..."
NODE_OPTIONS='--max-old-space-size=512' npm run build

# Start the server
echo "Starting server..."
node app.js
