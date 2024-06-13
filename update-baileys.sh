#!/bin/bash
su deploy <<'EOF'
cd /home/deploy/multi100/backend
pm2 stop 0
npm remove @whiskeysockets/baileys
npm install @whiskeysockets/baileys
pm2 start 0
EOF
