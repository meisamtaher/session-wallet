// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;

import {ISafe} from "@safe-global/safe-core-protocol/contracts/interfaces/Accounts.sol";
import {ISafeProtocolPlugin} from "@safe-global/safe-core-protocol/contracts/interfaces/Integrations.sol";
import {ISafeProtocolManager} from "@safe-global/safe-core-protocol/contracts/interfaces/Manager.sol";
import {BasePluginWithEventMetadata, PluginMetadata} from "./Base.sol";
import {SafeTransaction, SafeRootAccess, SafeProtocolAction} from "@safe-global/safe-core-protocol/contracts/DataTypes.sol";


contract Session {
    address public target;
    // safe account address => sub-wallet account address => Session;
    mapping (address=>mapping(address => Permission)) public sessions;
    struct Permission{
        bool active;
        uint256 activeUntilBlock;
        bytes4 functionSignature;
        address destinationContract;
        SessionType sessiontType;
    }
    enum SessionType{
        Normal,
        Function,
        Contract,
        ContractFunction
    }
    event AddSession(address indexed ,address indexed delegatee, uint256 activeUntilBlock, bytes4 functionSignature, address destinationContract);
    // event TransactionExecuted(address indexed accountAddress, uint256 value, address );
    function addSession(address _safeWallet,address _delegatee, SessionType _sessionType, uint256 _duration,address _destinationContract, bytes4 _functionSignature) public{
        require(msg.sender== _safeWallet,"Only SCW");
        sessions[_safeWallet][_delegatee] = Permission(true, block.timestamp + _duration, _functionSignature, _destinationContract, _sessionType);
    }
    function executeTransactionFromPlugin(ISafeProtocolManager _manager,ISafe _safeWallet, SafeTransaction calldata safeTx) public {
        // require(sessions[msg.sender],"No sessions")
        _manager.executeTransaction(_safeWallet, safeTx);
        // require(GnosisSafe(target).execTransactionFromModule(_to, _value, _data, _operation),"Action was not Executed");
        // emit TransactionExecuted(msg.sender, _operation, to, )
    }
}
