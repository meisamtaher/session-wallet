// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;

import {BasePluginWithEventMetadata, PluginMetadata} from "./Base.sol";
import {Session} from "./Session.sol";

contract SessionPlugin is BasePluginWithEventMetadata, Session {
    constructor()
        BasePluginWithEventMetadata(
            PluginMetadata({
                name: "Session Plugin",
                version: "0.0.2",
                requiresRootAccess: false,
                iconUrl: "",
                appUrl: "https://meisamtaher.github.io/session-wallet"
            })
        )
    { }
}
