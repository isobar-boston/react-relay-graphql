/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from 'graphql';

import {
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
    fromGlobalId,
    globalIdField,
    mutationWithClientMutationId,
    nodeDefinitions,
} from 'graphql-relay';

import {
    // Import methods that your schema can use to interact with your database
    listFarmersMarket,
    getFarmersMarket
} from './database';


/**
 * Define your own types here
 */
var farmersMarketType = new GraphQLObjectType({
    name: 'FarmersMarketType',
    description: 'A farmer\'s described in our app',
    fields: () => ({
        id: globalIdField('fmid'),
        FMID: {
            type: GraphQLInt,
            description: ''
        },
        MarketName: {
            type: GraphQLString,
            descripton: ''
        },
        Website: {
            type: GraphQLString,
            descripton: ''
        },
        Facebook: {
            type: GraphQLString,
            descripton: ''
        },
        Twitter: {
            type: GraphQLString,
            descripton: ''
        },
        Youtube: {
            type: GraphQLString,
            descripton: ''
        },
        OtherMedia: {
            type: GraphQLString,
            descripton: ''
        },
        street: {
            type: GraphQLString,
            descripton: ''
        },
        city: {
            type: GraphQLString,
            descripton: ''
        },
        County: {
            type: GraphQLString,
            descripton: ''
        },
        State: {
            type: GraphQLString,
            descripton: ''
        },
        zip: {
            type: GraphQLString,
            descripton: ''
        },
        Season1Date: {
            type: GraphQLString,
            descripton: ''
        },
        Season1Time: {
            type: GraphQLString,
            descripton: ''
        },
        Season2Date: {
            type: GraphQLString,
            descripton: ''
        },
        Season2Time: {
            type: GraphQLString,
            descripton: ''
        },
        Season3Date: {
            type: GraphQLString,
            descripton: ''
        },
        Season3Time: {
            type: GraphQLString,
            descripton: ''
        },
        Season4Date: {
            type: GraphQLString,
            descripton: ''
        },
        Season4Time: {
            type: GraphQLString,
            descripton: ''
        },
        x: {
            type: GraphQLString,
            descripton: ''
        },
        y: {
            type: GraphQLString,
            descripton: ''
        },
        Location: {
            type: GraphQLString,
            descripton: ''
        },
        Credit: {
            type: GraphQLBoolean,
            descripton: ''
        },
        WIC: {
            type: GraphQLBoolean,
            descripton: ''
        },
        WICcash: {
            type: GraphQLBoolean,
            descripton: ''
        },
        SFMNP: {
            type: GraphQLBoolean,
            descripton: ''
        },
        SNAP: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Organic: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Bakedgoods: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Cheese: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Crafts: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Flowers: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Eggs: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Seafood: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Herbs: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Vegetables: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Honey: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Jams: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Maple: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Meat: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Nursery: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Nuts: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Plants: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Poultry: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Prepared: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Soap: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Trees: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Wine: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Coffee: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Beans: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Fruits: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Grains: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Juices: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Mushrooms: {
            type: GraphQLBoolean,
            descripton: ''
        },
        PetFood: {
            type: GraphQLBoolean,
            descripton: ''
        },
        Tofu: {
            type: GraphQLBoolean,
            descripton: ''
        },
        WildHarvested: {
            type: GraphQLBoolean,
            descripton: ''
        },
        updateTime: {
            type: GraphQLString,
            descripton: ''
        }

    })
});

var queryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        FarmersMarketList: {
            type: new GraphQLList(farmersMarketType),
            resolve: () => listFarmersMarket()
        },
        FarmersMarket: {
            type: farmersMarketType,
            resolve: (fmid) => getFarmersMarket(fmid)
        }
    }
})


/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        // Add your own mutations here
    })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
    query: queryType,
    // Uncomment the following after adding some mutation fields:
    // mutation: mutationType
});
