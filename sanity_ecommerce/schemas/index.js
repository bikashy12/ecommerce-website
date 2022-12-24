import product from './product';
import banner from './banner';

export default[
    product, banner
]

/***************** Old way of importing modules ***********************/
// import createSchema from 'part:@sanity/base/schema-creator'
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// import {createSchema, defineConfig} from 'sanity'
// import createSchema from 'sanity'
// import schemaTypes from 'sanity'

// export default createSchema({
//   name: 'default',
//   types: schemaTypes.concat([ product, banner, ]),
// })