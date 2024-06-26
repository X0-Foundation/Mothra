// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.0;

interface ICallee {
    function call(
        address sender,
        uint amount0,
        uint amount1,
        bytes calldata data
    ) external;
}
