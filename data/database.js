/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Model types
class FarmersMarket extends Object {}

// JSON File Data
let farmersMarketData = require('./farmersmarket.json');

var listFarmersMarket = () => farmersMarketData;

var getFarmersMarket = (fmid) => farmersMarketData.filter((farmersMarket) => farmersMarket.fmid == fmid)[0];


module.exports = {
  // Export methods that your schema can use to interact with your database
    listFarmersMarket,
    getFarmersMarket
};
