#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-classic-614390-9f425362/tictactoe_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

