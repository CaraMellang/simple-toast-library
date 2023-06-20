import babel from '@rollup/plugin-babel'
import commonjs from "@rollup/plugin-commonjs";
import {nodeResolve} from '@rollup/plugin-node-resolve'
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import pkg from './package.json' assert {type:"json"}
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


const extensions = ['js' , 'jsx' , 'ts' , 'tsx' , 'mjs'];

const config = [
    {
        extensions: [/node_module/],
        input: './src/index.ts',
        output:[
            {
                dir:'./dist',
                format:'cjs',
                preserveModules:true,
                preserveModulesRoot:'src'
            }
        ],
        external: [ 'react', 'react-dom', 'react-dom/client', 'react-router-dom', 'react/jsx-runtime', 'hoist-non-react-statics' ],
        plugins:[
            nodeResolve({extensions}),
            babel({
                exclude:'node_module/**',
                extensions,
                include:['src/**/*'],
                babelHelpers:'bundled',
                presets: ['@babel/preset-react']
            }),
            commonjs({include:'node_modules/**'}),
            typescript({tsconfig:'./tsconfig.json', outDir:'./dist', declarationDir:'./dist'}),
            // serve('dist')
            // serve({ contentBase:['','public'], host:'localhost', port:3000 , open:true}),
            url(),
            peerDepsExternal()
        ]
    },
    {
        extensions: [/node_module/],
        input: './src/index.ts',
        output:[
            {
                dir:'./dev/src/module/chat',
                format: 'esm',
                preserveModules:true,
                preserveModulesRoot:'src'
            }
        ],
        external: [ 'react', 'react-dom', 'react-dom/client', 'react-router-dom', 'react/jsx-runtime', 'hoist-non-react-statics' ],
        plugins:[
            nodeResolve({extensions}),
            babel({
                exclude:'node_modules/**',
                extensions,
                include:['src/**/*'],
                babelHelpers:'bundled',
                presets: ['@babel/preset-react']
            }),
            commonjs({include:'node_module/**'}),
            typescript({tsconfig:'./tsconfig.json', outDir:'./dev/src/module/chat', declarationDir:'./dev/src/module/chat'}),
            // serve('dist')
            // serve({ contentBase:['','public'], host:'localhost', port:3000 , open:true}),
            url(),
            peerDepsExternal()
        ]
    },
    // {
    //
    //     extensions: [/node_module/],
    //     input: './dev/src/index.tsx',
    //     output:[
    //         {
    //             dir:'./dev/dist',
    //             format:'cjs',
    //             preserveModules:true,
    //             preserveModulesRoot:'src'
    //         }
    //     ],
    //     external: [ 'react', 'react-dom', 'react-router-dom', 'react/jsx-runtime', 'hoist-non-react-statics' ],
    //     plugins:[
    //         nodeResolve({extensions}),
    //         babel({
    //             exclude:'node_module/**',
    //             extensions,
    //             include:['dev/src/**/*'],
    //             babelHelpers:'bundled',
    //             presets: ['@babel/preset-react']
    //         }),
    //         commonjs({include:'node_module/**'}),
    //         typescript({tsconfig:'./dev/tsconfig.json', outDir:'./dev/dist' }),
    //         // serve('dist')
    //         serve({ contentBase:['','./dev/public'], host:'localhost', port:3000 , open:true}),
    //         url()
    //     ]
    // },
    // {
    //     extensions: [/node_module/],
    //     input: './dev/src/index.tsx',
    //     output:[
    //         {
    //             dir:'./dev/dist',
    //             format:'es',
    //             preserveModules:true,
    //             preserveModulesRoot:'src'
    //         }
    //     ],
    //     external: [ 'react', 'react-dom', 'react-dom/client', 'react-router-dom', 'react/jsx-runtime', 'hoist-non-react-statics' ],
    //     // external: id => /^([a-z0-9]|\@)/.test(id),
    //     plugins:[
    //         nodeResolve(
    //             // {extensions, browser:true}
    //         ),
    //         babel({
    //             exclude:'node_module/**',
    //             extensions,
    //             include:['./dev/src/**/*'],
    //             babelHelpers:'bundled',
    //             presets: ['@babel/preset-react']
    //         }),
    //         commonjs(
    //             // {include:'node_module/**'
    //             // ,
    //             //     namedExports:{
    //             //         'hoist-non-react-statics': ['hoistNonReactStatics'],
    //             //         'react-dom/client': ['createRoot', 'unstable_batchedUpdates']
    //             // }
    //             // }
    //         ),
    //         typescript({tsconfig:'./dev/tsconfig.json', outDir:'./dev/dist', declarationDir:'./dev/dist'}),
    //         // serve('dist')
    //         serve({ contentBase:['./dev/dist/dev/src','./dev/public' ],verbose:false, host:'localhost', port:3000}),
    //         url(),
    //         peerDepsExternal()
    //     ]
    // }
]

export default config