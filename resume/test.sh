#!/usr/bin/env bash

current_dir=$(dirname "$0")
pipenv run check-jsonschema "$current_dir/resume.clintp.json" --schemafile "$current_dir/resume.schema.json"
"$current_dir/spellcheck.sh" "$current_dir/resume.clintp.json"
