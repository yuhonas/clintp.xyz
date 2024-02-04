#!/usr/bin/env bash

script_dir=$(dirname "$0")
output=$(cat "$1" |\
  jq -r '.. | scalars' |\
  tr -cs 'a-zA-Z' '\n' |\
   grep -vwFf ./$script_dir/spellcheck/ignorelist.txt |\
   hunspell -d ./$script_dir/spellcheck/en_AU -L)

if [[ -z "$output" ]]; then
  echo "No spelling errors found"
else
  echo "Spelling errors found"
  echo "$output"
  exit 1
fi
