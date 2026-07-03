## TODO
- [ ] Dynamically generate PDF
- [ ] Implement JSON Source View - https://mac-s-g.github.io/react-json-view/demo/dist/
- [ ] Fix ./resume/test.sh it needs a pipefail
- [ ] Add additional dependencies for resume checking (ENV variable skippable)


### Top repos

```bash
curl -L \
-H "X-GitHub-Api-Version: 2022-11-28" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/users/yuhonas/repos | jq '[sort_by(.stargazers_count) | reverse | limit(4; .[])]'
```

## Links
* https://github.com/gauravghongde/social-icons
* https://www.svgrepo.com/svg/342086/open-source-initiative
* https://www.qr-code-generator.com/solutions/vcard-qr-code/
* https://github.com/anna-geller/prefect-getting-started


