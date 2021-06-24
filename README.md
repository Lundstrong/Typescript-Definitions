<div align="center">

# Lundstrong Typescript Definitions

Roblox TS compatibility for working with a Lundstrong Product's  API.

<a href="https://github.com/Lundstrong/Edit-Roblox-Place/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Lundstrong/Edit-Roblox-Place"></a>
<img alt="npm version" src="https://img.shields.io/npm/v/@rbxts/lundstrong">
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FLundstrong%2FLundstrongOrders-Typescript?ref=badge_shield"><img alt="FOSSA Status" src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FLundstrong%2FLundstrongOrders-Typescript.svg?type=shield"></a>
</div>

## Getting Started

### Installation

Install through npm or yarn.

```
yarn add @rbxts/lundstrong
```

```
npm install @rbxts/lundstrong
```

## Usage

An example is below.
```ts
import { ordersAPI } from '@rbxts/lundstrong'
import { ReplicatedStorage } from '@rbxts/services'

let API = require(ReplicatedStorage.LundstrongOrders.API) as ordersAPI
API.onOrderClaimed.Connect((order) => {
    print(order.id)
})
API.SendNotification(plr, "hello this is sasial here!", 10)
```

The module will also add the ModuleScripts for `ReplicatedStorage.LundstrongOrders.API`, `Workspace.LundstrongOrders.Configuration` and `Workspace.LundstrongOrders.MenuItemsConfig` - adding them to the autocomplete, and making them not an unknown type.

## Versions

Versions will not match the version of the repos this module supports. In the package.json, it is suggested to set the version to `"*"`, because that will match the latest version of the product(s).

## Gotchas
The only 'gotcha' there is with this library, is that you DO NOT give order a type. The compiler will automatically give it the order type because of how the definitions were wrote.

```diff
- API.onOrderClaimed.Connect((order: Order) => {
+ API.onOrderClaimed.Connect((order) => {
```

## Contributing
We love contributions! Pull requests are warmly welcomed and highly appriciated. For major changes, please open an issue first or discuss on the discord to let us know what you would like to change.

## Support
Join the [Lundstrong Discord](https://discord.gg/2w9PmHZPwX).

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLundstrong%2FLundstrongOrders-Typescript.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FLundstrong%2FLundstrongOrders-Typescript?ref=badge_large)
