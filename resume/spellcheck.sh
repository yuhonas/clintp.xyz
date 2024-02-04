#!/usr/bin/env bash

output=$(cat resume.clintp.json |\
   jq -r '.. | scalars' |\
   tr -cs 'a-zA-Z' '\n' |\
   grep -vwFf ./spellcheck/ignorelist.txt |\
   hunspell -d ./spellcheck/en_AU -L)

if [[ -z "$output" ]]; then
  echo "No spelling errors found"
else
  echo "Spelling errors found"
  echo "$output"
  exit 1
fi
