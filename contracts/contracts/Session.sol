// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity ^0.8.18;

import {ISafe} from "@safe-global/safe-core-protocol/contracts/interfaces/Accounts.sol";
import {ISafeProtocolPlugin} from "@safe-global/safe-core-protocol/contracts/interfaces/Integrations.sol";
import {ISafeProtocolManager} from "@safe-global/safe-core-protocol/contracts/interfaces/Manager.sol";
import {BasePluginWithEventMetadata, PluginMetadata} from "./Base.sol";
import {SafeTransaction, SafeRootAccess, SafeProtocolAction} from "@safe-global/safe-core-protocol/contracts/DataTypes.sol";


contract Session {
    // safe account address => sub-wallet account address => Session;
    mapping (address=>mapping(address => Permission)) public sessions;

    struct Permission{
        bool active;
        SessionType sessiontType;
        uint256 activeUntilBlock;
        mapping (address => bool) destinationContracts;
        mapping (address => mapping(bytes4 =>bool) ) destinationFunnctions;
    }
    enum SessionType{
        Normal,
        Contract,
        ContractFunction
    }
   
    // event TransactionExecuted(address indexed accountAddress, uint256 value, address );
    function addSession(address _safeWallet,address _delegatee, SessionType _sessionType, uint256 _duration,address[] calldata _destinationContracts, bytes4[] calldata _functionSignatures) public{
        require(msg.sender== _safeWallet,"Only SCW");
        /// later we should check if _safeWallet exist on this address 
        sessions[_safeWallet][_delegatee].active = true;
        sessions[_safeWallet][_delegatee].activeUntilBlock = block.timestamp + _duration;
        if(_sessionType == SessionType.Contract){
            for(uint i =0; i< _destinationContracts.length; i++){
                sessions[_safeWallet][_delegatee].destinationContracts[_destinationContracts[i]] = true;
            }
        }
        else if(_sessionType == SessionType.ContractFunction){
            for(uint i =0; i< _destinationContracts.length; i++){
                sessions[_safeWallet][_delegatee].destinationFunnctions[_destinationContracts[i]][_functionSignatures[i]] = true;
            }
        }
        emit AddSession(_safeWallet, _delegatee, block.timestamp + _duration);
    }
    function revokeSession(address _safeWallet, address _delegatee) public{
        require(msg.sender == _safeWallet, "Only SCW");
        require(sessions[_safeWallet][_delegatee].active,"No session available");
        sessions[_safeWallet][_delegatee].active = false;
    }
    function executeTransactionFromPlugin(ISafeProtocolManager _manager,ISafe _safeWallet, SafeTransaction calldata safeTx) public {
        require(sessions[address(_safeWallet)][msg.sender].active,"No session");  
        require(sessions[address(_safeWallet)][msg.sender].activeUntilBlock > block.timestamp ,"Session Expired");
        //////// check contracts and function signatures
        require(sessions[address(_safeWallet)][msg.sender].sessiontType != SessionType.Contract, "Permission denied to this contract");
        require(sessions[address(_safeWallet)][msg.sender].sessiontType != SessionType.ContractFunction, "Permission denied to this function");
        _manager.executeTransaction(_safeWallet, safeTx);
        // emit TransactionExecuted(msg.sender, _operation, to, )
    }
    event AddSession(address indexed delegator,address indexed delegatee, uint256 activeUntilBlock);
}
