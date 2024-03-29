# Build-5 | Digital Twin (NFT) - Prototype Use Case

## Use Case

* An ability to create digital twin of a device on immutable ledger. Digital twin is represented as NFT.
* Digital Twin contains latest metadata of the device. This metadata are stored as JSON. There is persisent link to latest data.
* User is able to update the metadata anytime at NO COST. The only variable is storage deposit.
* User is able to build hierarchy between devices (digital twins). ie. Assembly item and its components. 
* User has full control over digital twins.

## Shimmer Network & BUILDAVERSE

* Shimmer Network is phasing network for IOTA Network
* IOTA Network and Shimmer Network are feeless immutable ledgers using unique Tangle technology
* Shimmer Network has been active since October 2022. See more here: https://shimmer.network
* BUILD.5 is a non-profit association delivering plug & play tooling on top Shimmer and IOTA. 
* Soonaverse is phasing network for BUILD.5 production.
* IOTA Mainnet is yet to be upgraded with “Stardust” update to bring digital twin functionality.

## Assumption & limitation for the prototype

* Prototype has limit of up to 8kb of metadata that can be stored within digital twin. This limit can be increased by splitting the UTXO outputs but it’s not enabled within the prototype.
* User must have basic skills in Typescript. 
* Prototype uses On Tangle Request instead of REST call. This shows powerfulness of our platform and provides more secure engagement.

## Getting started

Clone git repo:

```bash
git clone git@github.com:build-5/build5-otr-examples.git
```

Install dependences:

```bash
npm install
```

Configure your config.json with your own mnemonic and direct it to desired network. See [README.md](./../../../README.md)

```bash
vim config.json
```

Run mint metadata NFT example

NOTE: Read manual in [exec-mint-metadata-nft.ts](./exec-mint-metadata-nft.ts) prior running it for better understanding.

```bash
ts-node src/examples/metadata_nft/exec-mint-metadata-nft.ts
```
