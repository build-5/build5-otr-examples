# Overview
See various examples how to use on tangle request to interact with Soonaverse.

Make sure to configure config.json with Shimmer NODE and mnemonic for your wallet.

You can set-up wallet via TanglePay. Use this wallet also to login on Soonaverse to gain access to various places. (i.e. become Guardian of space).

**Tutorials**
* [Crew3 -> Award (NFT/Tokens)](src/examples/crew3toAward/TUTORIAL.md)

Public "smr_endpoint_url" for:
- SMR - https://api.shimmer.network
- RMS - https://api.testnet.shimmer.network

"tangleRequestBech32" for Soonaverse production: smr1qp0248uakdvfrhyr58yk5lswhnt033vrhst2j4c77laepdv2rk0psgh4t4x

"tangleRequestBech32" for Soonaverse testnet (wen2): rms1qp29ma9mugkrlaq9e60pmdray4sn2zjpet4vyk86cezm0jqpdwuhv68j3vh

## Additional documentation on Soonaverse API
Postman with various API examples: https://www.postman.com/mission-engineer-10706716/workspace/soonaverse
Custom app using Soonaverse API: https://github.com/soonaverse/soon-portal-angular

## ts-node src/examples/award/create/create-exec.ts   
Creates an award using the inputs from config.json and award.json

## ts-node src/examples/award/fund/fund-exec.ts
Creates and funds an award

## ts-node src/examples/award/issue-badge/issueBadge-exec.ts
Creates and funds and award, then it issues a badge for the creator

## ts-node src/examples/nft/exec-nft-purchase.ts
Purchase available NFT from collection

## ts-node src/examples/proposal/create/exec-create.ts
Create proposal

## ts-node src/examples/proposal/approve/exec-approve.ts
Approve proposal

## ts-node src/examples/proposal/vote/exec-vote.ts
Vote on proposal

## ts-node src/examples/space/join/exec-join.ts <space ID>
Join space as member

## ts-node src/examples/space/join/exec-join.ts <space ID>
Join space as member

## ts-node src/examples/crew3toAward/exec-run.ts
Run integration between crew3 / awards

## ts-node src/examples/getMyReceiveAddress.ts
Get your SMR address based on your mnemonic

## ts-node src/examples/randomMnemonicSeed.ts
Generate random mnemonic seed

# 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/soonaverse/soonaverse/pulls)

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/soonaverse/soonaverse/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/soonaverse/soonaverse/pulls) or as [GitHub issues](https://github.com/soonaverse/soonaverse/issues).

Thank you for supporting us free open source licenses.
